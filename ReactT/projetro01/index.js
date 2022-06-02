import 'dotenv/config';
import express from 'express'
import cors from 'cors'
import usuarioController from './usuarioController/usuarioController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use(usuarioController)


server.listen(process.env.PORT, () => 
    console.log(`API conectada na Porta ${process.env.PORT}`)
)