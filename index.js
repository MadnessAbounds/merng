const { ApolloServer } = require ('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('Server Running Bubba');
        return server.listen({ port: 5000});
    })
    .then((res) => {
        console.log(`server running at ${res.url}`)
    });