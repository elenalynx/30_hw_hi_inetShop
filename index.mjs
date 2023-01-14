import {sum} from "./sum.mjs";
import fastify from "fastify";

// console.log(sum(2, 5));

// const a = 5;
// const b = 55;

// console.log(a + b);


const server = fastify({
    logger: true,
});

server.post('/uppercase', (request, reply) => {
    const {body} = request;

    reply.status(404);
    // reply.header('customname', 'sfsedf');
    return body.toUpperCase();
});

server.listen({
    port: 8082,
    host: '0.0.0.0',
})
    .then(() => {
        console.log('Success');
    })
    .catch(err => {

        console.log(err.message);
    });

