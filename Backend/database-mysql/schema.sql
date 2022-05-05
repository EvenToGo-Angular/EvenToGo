DROP DATABASE IF EXISTS eventogo;

CREATE DATABASE eventogo;

USE eventogo;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  role varchar(5) NOT NULL ,
  name varchar(50) NOT NULL,
  password varchar(255) NOT NULL,
  email varchar(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE events (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  date varchar(255) NOT NULL,
  image varchar(255) NOT NULL,
  type varchar(255) NOT NULL,
  places int(10),
  selected boolean ,
  PRIMARY KEY (id)
);
-- from slim this table for the events selected by the user that will be added in the profile component
CREATE TABLE  favorite(
  id_user int ,
  id_event int,
  
  FOREIGN KEY (id_user) REFERENCES users(id),
  FOREIGN KEY (id_event) REFERENCES events(id)
);

CREATE TABLE contacts (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  email varchar(40) NOT NULL,
  subject varchar(50),
  message varchar(255) NOT NULL,
  PRIMARY KEY (id)
);



INSERT INTO `events` (`id`,`title`,`description`,`date`,`image`,`type`,`places`) VALUES

(3,"Islamic gathering Okba Ibn Nafea Mosque","Islamic lecture and ceremony with the presence of the mufti and imams you are welcomed","04/28/2022 20:30","https://arabi21.com/Content/Upload/large/1120198225417775.jpg","Religious",400),
(4,"The Last Mercenary Film Show  Hammamet","You are invited to attend the Action film the Great Jean-Claude Van Damme for just 30Dt per person, fo more informations call:+1225456258556","06/10/2022 21:00","https://m.media-amazon.com/images/M/MV5BNGNkZmJiZTAtY2M3MC00ZTNjLThkYmQtNmMxMTg3ZTJlNDA4XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg","Entertainment",100),
(5,"Festival of Carthage Tunis","The most famous Tunisian ferstival when you can meet and see your favourite actors in coming up so be at time * for reservation call 2164525663","08/17/2022","http://www.webdo.tn/wp-content/uploads/2021/06/car.jpg","Cultural",200),
(6,"Eid crescent sighting,Tunis","It's your opportunity to celebrate the sighting of the Eid crescent on Tunisia / Sidi belhsan chadli","05/30/2022 18:30","https://www.hakaekonline.com/uploads/content/big/1559552987_article.jpg","Religious",320),
(7,"Islamic gathering, Okba Ibn Nafea Mosque","Islamic lecture and ceremony with the presence of the mufti and imams you are welcomed","05/28/2022 20:30","https://arabi21.com/Content/Upload/large/1120198225417775.jpg","Religious",500),
(8,"Beach Night Party, Bizert", "So much fun on bizert beach party music and dance so be on Time!", "07/28/2022 20:00","https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/73/2020/02/04051939/SO-Sofitel-Hua-Hin-SO-Beach-Party-05-1-585x390.jpg","entertainment",150);

INSERT INTO `contacts` (`id`,`name`,`email`,`subject`,`message`) VALUES
  (1,"Imed Rahal","imed@rahal.com","Subject test 1", "This is a test message from Imed"),
  (2,"Youssef Bedoui","youssef@rahal.com","Subject test 2", "This is a test message from Youssef"),
  (3,"Amine Selmi","amine@rahal.com","Subject test 3", "This is a test message from Amine"),
  (4,"Ala Oueslati  ","ala@rahal.com","Subject test 4", "This is a test message from Ala"),
  (5,"Slim Guednez","slim@rahal.com","Subject test 5", "This is a test message from Slim"),
  (6,"Kais Mellah","kais@rahal.com","Subject test 6", "This is a test message from Kais");


/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/
