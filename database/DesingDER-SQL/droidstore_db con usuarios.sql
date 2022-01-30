-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.22-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for droidstore_db
CREATE DATABASE IF NOT EXISTS `droidstore_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `droidstore_db`;

-- Dumping structure for table droidstore_db.delivery_methods
CREATE TABLE IF NOT EXISTS `delivery_methods` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table droidstore_db.delivery_methods: ~0 rows (approximately)
/*!40000 ALTER TABLE `delivery_methods` DISABLE KEYS */;
/*!40000 ALTER TABLE `delivery_methods` ENABLE KEYS */;

-- Dumping structure for table droidstore_db.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `delivery_id` smallint(6) NOT NULL,
  `payment_id` smallint(6) NOT NULL,
  `total_amount` int(11) NOT NULL,
  `total_qty` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table droidstore_db.orders: ~0 rows (approximately)
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;

-- Dumping structure for table droidstore_db.order_products
CREATE TABLE IF NOT EXISTS `order_products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) NOT NULL,
  `sku` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table droidstore_db.order_products: ~0 rows (approximately)
/*!40000 ALTER TABLE `order_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_products` ENABLE KEYS */;

-- Dumping structure for table droidstore_db.payment_methods
CREATE TABLE IF NOT EXISTS `payment_methods` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table droidstore_db.payment_methods: ~0 rows (approximately)
/*!40000 ALTER TABLE `payment_methods` DISABLE KEYS */;
/*!40000 ALTER TABLE `payment_methods` ENABLE KEYS */;

-- Dumping structure for table droidstore_db.products
CREATE TABLE IF NOT EXISTS `products` (
  `sku` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `categoria_id` smallint(6) NOT NULL,
  `precio` int(11) NOT NULL,
  `descuento` int(11) NOT NULL,
  `imagen` varchar(50) NOT NULL,
  PRIMARY KEY (`sku`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table droidstore_db.products: ~0 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Dumping structure for table droidstore_db.product_categories
CREATE TABLE IF NOT EXISTS `product_categories` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table droidstore_db.product_categories: ~0 rows (approximately)
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;

-- Dumping structure for table droidstore_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `codigo_pais` smallint(6) NOT NULL,
  `telefono` int(11) NOT NULL,
  `empresa` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(256) NOT NULL,
  `avatar` varchar(50) NOT NULL,
  `categoria_id` smallint(6) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table droidstore_db.users: ~4 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`user_id`, `nombre`, `apellido`, `codigo_pais`, `telefono`, `empresa`, `email`, `password`, `avatar`, `categoria_id`) VALUES
	(1, 'soy uno', 'soy uno', 12, 12, 'empresa uno', '1uno@uno.com', '$2b$10$L4gVV4xekzv7EEeDj1ClSOQiv2h4JcMK5yPxrW5/4Hs', 'avatar_1643213065886.png', 1),
	(2, 'dos', 'dos', 2, 2, 'dos', 'dos@dos.com', '$2b$10$INoG6JJzAdianorjaelQH.DonXBpSiJpSrlk6VAdrIY', 'avatar_1643203208205.png', 1),
	(3, 'tres', 'tres', 123, 123, 'tres', 'tres@tres.com', '$2b$10$9ljvYAUWDObjYyz4fMMOy.9tDKLo7XcDXaSCUpmv9kw', 'avatar_1643205978308.png', 1),
	(4, 'uno2', 'uno2', 0, 12, '', '2uno@uno.com', '$2b$10$AosxWOeJz9IbZLqoiEYKvOBxlur89vnr5lqNyccRxVS', 'avatar_1643209856158.png', 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table droidstore_db.user_categories
CREATE TABLE IF NOT EXISTS `user_categories` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table droidstore_db.user_categories: ~2 rows (approximately)
/*!40000 ALTER TABLE `user_categories` DISABLE KEYS */;
INSERT INTO `user_categories` (`id`, `nombre`) VALUES
	(1, 'Administrador'),
	(2, 'Comprador');
/*!40000 ALTER TABLE `user_categories` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
