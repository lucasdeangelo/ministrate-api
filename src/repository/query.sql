DROP DATABASE IF EXISTS Ministrate;
CREATE DATABASE Ministrate;
USE Ministrate;

CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(16) NOT NULL,
);