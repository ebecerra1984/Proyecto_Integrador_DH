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
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `delivery_id` smallint(6) NOT NULL,
  `payment_id` smallint(6) NOT NULL,
  `total_amount` int(11) NOT NULL,
  `total_qty` int(11) NOT NULL,
  PRIMARY KEY (`order_id`)
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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(50) NOT NULL,
  `categoria` smallint(6) NOT NULL,
  `precio` decimal(20,6) NOT NULL DEFAULT 0.000000,
  `descuento` decimal(20,6) NOT NULL DEFAULT 0.000000,
  `imagen` varchar(50) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table droidstore_db.products: ~15 rows (approximately)
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
REPLACE INTO `products` (`id`, `nombre`, `descripcion`, `categoria`, `precio`, `descuento`, `imagen`, `cantidad`) VALUES
	(1, 'Producto 1', 'Descripción del producto 1', 1, 1000.000000, 0.000000, 'product_1645015302938.jpg', 5),
	(2, 'Producto 2', 'Des cripci{om del producto 2', 2, 2000.000000, 20.000000, 'product_1645020867784.jpg', 3),
	(3, 'Producto 3', 'Descripci{on del producto 3', 3, 3000.000000, 0.000000, 'product_1645021135444.jpg', 8),
	(4, 'Producto 4', 'Descripción del producto 4', 2, 4000.000000, 0.000000, 'product_1645750784487.png', 6),
	(5, 'Producto 5', 'Descripción del producto 5', 1, 5000.000000, 5.000000, 'product_1645751226404.jpg', 10),
	(6, 'Producto 6', 'Descripción del Producto 6', 3, 6000.000000, 0.000000, 'product_1645888031133.png', 25),
	(7, 'Producto 7', 'Descripción del Producto 7', 1, 7000.000000, 7.000000, 'product_1645888390288.jpg', 12),
	(8, 'Producto 8', 'Descripción del Producto 8', 2, 8000.000000, 0.000000, 'product_1645888790188.jpg', 8),
	(9, 'Producto 9', 'Descripción del Producto 9', 1, 5500.000000, 0.000000, 'product_1645889762176.jpg', 6),
	(10, 'Producto 10', 'Descripción del Producto 10', 1, 110200.000000, 0.000000, 'product_1645889901707.jpg', 1),
	(11, 'Producto11', 'Descripción del procucto 11', 3, 1200.000000, 2.000000, 'product_1645893905964.jpg', 3),
	(12, 'Producto 12', 'Descripción del procucto 11', 3, 2300.000000, 0.000000, 'product_1645893979702.jpg', 5),
	(13, 'Producto 12', 'Descripción del producto 12', 3, 15000.000000, 0.000000, 'product_1645894894945.png', 5),
	(14, 'Producto 13', 'Descripción del producto 13', 3, 1450.000000, 5.000000, 'product_1645895273584.jpg', 12),
	(15, 'Producto 14', 'Descripción del producto 14', 1, 6000.000000, 0.000000, 'product_1645895930303.jpg', 12),
	(16, 'Producto 15', 'Descripción del producto 15', 2, 35000.000000, 0.000000, 'product_1645896002117.jpg', 2),
	(17, 'Producto 16', 'Descripción del producto 16', 2, 48000.000000, 0.000000, 'product_1645896100780.jpg', 3);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- Dumping structure for table droidstore_db.product_categories
CREATE TABLE IF NOT EXISTS `product_categories` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table droidstore_db.product_categories: ~2 rows (approximately)
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
REPLACE INTO `product_categories` (`id`, `nombre`) VALUES
	(1, 'Robot fijo'),
	(2, 'Robot móvil'),
	(3, 'Repuesto');
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;

-- Dumping structure for table droidstore_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `codigo_pais` smallint(6) NOT NULL,
  `telefono` int(11) NOT NULL,
  `empresa` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(256) NOT NULL,
  `avatar` varchar(50) NOT NULL,
  `categoria_id` smallint(6) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `FK_users_user_categories` (`categoria_id`),
  CONSTRAINT `FK_users_user_categories` FOREIGN KEY (`categoria_id`) REFERENCES `user_categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dumping data for table droidstore_db.users: ~4 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `nombre`, `apellido`, `codigo_pais`, `telefono`, `empresa`, `email`, `password`, `avatar`, `categoria_id`) VALUES
	(1, 'uno ', 'uno', 1, 1, 'Droid SA', 'uno@uno.com', '$2b$10$m6E7udD2YZ1YtFAmWvhkquwzJhx7P24Rhp0o/2mdmPhSbBdfg0vrK', 'avatar_1645149544808.png', 1),
	(2, 'dos', 'dos', 2, 2, 'Droid SA', 'dos@dos.com', '$2b$10$Vsa/9tOQ2J4o/bhkvZxc0uuUlw7D1O2iptfTuiCfjs0RTPd/JfhYO', 'avatar_1645042998141.png', 1),
	(3, 'tres', 'tre', 3, 3333, 'Droid SA', 'tres@tres.com', '$2b$10$ivqkzpifhCHfDLAYNQm3We.U10TN3QuKWE2Xgr.PcvumiAxUbaS12', 'avatar_1645890125647.png', 1),
	(4, 'Cuatro', 'Cuatro', 44, 4444, '', 'cuatro@cuatro.com', '$2b$10$WwypmOdA2TJIBqBwWUKA0eWVzI1Gai0Qe38EtqxnBFdCHDIJeOeQK', 'avatar_1645896463162.png', 1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table droidstore_db.user_categories
CREATE TABLE IF NOT EXISTS `user_categories` (
  `id` smallint(6) NOT NULL DEFAULT 0,
  `name` varchar(50) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table droidstore_db.user_categories: ~2 rows (approximately)
/*!40000 ALTER TABLE `user_categories` DISABLE KEYS */;
REPLACE INTO `user_categories` (`id`, `name`) VALUES
	(1, 'Comprador'),
	(2, 'Administrador');
/*!40000 ALTER TABLE `user_categories` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
