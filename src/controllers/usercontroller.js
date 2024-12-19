import express, { request, response } from "express";
import db from "../services/userservices.js";

const route = express.Router();

route.post('/', async(request, response) => {
    try{
      const {name, email, password} = request.body;
      await db.createUser(name, email, password);
      response.status(201).send({message:`Salvo com sucesso`});
    }catch{
      response.status(500).send({message:`Erro na requisição`})
    }
  });
  
route.put('/', async(request, response) => {
    try{
      const {name, email, password, idUser} = request.body;
      await db.updateUser(name, email, password, idUser);
      response.status(200).send({message:`Dados Atualizados com sucesso!`});
    }catch{
      response.status(500).send({message:`Erro na requisição`})
    }
  });
  
route.delete('/:idUser', async(request, response) => {
    try{
      const {idUser} = request.params
      await db.deleteUser(idUser) 
      response.status(200).send({message:`Usuário deletado com sucesso!`});
    }catch(error){
      response.status(500).send({message:`Erro na requisição  `})
    }
});

export default route;