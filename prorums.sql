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

 Date: 04/07/2022 12:20:45
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
  `activo` bit(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_category_forum`(`id_categoria_fk`) USING BTREE,
  CONSTRAINT `id_category_forum` FOREIGN KEY (`id_categoria_fk`) REFERENCES `categoria` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of foro
-- ----------------------------
INSERT INTO `foro` VALUES (3, 'Reglas de Prorums', 'descripcion', 'https://i.giphy.com/media/lueaDWxOz0LNS/200w.webp', 1, 1, NULL);
INSERT INTO `foro` VALUES (4, 'Zona Fumadores', 'xd', 'https://i.giphy.com/media/l3q2zxUCPX4rmO8ZG/giphy.webp', 1, 2, NULL);
INSERT INTO `foro` VALUES (5, 'Peleas Internas', 'Foro para expresar tus xd', 'https://i.giphy.com/media/lueaDWxOz0LNS/200w.webp', 3, 2, NULL);

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
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of hilo
-- ----------------------------
INSERT INTO `hilo` VALUES (1, 'yo creo que si', '2022-07-02 20:59:45', 10, 4);
INSERT INTO `hilo` VALUES (2, 'yo creo que maomeno', '2022-07-02 21:28:20', 10, 4);
INSERT INTO `hilo` VALUES (3, 'hola?', '2022-07-03 12:58:02', 10, 29);
INSERT INTO `hilo` VALUES (4, 'como estas', '2022-07-03 12:59:08', 10, 29);
INSERT INTO `hilo` VALUES (5, 'one two three and to the four', '2022-07-03 13:07:34', 10, 28);
INSERT INTO `hilo` VALUES (6, 'que es esto', '2022-07-03 13:35:55', 11, 4);
INSERT INTO `hilo` VALUES (7, 'luego las sacamos y le echamos sal y ketchup', '2022-07-03 13:56:08', 10, 3);
INSERT INTO `hilo` VALUES (8, 'ya pero que no se puede fumar', '2022-07-03 14:45:58', 10, 6);
INSERT INTO `hilo` VALUES (9, 'cigarro po wn que mas', '2022-07-03 14:46:59', 12, 6);
INSERT INTO `hilo` VALUES (10, 'pero puede ser marimba', '2022-07-03 17:03:26', 11, 6);
INSERT INTO `hilo` VALUES (11, 'quiero una cuanto es', '2022-07-03 21:53:53', 10, 5);
INSERT INTO `hilo` VALUES (12, 'hola po compare', '2022-07-04 12:17:53', 10, 26);

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
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of tema
-- ----------------------------
INSERT INTO `tema` VALUES (1, 'Como hacer un foro', 'este es un tutorial de como hacer un foro', 0, '2022-04-26 22:50:31', 'Tutorial', 3, 10);
INSERT INTO `tema` VALUES (2, 'Como hacer un consome', 'este es un tutorial de como hacer un consome', 0, '2022-04-26 22:50:31', 'Tutorial', 4, 11);
INSERT INTO `tema` VALUES (3, 'Como hacer papas fritas', 'Con aceite', 0, '2022-04-30 16:58:08', 'Tutorial', 3, 10);
INSERT INTO `tema` VALUES (4, 'Pelea Profe Sergio vs Sra. Lidia', '\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum repellat corrupti ipsum rem distinctio! Distinctio voluptas nobis suscipit! Suscipit atque at velit! Consectetur atque dolores dicta doloribus. Consectetur unde consequuntur, quaerat repellendus autem aliquam voluptatum quo quisquam neque earum enim praesentium, iure, ab quam cum voluptatibus molestias non soluta tempore harum! Commodi tempore quibusdam consectetur, praesentium repellendus quia aliquid est, reprehenderit aperiam excepturi dicta accusamus architecto accusantium, doloremque molestiae enim nulla similique eos nostrum. Sapiente inventore facere modi odio possimus laboriosam itaque labore provident enim est voluptatibus ipsam dolore mollitia, tenetur deserunt fuga repudiandae deleniti reiciendis eos quasi sint quia!\n\\n\nEs por esto que yo creo que sería empate', 0, '2022-05-03 10:17:55', 'Peleas', 5, 11);
INSERT INTO `tema` VALUES (5, 'Venta de Chaparritas afuera', 'que opinan de q vendan cosas afuera de la u', 0, '2022-05-03 10:33:44', 'Pregunta', 5, 12);
INSERT INTO `tema` VALUES (6, 'No se puede ni fumar en la u', 'toy fome quiero fumar angustiao', 0, '2022-05-03 10:33:44', 'Discusión', 4, 10);
INSERT INTO `tema` VALUES (23, 'titulito', 'cuerpo xd\nxd', 0, '2022-06-05 23:17:06', 'categoria nueva', 3, 10);
INSERT INTO `tema` VALUES (25, 'wena cabros no soy el vicente', 'hoy se bebe hoy se gasta\nabc', 0, '2022-06-06 00:11:47', 'uwu', 4, 12);
INSERT INTO `tema` VALUES (26, 'oscar', 'hola como estan los cabros', 0, '2022-06-16 17:38:54', 'david', 4, 10);
INSERT INTO `tema` VALUES (27, 'claramente las reglas del foro', 'no fumar\nno tomar\nno estudiar', 0, '2022-06-29 17:12:24', 'reglas', 3, 10);
INSERT INTO `tema` VALUES (28, 'holi1', '1234', 0, '2022-07-01 12:59:44', 'undefined', 3, 10);
INSERT INTO `tema` VALUES (29, 'asfasgasfas', 'asdagdfhgasdf', 1, '2022-07-03 00:48:29', 'asdasfasdf', 3, 10);

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
) ENGINE = InnoDB AUTO_INCREMENT = 43 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of usuario
-- ----------------------------
INSERT INTO `usuario` VALUES (10, 'Pablo Prieto', 'pabvlov', 'pablojavierprietocepeda@gmail.com', '123', 'uwu', 'killpue', 'https://i.giphy.com/media/3o6gaUIP3L0eLVJNPq/200w.webp', '2022-03-20 19:13:06', '2022-03-20 19:13:06', 1);
INSERT INTO `usuario` VALUES (11, 'Daniel Avila', 'amurpo', 'danielavila@gmail.com', '123', 'uwu', 'killpue', 'https://i.giphy.com/media/5dQQUpPjaZQeQ/giphy.webp\r\n', '2022-03-20 19:13:06', '2022-03-20 19:13:06', 1);
INSERT INTO `usuario` VALUES (12, 'Vicente Goldberg', 'vgoldberg', 'vicente.goldberg@prorums.cl', '123', 'Da best', 'INACAP', 'https://i.giphy.com/media/3oFzmf3PiIfy6J15ss/200.webp', '2022-05-03 10:31:18', '2022-05-03 10:31:18', 1);
INSERT INTO `usuario` VALUES (33, 'undefined', 'undefined', 'pablojavierprietocepeda2@gmail.com', '123', NULL, NULL, NULL, '2022-06-12 18:56:01', '2022-06-12 18:56:01', 1);
INSERT INTO `usuario` VALUES (34, 'pavlo el trucho', 'prueba3', 'pablojavierprietocepeda3@gmail.com', '123', NULL, NULL, NULL, '2022-06-12 19:02:44', '2022-06-12 19:02:44', 1);
INSERT INTO `usuario` VALUES (35, 'Jamon', 'unk', 'pablojavierprietocepeda4@gmail.com', '123', NULL, NULL, 'https://i.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.webp', '2022-06-12 19:10:35', '2022-06-12 19:10:35', 1);
INSERT INTO `usuario` VALUES (36, 'rsfhs', 'asdg', 'pablojavierprietocepeda7@gmail.com', '123', NULL, NULL, 'https://i.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.webp', '2022-06-13 00:10:49', '2022-06-13 00:10:49', 1);
INSERT INTO `usuario` VALUES (37, '14rtgsf', 'asgadg', 'pablojavierprietocepeda8@gmail.com', '123', NULL, NULL, 'https://i.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.webp', '2022-06-13 00:30:11', '2022-06-13 00:30:11', 1);
INSERT INTO `usuario` VALUES (38, 'sdfdn', 'fgerfhj', 'pablojavierprietocepeda9@gmail.com', '123', NULL, NULL, 'https://i.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.webp', '2022-06-13 00:30:42', '2022-06-13 00:30:42', 1);
INSERT INTO `usuario` VALUES (39, 'jolape', 'rra', 'pablojavierprietocepeda10@gmail.com', '123', NULL, NULL, 'https://i.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.webp', '2022-06-13 18:28:17', '2022-06-13 18:28:17', 1);
INSERT INTO `usuario` VALUES (40, '13543', 'bob', 'pablojavierprietocepeda12@gmail.com', '123', NULL, NULL, 'https://i.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.webp', '2022-06-13 18:30:20', '2022-06-13 18:30:20', 1);
INSERT INTO `usuario` VALUES (41, '1255', 'la roca', 'pablojavierprietocepeda0@gmail.com', '123', NULL, NULL, 'https://i.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.webp', '2022-06-13 18:31:01', '2022-06-13 18:31:01', 1);
INSERT INTO `usuario` VALUES (42, 't57', 'lol', 'pablojavierprietocepeda-1@gmail.com', '123', NULL, NULL, 'https://i.giphy.com/media/3oEduLzte7jSNmq4z6/giphy.webp', '2022-06-13 18:33:14', '2022-06-13 18:33:14', 1);

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
