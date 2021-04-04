-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2021 at 06:24 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rattle`
--

-- --------------------------------------------------------

--
-- Table structure for table `orderitem`
--

CREATE TABLE `orderitem` (
  `OrderItemId` int(11) NOT NULL,
  `Orderid` int(11) NOT NULL,
  `ProductId` int(11) NOT NULL,
  `Price` int(11) NOT NULL,
  `Discount` int(20) NOT NULL,
  `Quantity` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orderitem`
--

INSERT INTO `orderitem` (`OrderItemId`, `Orderid`, `ProductId`, `Price`, `Discount`, `Quantity`) VALUES
(1, 1, 1, 1600, 20, 3),
(2, 1, 3, 320, 20, 5),
(3, 2, 1, 1600, 20, 4),
(4, 2, 3, 320, 20, 6),
(5, 3, 1, 1600, 20, 6),
(6, 3, 3, 320, 20, 8),
(7, 4, 1, 1600, 20, 5),
(8, 4, 3, 320, 20, 7);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `Orderid` int(10) NOT NULL,
  `CustomerName` varchar(20) NOT NULL,
  `MobileNo` varchar(10) NOT NULL,
  `Address` varchar(2000) NOT NULL,
  `OrderDate` date NOT NULL,
  `OrderTotal` int(10) NOT NULL,
  `TaxTotal` int(10) NOT NULL,
  `ShippingCharges` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`Orderid`, `CustomerName`, `MobileNo`, `Address`, `OrderDate`, `OrderTotal`, `TaxTotal`, `ShippingCharges`) VALUES
(1, 'Shubham', '9076404262', 'Kandiwali', '2021-04-04', 2366, 346, 100),
(2, 'Shubham', '9076404262', 'mm', '2021-04-04', 2366, 346, 100),
(3, 'shs', '9076404262', 'Shu', '2021-04-04', 2366, 346, 100),
(4, 'Shubham', '9076404262', 'Kandiwali', '2021-04-04', 12183, 1843, 100);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `ProductId` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `price` int(10) NOT NULL,
  `discount` int(5) NOT NULL,
  `Rating` decimal(5,0) NOT NULL,
  `ImageUrl` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ProductId`, `Name`, `price`, `discount`, `Rating`, `ImageUrl`) VALUES
(1, 'Demo', 2000, 20, '3', 'product-image-placeholder.jpg'),
(2, 'Laptop', 500, 20, '2', 'product-image-placeholder.jpg'),
(3, 'Computer', 400, 20, '2', 'product-image-placeholder.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orderitem`
--
ALTER TABLE `orderitem`
  ADD PRIMARY KEY (`OrderItemId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`Orderid`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ProductId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orderitem`
--
ALTER TABLE `orderitem`
  MODIFY `OrderItemId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `Orderid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `ProductId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
