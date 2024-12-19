import { insertText, fetchTextos } from "./dbservices.js";

export const addTexto = async (titulo, tipo, tema, corpo) => {
    return await insertText(titulo, tipo, tema, corpo);
};

export const getTextos = async () => {
    return await fetchTextos();
};