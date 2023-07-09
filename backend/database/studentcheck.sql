-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2023 at 09:08 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studentcheck`
--

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` varchar(50) NOT NULL,
  `role_name` varchar(50) DEFAULT NULL,
  `create_by` varchar(20) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `update_by` varchar(20) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `id` varchar(50) NOT NULL,
  `firstname` varchar(50) DEFAULT NULL,
  `lastname` varchar(50) DEFAULT NULL,
  `age` int(10) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `create_by` varchar(20) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `update_by` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `firstname`, `lastname`, `age`, `create_date`, `create_by`, `update_date`, `update_by`) VALUES
('28fd5d42-3b2c-4ede-8d1f-ca7a3911bcef', 'pavaret2', 'wisarut', 23, '2023-07-09 13:33:44', '28fd5d42-3b2c-4ede-8', '2023-07-09 13:33:44', '28fd5d42-3b2c-4ede-8'),
('5639eda6-4665-41d8-9c41-bd4e23cbbfb9', 'pavaret5', 'wisarut', 23, '2023-07-09 13:33:53', '5639eda6-4665-41d8-9', '2023-07-09 13:33:53', '5639eda6-4665-41d8-9'),
('615da075-5569-4938-b615-a100e2e76462', 'pavaret', 'wisarut', 23, '2023-07-09 13:33:36', '615da075-5569-4938-b', '2023-07-09 13:33:36', '615da075-5569-4938-b'),
('a6fd31c8-b593-484f-9989-332a461dfb7b', 'pavaret1', 'wisarut', 23, '2023-07-09 13:33:42', 'a6fd31c8-b593-484f-9', '2023-07-09 13:33:42', 'a6fd31c8-b593-484f-9'),
('d2b12a0e-c180-45f3-a066-51c01063140c', 'pavaret3', 'wisarut', 23, '2023-07-09 13:33:47', 'd2b12a0e-c180-45f3-a', '2023-07-09 13:33:47', 'd2b12a0e-c180-45f3-a'),
('f1867b9b-c9e1-41c3-a942-1ffdc9da868d', 'pavaret4', 'wisarut', 23, '2023-07-09 13:33:50', 'f1867b9b-c9e1-41c3-a', '2023-07-09 13:33:50', 'f1867b9b-c9e1-41c3-a');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` varchar(50) NOT NULL,
  `subject_name` varchar(50) DEFAULT NULL,
  `student_id` varchar(20) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `create_by` varchar(20) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `update_by` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id`, `subject_name`, `student_id`, `create_date`, `create_by`, `update_date`, `update_by`) VALUES
('79f2a9a2-499e-4381-85da-d9e88f7f35e4', 'คณิตศาสตร์', '28fd5d42-3b2c-4ede-8', '2023-07-09 14:06:31', '79f2a9a2-499e-4381-8', '2023-07-09 14:06:31', '79f2a9a2-499e-4381-8'),
('b5efc458-845c-4e0e-b844-3262f5dc3a6e', 'ภาษาอังกฤษ', '28fd5d42-3b2c-4ede-8', '2023-07-09 13:54:40', 'b5efc458-845c-4e0e-b', '2023-07-09 14:01:20', 'b5efc458-845c-4e0e-b');

-- --------------------------------------------------------

--
-- Table structure for table `title`
--

CREATE TABLE `title` (
  `id` varchar(50) NOT NULL,
  `title_name` varchar(50) DEFAULT NULL,
  `create_by` varchar(2) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_by` varchar(20) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `title`
--

INSERT INTO `title` (`id`, `title_name`, `create_by`, `create_date`, `update_by`, `update_date`) VALUES
('1', 'นาย', NULL, NULL, NULL, NULL),
('2', 'นางสาว', NULL, NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `title`
--
ALTER TABLE `title`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
