-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 29, 2023 at 06:11 PM
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
-- Table structure for table `classmaster`
--

CREATE TABLE `classmaster` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `create_by` varchar(100) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `update_by` varchar(100) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `classmaster`
--

INSERT INTO `classmaster` (`id`, `name`, `create_by`, `create_date`, `update_by`, `update_date`) VALUES
('85ccc8b6-fb9f-44e1-826a-063c148a238c', '1st grade', '85ccc8b6-fb9f-44e1-826a-063c148a238c', '2023-07-29 22:34:00', '85ccc8b6-fb9f-44e1-826a-063c148a238c', '2023-07-29 22:34:00'),
('4f9732f8-605f-4313-86d3-9e784cd7ea71', '2nd grade', '4f9732f8-605f-4313-86d3-9e784cd7ea71', '2023-07-29 22:34:04', '4f9732f8-605f-4313-86d3-9e784cd7ea71', '2023-07-29 22:34:04'),
('53802eda-fafa-460b-b813-5686a821e22e', '3rd grade', '53802eda-fafa-460b-b813-5686a821e22e', '2023-07-29 22:34:07', '53802eda-fafa-460b-b813-5686a821e22e', '2023-07-29 22:34:07'),
('9498fff2-b4b6-4d3f-8df0-f0a74cd9506a', '4th grade', '9498fff2-b4b6-4d3f-8df0-f0a74cd9506a', '2023-07-29 22:34:10', '9498fff2-b4b6-4d3f-8df0-f0a74cd9506a', '2023-07-29 22:34:10'),
('8e720444-90c2-4887-879d-e8a05e869ac3', '5th grade', '8e720444-90c2-4887-879d-e8a05e869ac3', '2023-07-29 22:34:12', '8e720444-90c2-4887-879d-e8a05e869ac3', '2023-07-29 22:34:12'),
('6575abec-299c-4f73-9863-4cdd48b18b79', '6th grade', '6575abec-299c-4f73-9863-4cdd48b18b79', '2023-07-29 22:34:16', '6575abec-299c-4f73-9863-4cdd48b18b79', '2023-07-29 22:34:16'),
('4ff703fc-7d12-48cb-a703-0aa0602faf48', '7th grade', '4ff703fc-7d12-48cb-a703-0aa0602faf48', '2023-07-29 22:34:19', '4ff703fc-7d12-48cb-a703-0aa0602faf48', '2023-07-29 22:34:19'),
('4a139f21-08ef-413f-b282-e98311551493', '8th grade', '4a139f21-08ef-413f-b282-e98311551493', '2023-07-29 22:34:21', '4a139f21-08ef-413f-b282-e98311551493', '2023-07-29 22:34:21'),
('96f1f8a2-a2c3-428a-8055-b02cd7934c8b', '9th grade', '96f1f8a2-a2c3-428a-8055-b02cd7934c8b', '2023-07-29 22:34:24', '96f1f8a2-a2c3-428a-8055-b02cd7934c8b', '2023-07-29 22:34:24'),
('87b12860-92d7-458a-b75d-56b586fa3696', '10th grade', '87b12860-92d7-458a-b75d-56b586fa3696', '2023-07-29 22:34:27', '87b12860-92d7-458a-b75d-56b586fa3696', '2023-07-29 22:34:27'),
('ed28d8df-9c7f-4472-bc6c-b688d2d633ac', '11th grade', 'ed28d8df-9c7f-4472-bc6c-b688d2d633ac', '2023-07-29 22:34:29', 'ed28d8df-9c7f-4472-bc6c-b688d2d633ac', '2023-07-29 22:34:29'),
('8083631e-5e62-4fe7-ab04-e106e9e31d4d', '12th grade', '8083631e-5e62-4fe7-ab04-e106e9e31d4d', '2023-07-29 22:34:31', '8083631e-5e62-4fe7-ab04-e106e9e31d4d', '2023-07-29 22:34:31');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fistname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `age` int(20) NOT NULL,
  `path` varchar(200) DEFAULT NULL,
  `create_by` varchar(100) DEFAULT NULL,
  `create_date` date DEFAULT NULL,
  `update_by` varchar(100) DEFAULT NULL,
  `update_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `email`, `password`, `fistname`, `lastname`, `age`, `path`, `create_by`, `create_date`, `update_by`, `update_date`) VALUES
('66fa78f6-0556-4e51-afd3-35800bd04504', 'pavaret@gmail.com', '$2b$05$MoOKHrmjzMkfBCrXaLDvIOZeeAU4OsA7INXR1V6WurksbIh4t7dIy', 'pavaret', 'wisarut', 24, NULL, '66fa78f6-0556-4e51-afd3-35800bd04504', '2023-07-26', '66fa78f6-0556-4e51-afd3-35800bd04504', '2023-07-26');

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
  `email` varchar(150) DEFAULT NULL,
  `age` int(10) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `create_by` varchar(20) DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  `update_by` varchar(20) DEFAULT NULL,
  `class_id` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`id`, `firstname`, `lastname`, `email`, `age`, `create_date`, `create_by`, `update_date`, `update_by`, `class_id`) VALUES
('12138fac-a367-49ca-8b6e-057e3d11f79a', 'pavaret110', 'wisarut', 'pavaret10@gmail.com', 23, '2023-07-29 21:04:07', '12138fac-a367-49ca-8', '2023-07-29 23:05:09', '12138fac-a367-49ca-8', '85ccc8b6-fb9f-44e1-826a-063c148a238c'),
('28fd5d42-3b2c-4ede-8d1f-ca7a3911bcef', 'pavaretyu', 'turboza007', 'Prayuth.ChaOcha@gmail.com', 22, '2023-07-09 13:33:44', '28fd5d42-3b2c-4ede-8', '2023-07-15 20:54:48', '28fd5d42-3b2c-4ede-8', '53802eda-fafa-460b-b813-5686a821e22e'),
('38e542ac-38f0-4b88-84c1-e9e580917f97', 'pavaret30', 'wisarut', 'pavaret10@gmail.com', 23, '2023-07-29 21:02:54', '38e542ac-38f0-4b88-8', '2023-07-29 21:02:54', '38e542ac-38f0-4b88-8', '53802eda-fafa-460b-b813-5686a821e22e'),
('509ae114-47c1-4f77-a744-77080900febb', 'pingpong', 'suwatchanee', 'pingpon@gmail.com', 27, '2023-07-16 13:17:43', '509ae114-47c1-4f77-a', '2023-07-16 16:00:59', '509ae114-47c1-4f77-a', '53802eda-fafa-460b-b813-5686a821e22e'),
('60da2385-549f-4444-a673-f2ffbd631c16', 'pavaret', 'wisarut', 'beer@hotmail.com', 30, '2023-07-16 11:22:47', '60da2385-549f-4444-a', '2023-07-16 11:36:28', '60da2385-549f-4444-a', '53802eda-fafa-460b-b813-5686a821e22e'),
('615da075-5569-4938-b615-a100e2e76462', 'pavaret', 'wisarut', 'Prayuth.ChaOcha@gmail.com', 23, '2023-07-09 13:33:36', '615da075-5569-4938-b', '2023-07-09 13:33:36', '615da075-5569-4938-b', '53802eda-fafa-460b-b813-5686a821e22e'),
('7bd40193-5222-4af0-896e-945e1edadfaf', 'Prayuth', 'ChanoCHa', 'pavaret.w@think-bit.org', 20, '2023-07-16 15:56:27', '7bd40193-5222-4af0-8', '2023-07-16 15:56:27', '7bd40193-5222-4af0-8', '53802eda-fafa-460b-b813-5686a821e22e'),
('99cde9d2-bd35-4669-ad92-1d4124b34967', 'pingpong', 'wisarut', 'pingsuwatcharin@hotmail.com', 35, '2023-07-29 23:10:58', '99cde9d2-bd35-4669-a', '2023-07-29 23:10:58', '99cde9d2-bd35-4669-a', '87b12860-92d7-458a-b75d-56b586fa3696'),
('a129664a-da55-4819-8791-1bfb03f9de5b', 'pingpong', 'Chanyhao', 'beerkungz1230@gmail.com', 25, '2023-07-16 13:34:13', 'a129664a-da55-4819-8', '2023-07-16 13:34:13', 'a129664a-da55-4819-8', '53802eda-fafa-460b-b813-5686a821e22e'),
('b256eeb5-27ab-480c-8129-ca10f1d2fe7b', 'Phita', 'Hello', 'ChanoChaya@gmail.com', 20, '2023-07-16 01:34:36', 'b256eeb5-27ab-480c-8', '2023-07-16 13:35:10', 'b256eeb5-27ab-480c-8', '53802eda-fafa-460b-b813-5686a821e22e'),
('c3cb6f75-a582-485e-ba69-8e7410f48c4f', 'eieiza', 'test', 'test@hotmail.com', 25, '2023-07-16 16:31:48', 'c3cb6f75-a582-485e-b', '2023-07-16 16:31:48', 'c3cb6f75-a582-485e-b', '53802eda-fafa-460b-b813-5686a821e22e'),
('e9e5fa65-b161-4b61-8108-6bfb7a1ac787', 'pavaret550', 'wisarut', 'pavaret10@gmail.com', 23, '2023-07-29 21:26:34', 'e9e5fa65-b161-4b61-8', '2023-07-29 23:04:54', 'e9e5fa65-b161-4b61-8', '8083631e-5e62-4fe7-ab04-e106e9e31d4d');

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
  `update_by` varchar(20) DEFAULT NULL,
  `credit` int(11) DEFAULT NULL,
  `members_id` varchar(100) DEFAULT NULL,
  `RoomNo` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id`, `subject_name`, `student_id`, `create_date`, `create_by`, `update_date`, `update_by`, `credit`, `members_id`, `RoomNo`) VALUES
('909cd698-ed7b-4b5a-9cd8-33cc730c077f', 'ภาษาอังกฤษ', '28fd5d42-3b2c-4ede-8', '2023-07-29 20:46:56', '909cd698-ed7b-4b5a-9', '2023-07-29 20:55:23', '66fa78f6-0556-4e51-a', 2, '66fa78f6-0556-4e51-afd3-35800bd04504', 'A202'),
('fbc061b8-e39e-4df6-a676-8a49a06eec05', 'ภาษาไทย', '28fd5d42-3b2c-4ede-8', '2023-07-29 20:56:42', 'fbc061b8-e39e-4df6-a', '2023-07-29 20:56:42', 'fbc061b8-e39e-4df6-a', 4, '66fa78f6-0556-4e51-afd3-35800bd04504', 'A201');

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
