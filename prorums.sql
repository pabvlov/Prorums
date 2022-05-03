/*
 Navicat Premium Data Transfer

 Source Server         : uwu
 Source Server Type    : MySQL
 Source Server Version : 100424
 Source Host           : localhost:3306
 Source Schema         : prorums

 Target Server Type    : MySQL
 Target Server Version : 100424
 File Encoding         : 65001

 Date: 03/05/2022 10:41:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for categoria
-- ----------------------------
DROP TABLE IF EXISTS `categoria`;
CREATE TABLE `categoria`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `posicion` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of categoria
-- ----------------------------
INSERT INTO `categoria` VALUES (1, 'General', 'En esta categoria pasan muchas cosas bonitas', 1);
INSERT INTO `categoria` VALUES (2, 'Universidad Tecnológica de Chile INACAP', 'Todo lo de Universidad Tecnológica de Chile INACAP', 2);

-- ----------------------------
-- Table structure for changelog
-- ----------------------------
DROP TABLE IF EXISTS `changelog`;
CREATE TABLE `changelog`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `cambios` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `fecha` datetime(0) NULL DEFAULT NULL,
  `id_usuario_fk` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_user_changelog`(`id_usuario_fk`) USING BTREE,
  CONSTRAINT `id_user_changelog` FOREIGN KEY (`id_usuario_fk`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of changelog
-- ----------------------------

-- ----------------------------
-- Table structure for configuracion
-- ----------------------------
DROP TABLE IF EXISTS `configuracion`;
CREATE TABLE `configuracion`  (
  `nombre_foro` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `logo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img_fondo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id_noticia_fk` int NULL DEFAULT NULL,
  `id_changelog_fk` int NULL DEFAULT NULL,
  INDEX `id_changelog_config`(`id_changelog_fk`) USING BTREE,
  INDEX `id_advertisement_config`(`id_noticia_fk`) USING BTREE,
  CONSTRAINT `id_advertisement_config` FOREIGN KEY (`id_noticia_fk`) REFERENCES `noticia` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_changelog_config` FOREIGN KEY (`id_changelog_fk`) REFERENCES `changelog` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of configuracion
-- ----------------------------

-- ----------------------------
-- Table structure for foro
-- ----------------------------
DROP TABLE IF EXISTS `foro`;
CREATE TABLE `foro`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `descripcion` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `foto` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `posicion` int NULL DEFAULT NULL,
  `id_categoria_fk` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_category_forum`(`id_categoria_fk`) USING BTREE,
  CONSTRAINT `id_category_forum` FOREIGN KEY (`id_categoria_fk`) REFERENCES `categoria` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of foro
-- ----------------------------
INSERT INTO `foro` VALUES (3, 'Reglas de Prorums', 'El mejor foro del mundo', 'https://media1.giphy.com/media/l0HU20BZ6LbSEITza/giphy.gif?cid=790b761137c3d8544ccd2309222f972e29594a524a3af605&rid=giphy.gif&ct=g', 1, 1);
INSERT INTO `foro` VALUES (4, 'Zona Fumadores', 'xd', 'https://i.giphy.com/media/l3q2zxUCPX4rmO8ZG/giphy.webp', 1, 2);
INSERT INTO `foro` VALUES (5, 'Peleas Internas', 'Foro para expresar tus xd', 'https://i.giphy.com/media/lueaDWxOz0LNS/200w.webp', 3, 2);

-- ----------------------------
-- Table structure for hilo
-- ----------------------------
DROP TABLE IF EXISTS `hilo`;
CREATE TABLE `hilo`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `cuerpo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fecha` datetime(0) NULL DEFAULT NULL,
  `id_usuario_fk` int NOT NULL,
  `id_tema_fk` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_user_thread`(`id_usuario_fk`) USING BTREE,
  INDEX `id_topic_thread`(`id_tema_fk`) USING BTREE,
  CONSTRAINT `id_topic_thread` FOREIGN KEY (`id_tema_fk`) REFERENCES `tema` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_user_thread` FOREIGN KEY (`id_usuario_fk`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of hilo
-- ----------------------------

-- ----------------------------
-- Table structure for hilo_tiene_reacciones
-- ----------------------------
DROP TABLE IF EXISTS `hilo_tiene_reacciones`;
CREATE TABLE `hilo_tiene_reacciones`  (
  `id_hilo_has_reacciones` int NOT NULL AUTO_INCREMENT,
  `id_usuario_fk` int NOT NULL,
  `id_reacciones_fk` int NOT NULL,
  `id_hilo_fk` int NOT NULL,
  PRIMARY KEY (`id_hilo_has_reacciones`) USING BTREE,
  INDEX `id_user_thhr`(`id_usuario_fk`) USING BTREE,
  INDEX `id_reaction_thhr`(`id_reacciones_fk`) USING BTREE,
  INDEX `id_thread_thhr`(`id_hilo_fk`) USING BTREE,
  CONSTRAINT `id_reaction_thhr` FOREIGN KEY (`id_reacciones_fk`) REFERENCES `reaccion` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_thread_thhr` FOREIGN KEY (`id_hilo_fk`) REFERENCES `hilo` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_user_thhr` FOREIGN KEY (`id_usuario_fk`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of hilo_tiene_reacciones
-- ----------------------------

-- ----------------------------
-- Table structure for noticia
-- ----------------------------
DROP TABLE IF EXISTS `noticia`;
CREATE TABLE `noticia`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `noticia` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id_usuario_fk` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_user_ad`(`id_usuario_fk`) USING BTREE,
  CONSTRAINT `id_noticia_usuario` FOREIGN KEY (`id_usuario_fk`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of noticia
-- ----------------------------

-- ----------------------------
-- Table structure for pais
-- ----------------------------
DROP TABLE IF EXISTS `pais`;
CREATE TABLE `pais`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `pais` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of pais
-- ----------------------------
INSERT INTO `pais` VALUES (1, 'Chile');

-- ----------------------------
-- Table structure for reaccion
-- ----------------------------
DROP TABLE IF EXISTS `reaccion`;
CREATE TABLE `reaccion`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `reaccion` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of reaccion
-- ----------------------------

-- ----------------------------
-- Table structure for rol
-- ----------------------------
DROP TABLE IF EXISTS `rol`;
CREATE TABLE `rol`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `rol` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `tarjeta` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `permisos` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of rol
-- ----------------------------
INSERT INTO `rol` VALUES (1, 'administrador', 'uwu', 'administrador');

-- ----------------------------
-- Table structure for tema
-- ----------------------------
DROP TABLE IF EXISTS `tema`;
CREATE TABLE `tema`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cuerpo` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `borrado` int NULL DEFAULT NULL,
  `fecha` datetime(0) NULL DEFAULT NULL,
  `tipo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id_foro_fk` int NOT NULL,
  `id_usuario_fk` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_forum_topic`(`id_foro_fk`) USING BTREE,
  INDEX `id_user_topic`(`id_usuario_fk`) USING BTREE,
  CONSTRAINT `id_forum_topic` FOREIGN KEY (`id_foro_fk`) REFERENCES `foro` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_user_topic` FOREIGN KEY (`id_usuario_fk`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tema
-- ----------------------------
INSERT INTO `tema` VALUES (1, 'Como hacer un foro', 'este es un tutorial de como hacer un foro', 0, '2022-04-26 22:50:31', 'Tutorial', 3, 10);
INSERT INTO `tema` VALUES (2, 'Como hacer un consome', 'este es un tutorial de como hacer un consome', 0, '2022-04-26 22:50:31', 'Tutorial', 4, 11);
INSERT INTO `tema` VALUES (3, 'Como hacer papas fritas', 'Con aceite', 0, '2022-04-30 16:58:08', 'Tutorial', 3, 10);
INSERT INTO `tema` VALUES (4, 'Pelea Profe Sergio vs Sra. Lidia', 'En este brawl veremos como se pelean jhaja', 0, '2022-05-03 10:17:55', 'Peleas', 5, 11);
INSERT INTO `tema` VALUES (5, 'Venta de Chaparritas afuera', 'que opinan de q vendan cosas afuera de la u', 0, '2022-05-03 10:33:44', 'Pregunta', 5, 12);
INSERT INTO `tema` VALUES (6, 'No se puede ni fumar en la u', 'toy fome quiero fumar angustiao', 0, '2022-05-03 10:33:44', 'Discusión', 4, 10);

-- ----------------------------
-- Table structure for tema_tiene_reacciones
-- ----------------------------
DROP TABLE IF EXISTS `tema_tiene_reacciones`;
CREATE TABLE `tema_tiene_reacciones`  (
  `id_tema_tiene_reacciones` int NOT NULL AUTO_INCREMENT,
  `id_usuario_fk` int NOT NULL,
  `id_tema_fk` int NOT NULL,
  `id_reaccion_fk` int NOT NULL,
  PRIMARY KEY (`id_tema_tiene_reacciones`) USING BTREE,
  INDEX `id_user_thr`(`id_usuario_fk`) USING BTREE,
  INDEX `id_topic_thr`(`id_tema_fk`) USING BTREE,
  INDEX `id_reaction_thr`(`id_reaccion_fk`) USING BTREE,
  CONSTRAINT `id_reaction_thr` FOREIGN KEY (`id_reaccion_fk`) REFERENCES `reaccion` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_topic_thr` FOREIGN KEY (`id_tema_fk`) REFERENCES `tema` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_user_thr` FOREIGN KEY (`id_usuario_fk`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tema_tiene_reacciones
-- ----------------------------

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `apodo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `correo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `contrasena` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `firma` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `ubicacion` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `foto` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `fecha_registro` datetime(0) NULL DEFAULT NULL,
  `ultima_visita` datetime(0) NULL DEFAULT NULL,
  `id_pais_fk` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_country_user_fk`(`id_pais_fk`) USING BTREE,
  CONSTRAINT `id_country_user_fk` FOREIGN KEY (`id_pais_fk`) REFERENCES `pais` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of usuario
-- ----------------------------
INSERT INTO `usuario` VALUES (10, 'Pablo Prieto', 'pabvlov', 'pablojavierprietocepeda@gmail.com', '123', 'uwu', 'killpue', 'https://i.giphy.com/media/3o6gaUIP3L0eLVJNPq/200w.webp', '2022-03-20 19:13:06', '2022-03-20 19:13:06', 1);
INSERT INTO `usuario` VALUES (11, 'Daniel Avila', 'amurpo', 'danielavila@gmail.com', '123', 'uwu', 'killpue', 'https://i.giphy.com/media/5dQQUpPjaZQeQ/giphy.webp\r\n', '2022-03-20 19:13:06', '2022-03-20 19:13:06', 1);
INSERT INTO `usuario` VALUES (12, 'Vicente Goldberg', 'vgoldberg', 'vicente.goldberg@prorums.cl', '123', 'Da best', 'INACAP', 'https://i.giphy.com/media/3oFzmf3PiIfy6J15ss/200.webp', '2022-05-03 10:31:18', '2022-05-03 10:31:18', 1);

-- ----------------------------
-- Table structure for usuario_tiene_roles
-- ----------------------------
DROP TABLE IF EXISTS `usuario_tiene_roles`;
CREATE TABLE `usuario_tiene_roles`  (
  `id_usuario_tiene_roles` int NOT NULL AUTO_INCREMENT,
  `id_usuario_fk` int NOT NULL,
  `id_rol_fk` int NOT NULL,
  PRIMARY KEY (`id_usuario_tiene_roles`) USING BTREE,
  INDEX `id_usuario_rol_fk`(`id_usuario_fk`) USING BTREE,
  INDEX `id_rol_usuario_fk`(`id_rol_fk`) USING BTREE,
  CONSTRAINT `id_rol_usuario_fk` FOREIGN KEY (`id_rol_fk`) REFERENCES `rol` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_usuario_rol_fk` FOREIGN KEY (`id_usuario_fk`) REFERENCES `usuario` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of usuario_tiene_roles
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
