-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema instagram
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema instagram
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `instagram` DEFAULT CHARACTER SET latin1 ;
USE `instagram` ;

-- -----------------------------------------------------
-- Table `instagram`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `instagram`.`USER` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `bio` VARCHAR(100) NULL DEFAULT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `website` VARCHAR(45) NULL DEFAULT NULL,
  `phoneNumber` INT(20) NULL DEFAULT NULL,
  `gender` VARCHAR(45) NULL DEFAULT 'UNDEFINED',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  UNIQUE INDEX `username_UNIQUE` (`username` ASC),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC),
  UNIQUE INDEX `password_UNIQUE` (`password` ASC),
  UNIQUE INDEX `phoneNumber_UNIQUE` (`phoneNumber` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `instagram`.`POST`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `instagram`.`POST` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_user` INT(11) NOT NULL,
  `photo` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_user_idx` (`id_user` ASC),
  CONSTRAINT `fk_user_post`
    FOREIGN KEY (`id_user`)
    REFERENCES `instagram`.`USER` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `instagram`.`COMENTS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `instagram`.`COMENTS` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_user` INT(11) NOT NULL,
  `id_post` INT(11) NOT NULL,
  `content` VARCHAR(45) NOT NULL,
  `created_at` DATETIME NOT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_user_idx` (`id_user` ASC),
  INDEX `fk_post_idx` (`id_post` ASC),
  CONSTRAINT `fk_user_coments`
    FOREIGN KEY (`id_user`)
    REFERENCES `instagram`.`USER` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_coments`
    FOREIGN KEY (`id_post`)
    REFERENCES `instagram`.`POST` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `instagram`.`FOLLOWERS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `instagram`.`FOLLOWERS` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_follower` INT(11) NOT NULL,
  `id_user` INT(11) NOT NULL,
  `accepted` TINYINT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_user_idx` (`id_user` ASC),
  INDEX `fk_follower_idx` (`id_follower` ASC),
  CONSTRAINT `fk_user_followers`
    FOREIGN KEY (`id_user`)
    REFERENCES `instagram`.`USER` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_follower_followers`
    FOREIGN KEY (`id_follower`)
    REFERENCES `instagram`.`USER` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `instagram`.`LIKES`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `instagram`.`LIKES` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `id_user` INT(11) NOT NULL,
  `id_post` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC),
  INDEX `fk_user_idx` (`id_user` ASC),
  INDEX `fk_post_idx` (`id_post` ASC),
  CONSTRAINT `fk_user_likes`
    FOREIGN KEY (`id_user`)
    REFERENCES `instagram`.`USER` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_likes`
    FOREIGN KEY (`id_post`)
    REFERENCES `instagram`.`POST` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `instagram`.`HASHTAG`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `instagram`.`HASHTAG` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tag` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `instagram`.`POST_TAG`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `instagram`.`POST_TAG` (
  `id_post` INT NOT NULL,
  `id_tag` INT NOT NULL,
  `id` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  INDEX `fk_post_idx` (`id_post` ASC),
  INDEX `fk_tag_idx` (`id_tag` ASC),
  CONSTRAINT `fk_post_post_tag`
    FOREIGN KEY (`id_post`)
    REFERENCES `instagram`.`POST` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tag_post_tag`
    FOREIGN KEY (`id_tag`)
    REFERENCES `instagram`.`HASHTAG` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
