CREATE DATABASE camerashare_db;

USE camerashare_db;

CREATE TABLE rentals (
    id INT AUTO_INCREMENT NOT NULL,
    category VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    available BOOLEAN NOT NULL DEFAULT true,
    description TEXT,
    PRIMARY KEY (id)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    username VARCHAR(100) NOT NULL,
    hashstring TEXT NOT NULL,
    PRIMARY KEY (id)
);



-- auto incrementing id
-- category
-- name
-- price 
-- available 
-- description
