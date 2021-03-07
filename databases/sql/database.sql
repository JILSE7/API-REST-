/* Creacion de la base de datos del equipo 8 */
CREATE DATABASE equipo8;
USE equipo8;

/* Creacion de la tabla user */
CREATE TABLE user (
     id INT NOT NULL AUTO_INCREMENT,
     username VARCHAR(20) UNIQUE NOT NULL,
     firstName VARCHAR(50) NOT NULL,
     lastName VARCHAR(50) NOT NULL,
     typeOfUser VARCHAR(20) NOT NULL,
     phone VARCHAR(15) NOT NULL,
     email VARCHAR(300) UNIQUE NOT NULL,
     password VARCHAR(50) NOT NULL,
     location VARCHAR(300) NOT NULL,
     bio VARCHAR(100),
     profilePhoto VARCHAR(1000),
     PRIMARY KEY(id)
);

/* Creacion de la tabla car */
CREATE TABLE car (
     id INT NOT NULL AUTO_INCREMENT,
     price FLOAT NOT NULL,
     make VARCHAR(50) NOT NULL,
     model VARCHAR(50) NOT NULL,
     year INT NOT NULL,
     miles FLOAT NOT NULL,
     drivetrain VARCHAR(50) NOT NULL,
     chasisType VARCHAR(50) NOT NULL,
     photos VARCHAR(1000) NOT NULL,
     description VARCHAR(1000),
     advertiserID INT NOT NULL,
     PRIMARY KEY(id),
     FOREIGN KEY(advertiserID) REFERENCES user(id)
);

/* Creacion de la tabla purchase_request */
CREATE TABLE purchase_request (
     id INT NOT NULL AUTO_INCREMENT,
     creationDate DATE NOT NULL,
     status VARCHAR(50) NOT NULL,
     purchaserID INT NOT NULL,
     carID INT NOT NULL,
     PRIMARY KEY(id),
     FOREIGN KEY(purchaserID) REFERENCES user(id),
     FOREIGN KEY(carID) REFERENCES car(id)
);

/* Insertando datos a la tabla user */
INSERT INTO user VALUES (1, 'Cornugs', 'Brandon', 'Fuentes', 'Anunciante', '7341408998', 'brandon@gmail.com', 'Brandon543', 'Av. Paseo de la Reforma, Juárez, Cuauhtémoc, 06500 Ciudad de México', 'Descripcion de Brandon', 'https://lh5.googleusercontent.com/p/AF1QipNCKtX7g_qaXyQY2jUMCzpffyfSg5BD5SaCziHa=w408-h510-k-no');
INSERT INTO user VALUES (2, 'SaidXD', 'Said', 'Mandujano', 'Comprador', '5576632262', 'said@gmail.com', 'Said543', 'Miguel Hidalgo, Ciudad de México, CDMX', 'Descripcion de Said', 'https://lh5.googleusercontent.com/p/AF1QipOtsojGOvbJPmiBTauT1Ku3Yf1Ztt2vntEiqOaM=w408-h320-k-no');
INSERT INTO user VALUES (3, 'Antony88', 'Antonio', 'Millan', 'Comprador/Anunciante', '7712222297', 'antonio@gmail.com', 'Antonio543', '55800 San Juan Teotihuacan de Arista, CDMX', 'Descripcion de Antonio', 'https://lh5.googleusercontent.com/p/AF1QipOtsojGOvbJPmiBTauT1Ku3Yf1Ztt2vntEiqOaM=w408-h320-k-no');

/* Insertando datos a la tabla car */
INSERT INTO car VALUES (1, 40000, 'Nissan', 'Versa', 2014, 100000, 'Automatico', 'Riostra', 'https://www.google.com.mx/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fbmw-i8-coupe-2019-1600-02-1579192194.jpg%3Fcrop%3D1xw%3A1xh%3Bcenter%2Ctop%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.caranddriver.com%2Fes%2Fcoches%2Fplaneta-motor%2Fa30548712%2Fbmw-i8-adios%2F&tbnid=zCuJQV0110bOGM&vet=12ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ..i&docid=GhR9kXcvw8XSbM&w=1200&h=600&q=bmw%20i8&ved=2ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ', 'Semi nuevo', 1);
INSERT INTO car VALUES (2, 50000, 'Toyota', 'Yaris', 2015, 150000, 'Manual', 'Clasico', 'https://www.google.com.mx/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fbmw-i8-coupe-2019-1600-02-1579192194.jpg%3Fcrop%3D1xw%3A1xh%3Bcenter%2Ctop%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.caranddriver.com%2Fes%2Fcoches%2Fplaneta-motor%2Fa30548712%2Fbmw-i8-adios%2F&tbnid=zCuJQV0110bOGM&vet=12ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ..i&docid=GhR9kXcvw8XSbM&w=1200&h=600&q=bmw%20i8&ved=2ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ', 'Usado por 18 meses', 3);
INSERT INTO car VALUES (3, 55000, 'BMW', 'i8', 2016, 130000, 'Automatico', 'Compacto', 'https://www.google.com.mx/imgres?imgurl=https%3A%2F%2Fhips.hearstapps.com%2Fhmg-prod.s3.amazonaws.com%2Fimages%2Fbmw-i8-coupe-2019-1600-02-1579192194.jpg%3Fcrop%3D1xw%3A1xh%3Bcenter%2Ctop%26resize%3D1200%3A*&imgrefurl=https%3A%2F%2Fwww.caranddriver.com%2Fes%2Fcoches%2Fplaneta-motor%2Fa30548712%2Fbmw-i8-adios%2F&tbnid=zCuJQV0110bOGM&vet=12ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ..i&docid=GhR9kXcvw8XSbM&w=1200&h=600&q=bmw%20i8&ved=2ahUKEwi9x-Lt_IfvAhXGY60KHeMEB0kQMygBegUIARCxAQ', 'Casi nuevo', 1);

/* Insertando datos a la tabla purchase_request */
INSERT INTO purchase_request VALUES (1, '20-10-25', 'Completado', 2, 1);
INSERT INTO purchase_request VALUES (2, '21-01-13', 'Pendiente', 3, 3);
INSERT INTO purchase_request VALUES (3, '21-02-28', 'Pendiente', 2, 2);