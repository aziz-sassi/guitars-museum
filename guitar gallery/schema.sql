DROP DATABASE IF EXISTS items;

CREATE DATABASE items;

USE items;

CREATE TABLE guitars (
  id int NOT NULL AUTO_INCREMENT,
  model varchar(400) NOT NULL, 
     imageUrl varchar(800) NOT NULL,
  year int NOT NULL,
    likes int NOT NULL ,


  PRIMARY KEY (ID)
);

INSERT INTO guitars ( model, imageUrl,year,likes) VALUES ( "Rickenbacker 360-6","https://images.reverb.com/image/upload/s--2sXiCW7o--/t_card-square/v1567028854/hcuaysmaaypfzhuzg4md.jpg", 1915,143);
INSERT INTO guitars ( model, imageUrl,year,likes) VALUES ( "Fender Reissue Jaguar","https://images.reverb.com/image/upload/s--L2eX_XeE--/t_card-square/v1567028330/qxxvyiyw9kylo2tkkvax.jpg",1965, 50);

