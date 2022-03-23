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

 Date: 23/03/2022 16:10:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for advertisement
-- ----------------------------
DROP TABLE IF EXISTS `advertisement`;
CREATE TABLE `advertisement`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `advertisement` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id_user_fk` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_user_ad`(`id_user_fk`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of advertisement
-- ----------------------------

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `position` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, 'Categoria 1', 'En esta categoria pasan muchas cosas bonitas', 1);
INSERT INTO `category` VALUES (2, 'Categoria 2', NULL, 2);

-- ----------------------------
-- Table structure for changelog
-- ----------------------------
DROP TABLE IF EXISTS `changelog`;
CREATE TABLE `changelog`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `changes` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `date` datetime(0) NULL DEFAULT NULL,
  `id_user` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_user_changelog`(`id_user`) USING BTREE,
  CONSTRAINT `id_user_changelog` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of changelog
-- ----------------------------

-- ----------------------------
-- Table structure for config
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config`  (
  `nombre_foro` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `logo` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `background` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id_advertisement_fk` int NULL DEFAULT NULL,
  `id_changelog_fk` int NULL DEFAULT NULL,
  INDEX `id_changelog_config`(`id_changelog_fk`) USING BTREE,
  INDEX `id_advertisement_config`(`id_advertisement_fk`) USING BTREE,
  CONSTRAINT `id_advertisement_config` FOREIGN KEY (`id_advertisement_fk`) REFERENCES `advertisement` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_changelog_config` FOREIGN KEY (`id_changelog_fk`) REFERENCES `changelog` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of config
-- ----------------------------

-- ----------------------------
-- Table structure for country
-- ----------------------------
DROP TABLE IF EXISTS `country`;
CREATE TABLE `country`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `country` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of country
-- ----------------------------
INSERT INTO `country` VALUES (1, 'chile');

-- ----------------------------
-- Table structure for forum
-- ----------------------------
DROP TABLE IF EXISTS `forum`;
CREATE TABLE `forum`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `picture` varchar(1000) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `position` int NULL DEFAULT NULL,
  `id_category_fk` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_category_forum`(`id_category_fk`) USING BTREE,
  CONSTRAINT `id_category_forum` FOREIGN KEY (`id_category_fk`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of forum
-- ----------------------------
INSERT INTO `forum` VALUES (3, 'Foro 1', 'El mejor foro del mundo', 'https://th.bing.com/th/id/R.2d490249e225764b8ecae3a9090bde1f?rik=uz2nbyg5DtilJw&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2ftvweb%2fimages%2fd%2fd8%2fGato.png%2frevision%2flatest%3fcb%3d20111127054033%26path-prefix%3des&ehk=YRZdsPcOu0q82Wp2Rj53xB0BX%2', 1, 1);
INSERT INTO `forum` VALUES (4, 'Foro 2', 'xd', 'https://th.bing.com/th/id/R.2d490249e225764b8ecae3a9090bde1f?rik=uz2nbyg5DtilJw&riu=http%3a%2f%2fvignette4.wikia.nocookie.net%2ftvweb%2fimages%2fd%2fd8%2fGato.png%2frevision%2flatest%3fcb%3d20111127054033%26path-prefix%3des&ehk=YRZdsPcOu0q82Wp2Rj53xB0BX%2', 1, 2);
INSERT INTO `forum` VALUES (5, 'Los xd', 'Foro para expresar tus xd', 'https://i.imgur.com/dcoYkMI.png', 3, 1);

-- ----------------------------
-- Table structure for language
-- ----------------------------
DROP TABLE IF EXISTS `language`;
CREATE TABLE `language`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `language` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of language
-- ----------------------------
INSERT INTO `language` VALUES (1, 'Español');

-- ----------------------------
-- Table structure for reaction
-- ----------------------------
DROP TABLE IF EXISTS `reaction`;
CREATE TABLE `reaction`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `reaction` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of reaction
-- ----------------------------

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `card` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `permissions` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, 'administrador', 'uwu', 'administrador');

-- ----------------------------
-- Table structure for thread
-- ----------------------------
DROP TABLE IF EXISTS `thread`;
CREATE TABLE `thread`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `body` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `date` datetime(0) NULL DEFAULT NULL,
  `id_user_fk` int NULL DEFAULT NULL,
  `id_topic_fk` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_user_thread`(`id_user_fk`) USING BTREE,
  INDEX `id_topic_thread`(`id_topic_fk`) USING BTREE,
  CONSTRAINT `id_topic_thread` FOREIGN KEY (`id_topic_fk`) REFERENCES `topic` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_user_thread` FOREIGN KEY (`id_user_fk`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thread
-- ----------------------------

-- ----------------------------
-- Table structure for thread_has_reactions
-- ----------------------------
DROP TABLE IF EXISTS `thread_has_reactions`;
CREATE TABLE `thread_has_reactions`  (
  `id_thread_has_reactions` int NOT NULL AUTO_INCREMENT,
  `id_user_fk` int NULL DEFAULT NULL,
  `id_reaction_fk` int NULL DEFAULT NULL,
  `id_thread_fk` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_thread_has_reactions`) USING BTREE,
  INDEX `id_user_thhr`(`id_user_fk`) USING BTREE,
  INDEX `id_reaction_thhr`(`id_reaction_fk`) USING BTREE,
  INDEX `id_thread_thhr`(`id_thread_fk`) USING BTREE,
  CONSTRAINT `id_reaction_thhr` FOREIGN KEY (`id_reaction_fk`) REFERENCES `reaction` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_thread_thhr` FOREIGN KEY (`id_thread_fk`) REFERENCES `thread` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_user_thhr` FOREIGN KEY (`id_user_fk`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of thread_has_reactions
-- ----------------------------

-- ----------------------------
-- Table structure for topic
-- ----------------------------
DROP TABLE IF EXISTS `topic`;
CREATE TABLE `topic`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `body` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `erased` bit(1) NULL DEFAULT NULL,
  `date` datetime(0) NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `id_forum_fk` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_forum_topic`(`id_forum_fk`) USING BTREE,
  CONSTRAINT `id_forum_topic` FOREIGN KEY (`id_forum_fk`) REFERENCES `forum` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of topic
-- ----------------------------

-- ----------------------------
-- Table structure for topic_has_reactions
-- ----------------------------
DROP TABLE IF EXISTS `topic_has_reactions`;
CREATE TABLE `topic_has_reactions`  (
  `id_topic_has_reactions` int NOT NULL AUTO_INCREMENT,
  `id_user_fk` int NOT NULL,
  `id_topic_fk` int NOT NULL,
  `id_reaction_fk` int NOT NULL,
  PRIMARY KEY (`id_topic_has_reactions`) USING BTREE,
  INDEX `id_user_thr`(`id_user_fk`) USING BTREE,
  INDEX `id_topic_thr`(`id_topic_fk`) USING BTREE,
  INDEX `id_reaction_thr`(`id_reaction_fk`) USING BTREE,
  CONSTRAINT `id_reaction_thr` FOREIGN KEY (`id_reaction_fk`) REFERENCES `reaction` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_topic_thr` FOREIGN KEY (`id_topic_fk`) REFERENCES `topic` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_user_thr` FOREIGN KEY (`id_user_fk`) REFERENCES `user` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of topic_has_reactions
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `nickname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `mail` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `sign` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `picture` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `registration_date` datetime(0) NULL DEFAULT NULL,
  `last_visit` datetime(0) NULL DEFAULT NULL,
  `id_language_fk` int NULL DEFAULT NULL,
  `id_role_fk` int NULL DEFAULT NULL,
  `id_country_fk` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `id_country_user_fk`(`id_country_fk`) USING BTREE,
  INDEX `id_language_user`(`id_language_fk`) USING BTREE,
  INDEX `id_role_user`(`id_role_fk`) USING BTREE,
  CONSTRAINT `id_country_user_fk` FOREIGN KEY (`id_country_fk`) REFERENCES `country` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_language_user` FOREIGN KEY (`id_language_fk`) REFERENCES `language` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `id_role_user` FOREIGN KEY (`id_role_fk`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (10, 'Pablo Prieto', 'pabvlov', 'pablojavierprietocepeda@gmail.com', '123', 'uwu', 'killpue', '123', '2022-03-20 19:13:06', '2022-03-20 19:13:06', 1, 1, 1);
INSERT INTO `user` VALUES (11, 'Daniel Avila', 'amurpo', 'danielavila@gmail.com', '123', 'uwu', 'killpue', '123', '2022-03-20 19:13:06', '2022-03-20 19:13:06', 1, 1, 1);

SET FOREIGN_KEY_CHECKS = 1;
