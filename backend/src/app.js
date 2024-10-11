import 'dotenv/config.js';
import cors from 'cors';
import express from 'express';
import adicionarRotas from './rotas.js';

const server = express();
server.use(cors());
server.use(express.json());

adicionarRotas(server)

server.listen(process.env.PORTA,
     () => console.log(`let's go progamations na porta ${process.env.PORTA}`)
);