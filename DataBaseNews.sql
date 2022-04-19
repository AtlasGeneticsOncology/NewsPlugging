CREATE TABLE `news` ( 
  `idNew` INT AUTO_INCREMENT NOT NULL,
  `title` VARCHAR(250) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `content` VARCHAR(10000) NOT NULL,
  `created_at` DATE NOT NULL,
  `updated_at` DATE NOT NULL,
  `idUser` INT NOT NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`idNew`)
);
