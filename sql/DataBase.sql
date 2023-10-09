-- MySQL Script generated by MySQL Workbench
-- Mon Oct  9 15:02:57 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Temporada`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Temporada` (
  `id_temporada` INT NOT NULL AUTO_INCREMENT,
  `fecha_inicio` DATE NULL,
  `fecha_fin` DATE NULL,
  PRIMARY KEY (`id_temporada`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Serie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Serie` (
  `id_serie` INT NOT NULL AUTO_INCREMENT,
  `nombre_serie` VARCHAR(45) NULL,
  `caracter` VARCHAR(45) NULL,
  `Temporada_id_temporada` INT NOT NULL,
  PRIMARY KEY (`id_serie`, `Temporada_id_temporada`),
  INDEX `fk_Serie_Temporada1_idx` (`Temporada_id_temporada` ASC) VISIBLE,
  CONSTRAINT `fk_Serie_Temporada1`
    FOREIGN KEY (`Temporada_id_temporada`)
    REFERENCES `mydb`.`Temporada` (`id_temporada`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Equipo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Equipo` (
  `idEquipo` INT NOT NULL,
  `nombre_equipo` VARCHAR(45) NULL,
  `initial` VARCHAR(45) NULL,
  `equip_diret` VARCHAR(45) NULL,
  `color` VARCHAR(45) NULL,
  PRIMARY KEY (`idEquipo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Pelotero`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Pelotero` (
  `id_jugador` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `edad` INT NULL,
  `anonn_exp` INT NULL,
  `prom_bateo` DECIMAL(2) NULL,
  PRIMARY KEY (`id_jugador`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Posiciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Posiciones` (
  `posiciones` VARCHAR(45) NULL,
  `efectividad` INT NULL,
  `Pelotero_id_jugador` INT NOT NULL,
  PRIMARY KEY (`Pelotero_id_jugador`),
  CONSTRAINT `fk_Posiciones_Pelotero1`
    FOREIGN KEY (`Pelotero_id_jugador`)
    REFERENCES `mydb`.`Pelotero` (`id_jugador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Lanzador`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Lanzador` (
  `Pelotero_id_jugador` INT NOT NULL,
  `id_lanzador` INT NOT NULL,
  `cant_win` INT NULL,
  `cant_over` VARCHAR(45) NULL,
  `mano` VARCHAR(45) NULL,
  `prom_carr_limpia` INT NULL,
  PRIMARY KEY (`Pelotero_id_jugador`),
  INDEX `fk_Lanzador_Pelotero1_idx` (`Pelotero_id_jugador` ASC) VISIBLE,
  CONSTRAINT `fk_Lanzador_Pelotero1`
    FOREIGN KEY (`Pelotero_id_jugador`)
    REFERENCES `mydb`.`Pelotero` (`id_jugador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`entidad_equipo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`entidad_equipo` (
  `id_identidad` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `Equipo_idEquipo` INT NOT NULL,
  `Serie_id_serie` INT NOT NULL,
  PRIMARY KEY (`id_identidad`, `Equipo_idEquipo`, `Serie_id_serie`),
  INDEX `fk_entidad_equipo_Equipo1_idx` (`Equipo_idEquipo` ASC) VISIBLE,
  INDEX `fk_entidad_equipo_Serie1_idx` (`Serie_id_serie` ASC) VISIBLE,
  CONSTRAINT `fk_entidad_equipo_Equipo1`
    FOREIGN KEY (`Equipo_idEquipo`)
    REFERENCES `mydb`.`Equipo` (`idEquipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_entidad_equipo_Serie1`
    FOREIGN KEY (`Serie_id_serie`)
    REFERENCES `mydb`.`Serie` (`id_serie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Participaciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Participaciones` (
  `Serie_id_serie` INT NOT NULL,
  `Equipo_idEquipo` INT NOT NULL,
  `Juegos_ganados` INT NULL,
  `Juegos_Perdidos` INT NULL,
  PRIMARY KEY (`Serie_id_serie`, `Equipo_idEquipo`),
  INDEX `fk_Serie_has_Equipo_Equipo1_idx` (`Equipo_idEquipo` ASC) VISIBLE,
  INDEX `fk_Serie_has_Equipo_Serie_idx` (`Serie_id_serie` ASC) VISIBLE,
  CONSTRAINT `fk_Serie_has_Equipo_Serie`
    FOREIGN KEY (`Serie_id_serie`)
    REFERENCES `mydb`.`Serie` (`id_serie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Serie_has_Equipo_Equipo1`
    FOREIGN KEY (`Equipo_idEquipo`)
    REFERENCES `mydb`.`Equipo` (`idEquipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Pelotero_has_Equipo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Pelotero_has_Equipo` (
  `Pelotero_id_jugador` INT NOT NULL,
  `Equipo_idEquipo` INT NOT NULL,
  `Serie_id_serie` INT NOT NULL,
  PRIMARY KEY (`Pelotero_id_jugador`, `Equipo_idEquipo`, `Serie_id_serie`),
  INDEX `fk_Pelotero_has_Equipo_Equipo1_idx` (`Equipo_idEquipo` ASC) VISIBLE,
  INDEX `fk_Pelotero_has_Equipo_Pelotero1_idx` (`Pelotero_id_jugador` ASC) VISIBLE,
  INDEX `fk_Pelotero_has_Equipo_Serie1_idx` (`Serie_id_serie` ASC) VISIBLE,
  CONSTRAINT `fk_Pelotero_has_Equipo_Pelotero1`
    FOREIGN KEY (`Pelotero_id_jugador`)
    REFERENCES `mydb`.`Pelotero` (`id_jugador`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pelotero_has_Equipo_Equipo1`
    FOREIGN KEY (`Equipo_idEquipo`)
    REFERENCES `mydb`.`Equipo` (`idEquipo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pelotero_has_Equipo_Serie1`
    FOREIGN KEY (`Serie_id_serie`)
    REFERENCES `mydb`.`Serie` (`id_serie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Juegos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Juegos` (
  `Serie_id_serie` INT NOT NULL,
  `Fecha` DATE NULL,
  `Equipo_win` VARCHAR(45) NULL,
  `Carreras_favor` INT NULL,
  `Carreras_contra` INT NULL,
  PRIMARY KEY (`Serie_id_serie`),
  CONSTRAINT `fk_Juegos_Serie1`
    FOREIGN KEY (`Serie_id_serie`)
    REFERENCES `mydb`.`Serie` (`id_serie`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
