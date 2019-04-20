const path = require('path');
const { ApolloServer } = require('apollo-server-hapi');
const Hapi = require('hapi');
const inert = require('inert');
const https = require('hapi-require-https');

const typeDefs = require('./lib/schema');
const resolvers = require('./lib/resolvers');
const { PORT, HOSTNAME, NODE_ENV } = require('./lib/config');

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Hapi.server({
  port: PORT,
  host: HOSTNAME,
  routes: {
    files: {
      relativeTo: path.join(__dirname, 'dist')
    }
  }
});

async function start() {
  await app.register([
    inert,
    https,
    {
      plugin: require('hapi-pino'),
      options: {
        prettyPrint: NODE_ENV !== 'production',
        redact: ['req.headers.authorization']
      }
    }
  ]);

  app.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: '.',
        redirectToSlash: true,
        index: true
      }
    }
  });

  await server.applyMiddleware({
    app
  });

  await server.installSubscriptionHandlers(app.listener);

  await app.start();

  app.logger().info(`Server running at ${app.info.uri}`);
}

start().catch(error => app.logger().error(error));
