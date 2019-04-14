const got = require('got');
const { MAPIT_URL, WDIV_URL, MAPIT_API_KEY } = require('./config');
const meps = require('./data/meps.json');

const DANGER_ZONE = 'South East';
const UK_POSTCODE_REGEX = /^(([A-Z][0-9]{1,2})|(([A-Z][A-HJ-Y][0-9]{1,2})|(([A-Z][0-9][A-Z])|([A-Z][A-HJ-Y][0-9]?[A-Z])))).[0-9][A-Z]{2}$/i;

function validatePostcode(postcode) {
  if (UK_POSTCODE_REGEX.test(postcode)) return true;
  throw new Error('Invalid UK postcode');
}

function getPollingStation(station) {
  const [lat, long] = station.geometry.coordinates;
  return Object.assign({ lat, long }, station.properties, {
    address: station.properties.address.replace(/(?:\r\n|\r|\n)/g, '<br />')
  });
}

async function voterInfo(parent, args) {
  const postcode = parent ? parent.postcode : args.postcode;
  validatePostcode(postcode);
  const {
    body: { postcode_location, council, polling_station }
  } = await got(`/postcode/${postcode}.json`, {
    baseUrl: WDIV_URL,
    json: true
  });
  const [lat, long] = postcode_location.geometry.coordinates;
  const pollingStation = polling_station
    ? getPollingStation(polling_station)
    : {};
  return {
    lat,
    long,
    council,
    pollingStation
  };
}

module.exports = {
  Region: {
    MEPs(parent) {
      return meps.filter(mep => mep.constituency.includes(parent.name));
    },
    voterInfo
  },
  Query: {
    async region(parent, args) {
      const { postcode } = args;
      validatePostcode(postcode);
      const {
        body: { areas }
      } = await got(`/postcode/${postcode}`, {
        baseUrl: MAPIT_URL,
        json: true,
        headers: MAPIT_API_KEY ? { 'X-Api-Key': MAPIT_API_KEY } : {}
      });
      const politicalRegions = Object.values(areas);
      const epRegion = politicalRegions.find(r => r.type === 'EUR');
      return {
        name: epRegion.name,
        postcode,
        isNigel: epRegion.name === DANGER_ZONE
      };
    },
    voterInfo
  }
};
