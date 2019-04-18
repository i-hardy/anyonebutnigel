const got = require('got');
const resolvers = require('../../lib/resolvers');
const postcodes = require('../fixtures/postcodes.json');

describe('GraphQL Resolvers', () => {
  let postcode = '';
  let response = {};

  beforeEach(() => {
    got.get = jest.fn().mockResolvedValue(response);
    postcode = postcodes[Math.floor(Math.random() * postcodes.length)];
  });

  describe('Region lookup', () => {
    beforeEach(() => {
      response = {
        body: {
          areas: {
            EP: {
              name: 'PretendRegion',
              type: 'EUR'
            }
          }
        }
      };
    });

    it('throws an error if passed an invalid postcode', async () => {
      postcode = '123456';
      await expect(
        resolvers.Query.region(null, { postcode })
      ).rejects.toThrow();
    });

    it('allows any valid UK postcode', async () => {
      const res = await resolvers.Query.region(null, { postcode });
      expect(res).toEqual({
        isNigel: false,
        name: 'PretendRegion',
        postcode
      });
    });

    it('tolerates excess whitespace in postcodes', async () => {
      const res = await resolvers.Query.region(null, {
        postcode: `  ${postcode}   `
      });
      expect(res).toEqual({
        isNigel: false,
        name: 'PretendRegion',
        postcode
      });
    });

    it('returns isNigel: true for the south east region', async () => {
      const seResponse = {
        body: {
          areas: {
            EP: {
              name: 'South East',
              type: 'EUR'
            }
          }
        }
      };
      got.get = jest.fn().mockResolvedValue(seResponse);

      const res = await resolvers.Query.region(null, { postcode });
      expect(res).toEqual({
        isNigel: true,
        name: 'South East',
        postcode
      });
    });
  });

  describe('Voting info lookup', () => {
    beforeEach(() => {
      response = {
        body: {
          postcode_location: { geometry: { coordinates: [1, 2] } },
          council: { name: 'Camberwick Green' },
          polling_station: {
            geometry: { coordinates: [3, 4] },
            properties: { address: '1 Poll Street\nCamberwick Green' }
          }
        }
      };
    });

    it('throws an error if passed an invalid postcode', async () => {
      postcode = '123456';
      await expect(
        resolvers.Query.voterInfo(null, { postcode })
      ).rejects.toThrow();
    });

    it('allows any valid UK postcode', async () => {
      const res = await resolvers.Query.voterInfo(null, { postcode });
      expect(res).toEqual({
        lat: 1,
        long: 2,
        council: { name: 'Camberwick Green' },
        pollingStation: {
          lat: 3,
          long: 4,
          address: '1 Poll Street<br />Camberwick Green'
        }
      });
    });
  });
});
