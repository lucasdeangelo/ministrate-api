import { addTexto, getTextos } from "../services/textservices.js";

export const createTexto = async (request, response) => {
    const { titulo, tipo, tema, corpo } = request.body;
  
    try {
      const result = await addTexto(titulo, tipo, tema, corpo);
      response.send('Text added');
    } catch (err) {
      console.error('Error:', err);
      response.status(500).send('Error inserting hino');
    }
};
  
export const fetchTextos = async (request, response) => {
    try {
      const textos = await getTextos();
      response.json(textos);
    } catch (err) {
      console.error('Error:', err);
      response.status(500).send('Error fetching texts');
    }
};
  