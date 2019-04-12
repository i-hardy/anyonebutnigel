const joi = require('joi');

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line
  require('dotenv').config();
}

const envSchema = joi
  .object({
    NODE_ENV: joi
      .string()
      .allow(['test', 'development', 'production'])
      .required(),
    PORT: joi
      .number()
      .port()
      .default(4000),
    HOSTNAME: joi.string().default('0.0.0.0'),
    MAPIT_URL: joi
      .string()
      .uri()
      .required(),
    MAPIT_API_KEY: joi
      .string()
      .token()
      .when('NODE_ENV', {
        is: 'development',
        then: joi.optional()
      }),
    WDIV_URL: joi
      .string()
      .uri()
      .required()
  })
  .unknown();

let config = {};

joi.validate(process.env, envSchema, (err, value) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  }
  config = value;
});

module.exports = config;
