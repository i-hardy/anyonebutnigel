const { ApolloServer } = require('apollo-server-hapi');
const Hapi = require('hapi');

const typeDefs = require('./lib/schema');
const resolvers = require('./lib/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Hapi.server({
  port: 4000,
  host: 'localhost'
});

async function start() {
  await app.register({
    plugin: require('hapi-pino'),
    options: {
      prettyPrint: process.env.NODE_ENV !== 'production',
      redact: ['req.headers.authorization']
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
