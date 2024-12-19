import dbConnections from '../repository/connection.js';
import { ObjectId } from 'mongodb';

export const insertText = async (titulo, tipo, tema, corpo) => {
    const { client, db } = await dbConnections.connectMongoDB();
    const textosCollection = db.collection('textos');
  
    const result = await textosCollection.insertOne({
      titulo,
      tipo,
      tema,
      corpo
    });
  
    client.close();
    return result;
};

export const fetchTextos = async () => {
    const { client, db } = await dbConnections.connectMongoDB();
    const textosCollection = db.collection('textos');
    const textos = await textosCollection.find({}).toArray();
  
    client.close();
    return textos;
};