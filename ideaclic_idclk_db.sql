-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2016 at 07:16 AM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `ideaclic_idclk_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `arch_mst_idea`
--

CREATE TABLE IF NOT EXISTS `arch_mst_idea` (
  `nbr_idea_id` int(10) NOT NULL,
  `nbr_submitter_id` int(10) NOT NULL,
  `nbr_group_id` int(10) DEFAULT NULL,
  `nbr_campaign_id` int(10) DEFAULT NULL,
  `txt_title` varchar(100) DEFAULT NULL,
  `txt_description` varchar(2000) DEFAULT NULL,
  `nbr_category_id` int(10) DEFAULT NULL,
  `dat_submitted` datetime NOT NULL,
  `dat_modified` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `nbr_like_count` int(10) NOT NULL,
  `nbr_dislike_count` int(10) NOT NULL,
  `bol_confidential` tinyint(1) DEFAULT NULL,
  `nbr_star_rating` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `campaign_category_trans`
--

CREATE TABLE IF NOT EXISTS `campaign_category_trans` (
  `nbr_campaign_id` int(10) NOT NULL,
  `nbr_category_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `campaign_category_trans`
--

INSERT INTO `campaign_category_trans` (`nbr_campaign_id`, `nbr_category_id`) VALUES
(1, 15),
(1, 16),
(2, 78),
(2, 17);

-- --------------------------------------------------------

--
-- Table structure for table `category_group_trans`
--

CREATE TABLE IF NOT EXISTS `category_group_trans` (
  `nbr_category_id` int(10) NOT NULL,
  `nbr_group_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category_group_trans`
--

INSERT INTO `category_group_trans` (`nbr_category_id`, `nbr_group_id`) VALUES
(1, 8),
(2, 8),
(3, 8),
(4, 8),
(5, 8),
(6, 8),
(7, 8),
(8, 8),
(9, 8),
(10, 8),
(57, 8),
(11, 9),
(12, 9),
(13, 9),
(14, 9),
(15, 9),
(16, 9),
(17, 9),
(18, 9),
(78, 9),
(82, 9);

-- --------------------------------------------------------

--
-- Table structure for table `mst_campaign`
--

CREATE TABLE IF NOT EXISTS `mst_campaign` (
`nbr_campaign_id` int(10) NOT NULL,
  `nbr_group_id` int(10) NOT NULL,
  `txt_campaign_name` varchar(50) DEFAULT NULL,
  `dat_start_date` varchar(50) DEFAULT NULL,
  `dat_end_date` varchar(50) DEFAULT NULL,
  `nbr_campaign_status_id` int(2) NOT NULL,
  `dat_created` date NOT NULL,
  `bol_status` tinyint(1) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `mst_campaign`
--

INSERT INTO `mst_campaign` (`nbr_campaign_id`, `nbr_group_id`, `txt_campaign_name`, `dat_start_date`, `dat_end_date`, `nbr_campaign_status_id`, `dat_created`, `bol_status`) VALUES
(1, 9, 'Ideathon', '2016-02-10', '2016-02-11', 1, '2016-02-10', 0),
(2, 9, 'Traffic management', '2016-02-12', '2016-02-20', 1, '2016-02-10', 0);

-- --------------------------------------------------------

--
-- Table structure for table `mst_campaign_status`
--

CREATE TABLE IF NOT EXISTS `mst_campaign_status` (
`nbr_campaign_status_id` int(10) NOT NULL,
  `txt_campaign_status` varchar(10) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `mst_campaign_status`
--

INSERT INTO `mst_campaign_status` (`nbr_campaign_status_id`, `txt_campaign_status`) VALUES
(1, 'Active'),
(2, 'Inactive'),
(3, 'Planned');

-- --------------------------------------------------------

--
-- Table structure for table `mst_category`
--

CREATE TABLE IF NOT EXISTS `mst_category` (
`nbr_category_id` int(10) NOT NULL,
  `txt_category_name` varchar(50) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=93 ;

--
-- Dumping data for table `mst_category`
--

INSERT INTO `mst_category` (`nbr_category_id`, `txt_category_name`) VALUES
(0, 'General'),
(1, 'Power'),
(2, 'Sanitation'),
(3, 'Transport'),
(4, 'Housing'),
(5, 'Health'),
(6, 'Education'),
(7, 'Communication'),
(8, 'Good Governance'),
(9, 'Environment'),
(10, 'Safety & Security'),
(11, 'Jobs Related'),
(12, 'Web App'),
(13, 'Mobile App'),
(14, 'Electrical'),
(15, 'Bio-Tech'),
(16, 'Chemical'),
(17, 'Physics'),
(18, 'Entrepreneurship'),
(19, 'Documentary'),
(20, 'Animation'),
(21, 'Story'),
(22, 'Technology'),
(23, 'Cost optimization'),
(24, 'Crew Management'),
(25, 'Shooting'),
(26, 'Outdoor shooting'),
(27, 'Operations'),
(28, 'Support Staff'),
(29, 'Corporate'),
(30, 'New Product Ideas'),
(31, 'Technology'),
(32, 'Process'),
(33, 'Employees'),
(34, 'Mobile / Phone Network'),
(35, 'Tools'),
(36, 'Cost Saving'),
(37, 'Blankets / Warm Cloths'),
(38, 'Food'),
(39, 'Infrastructure'),
(40, 'Commute'),
(41, 'WorkLife balance'),
(42, 'Facilities'),
(43, 'Electricity'),
(44, 'Travel Advice'),
(45, 'Traffic Regulation'),
(46, 'Medical Emergencies'),
(47, 'Distributing Medicine'),
(48, 'Amenities'),
(49, 'Housing / Rehabilitation'),
(50, 'Water Logging'),
(51, 'Parking'),
(52, 'Food & Drinking Water'),
(53, 'Help Needed'),
(54, 'Lift'),
(55, 'Water Conservation'),
(56, 'Law & Order'),
(57, 'Energy Conservation'),
(58, 'Tourism'),
(59, 'Reward & Recognition'),
(60, 'Housing & Rehabilitation'),
(61, 'Bankets & Cloths'),
(62, ''),
(63, 'Travel'),
(64, 'Medicine'),
(65, 'Medical Emergency'),
(67, 'Waste Management'),
(68, 'Security'),
(69, 'Water'),
(70, 'Parking'),
(72, 'House Keeping'),
(73, 'Automobile'),
(76, 'Information Technology'),
(77, 'Digitalization'),
(78, 'Mechanical'),
(79, 'Globalization'),
(80, 'Digital Marketing'),
(82, 'Electronics'),
(83, 'Telecommunication'),
(84, 'Education'),
(85, 'Government- Systems'),
(86, 'Traffic'),
(87, 'Mobile'),
(88, 'Annual Meetings'),
(89, 'Committee members'),
(90, 'Maintenance'),
(91, 'Jobs'),
(92, 'xxx');

-- --------------------------------------------------------

--
-- Table structure for table `mst_comments`
--

CREATE TABLE IF NOT EXISTS `mst_comments` (
`nbr_comment_id` int(10) NOT NULL,
  `txt_comment_desc` varchar(2555) DEFAULT NULL,
  `nbr_parent_comment_id` int(10) DEFAULT NULL,
  `nbr_parent_idea_id` int(10) DEFAULT NULL,
  `nbr_submitter_id` int(10) DEFAULT NULL,
  `nbr_like_count` int(10) DEFAULT NULL,
  `nbr_dislike_count` int(10) DEFAULT NULL,
  `dat_comment_submitted` date DEFAULT NULL,
  `dat_comment_modified` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `mst_group`
--

CREATE TABLE IF NOT EXISTS `mst_group` (
`nbr_group_id` int(10) NOT NULL,
  `nbr_owner_id` int(10) NOT NULL,
  `txt_group_name` varchar(100) NOT NULL,
  `txt_group_code` varchar(50) NOT NULL,
  `nbr_group_class_id` int(3) NOT NULL,
  `txt_group_desc` varchar(200) NOT NULL,
  `nbr_group_type_id` int(2) NOT NULL,
  `txt_image_path` varchar(100) NOT NULL,
  `dat_created` datetime NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `mst_group`
--

INSERT INTO `mst_group` (`nbr_group_id`, `nbr_owner_id`, `txt_group_name`, `txt_group_code`, `nbr_group_class_id`, `txt_group_desc`, `nbr_group_type_id`, `txt_image_path`, `dat_created`) VALUES
(8, 20, 'SS.MM. College', 'ss.mm.clg', 1, 'S.S.M.M.Collge Pachora', 1, 'ss.mm.clg.jpg', '2016-02-10 17:37:19'),
(9, 18, 'SIMCA', 'simca', 2, 'Sinhgad Institude of Management and Computer Application.', 2, '', '2016-02-10 18:31:48');

-- --------------------------------------------------------

--
-- Table structure for table `mst_group_class`
--

CREATE TABLE IF NOT EXISTS `mst_group_class` (
`nbr_group_class_id` int(10) NOT NULL,
  `txt_group_class` varchar(50) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=10 ;

--
-- Dumping data for table `mst_group_class`
--

INSERT INTO `mst_group_class` (`nbr_group_class_id`, `txt_group_class`) VALUES
(1, 'Smart City Initiative'),
(2, 'Educational Institute'),
(3, 'Film Industry Unit'),
(4, 'Agriculture Institute'),
(5, 'Corporate'),
(6, 'Bank'),
(7, 'Housing Society'),
(8, 'Social'),
(9, 'Other');

-- --------------------------------------------------------

--
-- Table structure for table `mst_group_default_category`
--

CREATE TABLE IF NOT EXISTS `mst_group_default_category` (
  `nbr_group_class_id` int(10) NOT NULL,
  `nbr_category_id` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mst_group_default_category`
--

INSERT INTO `mst_group_default_category` (`nbr_group_class_id`, `nbr_category_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 57),
(2, 11),
(2, 12),
(2, 13),
(2, 14),
(2, 15),
(2, 16),
(2, 17),
(2, 18),
(2, 78),
(2, 82),
(3, 19),
(3, 20),
(3, 21),
(3, 22),
(3, 23),
(3, 24),
(3, 25),
(3, 26),
(3, 27),
(3, 28),
(5, 30),
(5, 31),
(5, 32),
(5, 33),
(5, 35),
(5, 7),
(5, 36),
(5, 38),
(5, 39),
(5, 40),
(5, 41),
(5, 42),
(6, 68),
(6, 41),
(6, 36),
(6, 39),
(6, 59),
(6, 42),
(7, 1),
(7, 7),
(7, 10),
(7, 48),
(7, 51),
(7, 54),
(7, 62),
(7, 69),
(7, 90);

-- --------------------------------------------------------

--
-- Table structure for table `mst_group_type`
--

CREATE TABLE IF NOT EXISTS `mst_group_type` (
  `nbr_group_type_id` int(100) NOT NULL,
  `txt_group_type_desc` varchar(8) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mst_group_type`
--

INSERT INTO `mst_group_type` (`nbr_group_type_id`, `txt_group_type_desc`) VALUES
(1, 'Public'),
(2, 'Private');

-- --------------------------------------------------------

--
-- Table structure for table `mst_idea`
--

CREATE TABLE IF NOT EXISTS `mst_idea` (
`nbr_idea_id` int(10) NOT NULL,
  `nbr_submitter_id` int(10) NOT NULL,
  `nbr_group_id` int(10) DEFAULT NULL,
  `nbr_campaign_id` int(10) DEFAULT NULL,
  `txt_title` varchar(100) DEFAULT NULL,
  `txt_description` varchar(2000) DEFAULT NULL,
  `nbr_category_id` int(10) DEFAULT NULL,
  `dat_submitted` datetime NOT NULL,
  `dat_modified` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `nbr_like_count` int(10) NOT NULL,
  `nbr_dislike_count` int(10) NOT NULL,
  `bol_confidential` tinyint(1) DEFAULT NULL,
  `nbr_star_rating` int(1) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `mst_idea`
--

INSERT INTO `mst_idea` (`nbr_idea_id`, `nbr_submitter_id`, `nbr_group_id`, `nbr_campaign_id`, `txt_title`, `txt_description`, `nbr_category_id`, `dat_submitted`, `dat_modified`, `nbr_like_count`, `nbr_dislike_count`, `bol_confidential`, `nbr_star_rating`) VALUES
(1, 18, 9, 1, 'Idea Management portal', 'I want to create a big idea management portal.', 15, '2016-02-11 09:58:13', '2016-02-11 09:58:13', 0, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `mst_notification`
--

CREATE TABLE IF NOT EXISTS `mst_notification` (
`nbr_notification_id` int(10) NOT NULL,
  `nbr_group_id` int(10) NOT NULL,
  `txt_notification` varchar(200) NOT NULL,
  `dat_created` varchar(50) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `mst_notification`
--

INSERT INTO `mst_notification` (`nbr_notification_id`, `nbr_group_id`, `txt_notification`, `dat_created`) VALUES
(1, 9, 'SIMCA group created Ideathon campaign . now you can start submitting ideas under Ideathon campaign.', '2016-02-10 18:33:16'),
(2, 9, 'SIMCA group created Traffic management campaign . now you can start submitting ideas under Traffic management campaign.', '2016-02-10 18:42:33');

-- --------------------------------------------------------

--
-- Table structure for table `mst_site_visits`
--

CREATE TABLE IF NOT EXISTS `mst_site_visits` (
  `nbr_counter` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `mst_site_visits`
--

INSERT INTO `mst_site_visits` (`nbr_counter`) VALUES
(351);

-- --------------------------------------------------------

--
-- Table structure for table `mst_user`
--

CREATE TABLE IF NOT EXISTS `mst_user` (
`nbr_user_id` int(10) NOT NULL,
  `txt_name` varchar(50) DEFAULT NULL,
  `txt_gender` varchar(10) DEFAULT NULL,
  `txt_email` varchar(50) DEFAULT NULL,
  `txt_mobile` varchar(15) DEFAULT NULL,
  `txt_pswd` varchar(50) DEFAULT NULL,
  `txt_address` varchar(200) NOT NULL,
  `txt_country` varchar(25) NOT NULL,
  `txt_state` varchar(25) NOT NULL,
  `txt_city` varchar(25) NOT NULL,
  `nbr_pincode` int(10) NOT NULL,
  `txt_image_path` varchar(100) NOT NULL,
  `dat_created` datetime NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=21 ;

--
-- Dumping data for table `mst_user`
--

INSERT INTO `mst_user` (`nbr_user_id`, `txt_name`, `txt_gender`, `txt_email`, `txt_mobile`, `txt_pswd`, `txt_address`, `txt_country`, `txt_state`, `txt_city`, `nbr_pincode`, `txt_image_path`, `dat_created`) VALUES
(18, 'Amol Shirude', 'Male', 'amolshirude001@gmail.com', '9970509629', 'QW1vbEAxMjM0', 'Katepuram Chowk', 'India', 'Maharashtra', 'Pune', 411061, 'amolshirude001@gmail.com.jpg', '2016-02-10 17:02:39'),
(20, 'Bhushan Shirude', 'Male', 'bhushanshirude95@gmail.com', '9970509629', 'Qmh1c2hhbkAxMjM=', 'Pachora', 'India', 'Maharashtra', 'Jalgaon', 424201, '', '2016-02-10 17:13:50');

-- --------------------------------------------------------

--
-- Table structure for table `mst_user_invitation`
--

CREATE TABLE IF NOT EXISTS `mst_user_invitation` (
  `nbr_group_id` int(10) DEFAULT NULL,
  `nbr_random_no` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_idea_opinion_dtls`
--

CREATE TABLE IF NOT EXISTS `user_idea_opinion_dtls` (
  `nbr_user_id` int(10) NOT NULL,
  `nbr_idea_id` int(10) NOT NULL,
  `bol_opinion` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_request_dtls`
--

CREATE TABLE IF NOT EXISTS `user_request_dtls` (
`nbr_request_id` int(10) NOT NULL,
  `nbr_user_id` int(10) NOT NULL,
  `nbr_group_id` int(10) NOT NULL,
  `txt_status` varchar(25) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `user_request_dtls`
--

INSERT INTO `user_request_dtls` (`nbr_request_id`, `nbr_user_id`, `nbr_group_id`, `txt_status`) VALUES
(7, 20, 8, 'Owner'),
(8, 18, 8, 'Accepted'),
(9, 18, 9, 'Owner'),
(10, 20, 9, 'Rejected');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `campaign_category_trans`
--
ALTER TABLE `campaign_category_trans`
 ADD KEY `campaign_category_trans_ibfk_1` (`nbr_campaign_id`), ADD KEY `campaign_category_trans_ibfk_2` (`nbr_category_id`);

--
-- Indexes for table `category_group_trans`
--
ALTER TABLE `category_group_trans`
 ADD KEY `category_group_trans_ibfk_1` (`nbr_category_id`), ADD KEY `category_group_trans_ibfk_2` (`nbr_group_id`);

--
-- Indexes for table `mst_campaign`
--
ALTER TABLE `mst_campaign`
 ADD PRIMARY KEY (`nbr_campaign_id`), ADD KEY `mst_campaign_ibfk_1` (`nbr_group_id`);

--
-- Indexes for table `mst_campaign_status`
--
ALTER TABLE `mst_campaign_status`
 ADD PRIMARY KEY (`nbr_campaign_status_id`);

--
-- Indexes for table `mst_category`
--
ALTER TABLE `mst_category`
 ADD PRIMARY KEY (`nbr_category_id`);

--
-- Indexes for table `mst_comments`
--
ALTER TABLE `mst_comments`
 ADD PRIMARY KEY (`nbr_comment_id`), ADD KEY `mst_comments_ibfk_1` (`nbr_parent_idea_id`), ADD KEY `mst_comments_ibfk_2` (`nbr_submitter_id`);

--
-- Indexes for table `mst_group`
--
ALTER TABLE `mst_group`
 ADD PRIMARY KEY (`nbr_group_id`), ADD KEY `mst_group_ibfk_1` (`nbr_group_class_id`), ADD KEY `mst_group_ibfk_2` (`nbr_group_type_id`);

--
-- Indexes for table `mst_group_class`
--
ALTER TABLE `mst_group_class`
 ADD PRIMARY KEY (`nbr_group_class_id`);

--
-- Indexes for table `mst_group_type`
--
ALTER TABLE `mst_group_type`
 ADD PRIMARY KEY (`nbr_group_type_id`);

--
-- Indexes for table `mst_idea`
--
ALTER TABLE `mst_idea`
 ADD PRIMARY KEY (`nbr_idea_id`), ADD KEY `mst_idea_ibfk_1` (`nbr_group_id`), ADD KEY `mst_idea_ibfk_2` (`nbr_submitter_id`);

--
-- Indexes for table `mst_notification`
--
ALTER TABLE `mst_notification`
 ADD PRIMARY KEY (`nbr_notification_id`), ADD KEY `mst_notification_ibfk_1` (`nbr_group_id`);

--
-- Indexes for table `mst_user`
--
ALTER TABLE `mst_user`
 ADD PRIMARY KEY (`nbr_user_id`);

--
-- Indexes for table `user_idea_opinion_dtls`
--
ALTER TABLE `user_idea_opinion_dtls`
 ADD KEY `user_idea_opinion_dtls_ibfk_1` (`nbr_user_id`), ADD KEY `user_idea_opinion_dtls_ibfk_2` (`nbr_idea_id`);

--
-- Indexes for table `user_request_dtls`
--
ALTER TABLE `user_request_dtls`
 ADD PRIMARY KEY (`nbr_request_id`), ADD KEY `user_request_dtls_ibfk_1` (`nbr_user_id`), ADD KEY `user_request_dtls_ibfk_2` (`nbr_group_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mst_campaign`
--
ALTER TABLE `mst_campaign`
MODIFY `nbr_campaign_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `mst_campaign_status`
--
ALTER TABLE `mst_campaign_status`
MODIFY `nbr_campaign_status_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `mst_category`
--
ALTER TABLE `mst_category`
MODIFY `nbr_category_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=93;
--
-- AUTO_INCREMENT for table `mst_comments`
--
ALTER TABLE `mst_comments`
MODIFY `nbr_comment_id` int(10) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mst_group`
--
ALTER TABLE `mst_group`
MODIFY `nbr_group_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `mst_group_class`
--
ALTER TABLE `mst_group_class`
MODIFY `nbr_group_class_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `mst_idea`
--
ALTER TABLE `mst_idea`
MODIFY `nbr_idea_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `mst_notification`
--
ALTER TABLE `mst_notification`
MODIFY `nbr_notification_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `mst_user`
--
ALTER TABLE `mst_user`
MODIFY `nbr_user_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `user_request_dtls`
--
ALTER TABLE `user_request_dtls`
MODIFY `nbr_request_id` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `campaign_category_trans`
--
ALTER TABLE `campaign_category_trans`
ADD CONSTRAINT `campaign_category_trans_ibfk_1` FOREIGN KEY (`nbr_campaign_id`) REFERENCES `mst_campaign` (`nbr_campaign_id`),
ADD CONSTRAINT `campaign_category_trans_ibfk_2` FOREIGN KEY (`nbr_category_id`) REFERENCES `mst_category` (`nbr_category_id`);

--
-- Constraints for table `category_group_trans`
--
ALTER TABLE `category_group_trans`
ADD CONSTRAINT `category_group_trans_ibfk_1` FOREIGN KEY (`nbr_category_id`) REFERENCES `mst_category` (`nbr_category_id`),
ADD CONSTRAINT `category_group_trans_ibfk_2` FOREIGN KEY (`nbr_group_id`) REFERENCES `mst_group` (`nbr_group_id`);

--
-- Constraints for table `mst_campaign`
--
ALTER TABLE `mst_campaign`
ADD CONSTRAINT `mst_campaign_ibfk_1` FOREIGN KEY (`nbr_group_id`) REFERENCES `mst_group` (`nbr_group_id`);

--
-- Constraints for table `mst_comments`
--
ALTER TABLE `mst_comments`
ADD CONSTRAINT `mst_comments_ibfk_1` FOREIGN KEY (`nbr_parent_idea_id`) REFERENCES `mst_idea` (`nbr_idea_id`),
ADD CONSTRAINT `mst_comments_ibfk_2` FOREIGN KEY (`nbr_submitter_id`) REFERENCES `mst_user` (`nbr_user_id`);

--
-- Constraints for table `mst_group`
--
ALTER TABLE `mst_group`
ADD CONSTRAINT `mst_group_ibfk_1` FOREIGN KEY (`nbr_group_class_id`) REFERENCES `mst_group_class` (`nbr_group_class_id`),
ADD CONSTRAINT `mst_group_ibfk_2` FOREIGN KEY (`nbr_group_type_id`) REFERENCES `mst_group_type` (`nbr_group_type_id`);

--
-- Constraints for table `mst_idea`
--
ALTER TABLE `mst_idea`
ADD CONSTRAINT `mst_idea_ibfk_1` FOREIGN KEY (`nbr_group_id`) REFERENCES `mst_group` (`nbr_group_id`),
ADD CONSTRAINT `mst_idea_ibfk_2` FOREIGN KEY (`nbr_submitter_id`) REFERENCES `mst_user` (`nbr_user_id`);

--
-- Constraints for table `mst_notification`
--
ALTER TABLE `mst_notification`
ADD CONSTRAINT `mst_notification_ibfk_1` FOREIGN KEY (`nbr_group_id`) REFERENCES `mst_group` (`nbr_group_id`);

--
-- Constraints for table `user_idea_opinion_dtls`
--
ALTER TABLE `user_idea_opinion_dtls`
ADD CONSTRAINT `user_idea_opinion_dtls_ibfk_1` FOREIGN KEY (`nbr_user_id`) REFERENCES `mst_user` (`nbr_user_id`),
ADD CONSTRAINT `user_idea_opinion_dtls_ibfk_2` FOREIGN KEY (`nbr_idea_id`) REFERENCES `mst_idea` (`nbr_idea_id`);

--
-- Constraints for table `user_request_dtls`
--
ALTER TABLE `user_request_dtls`
ADD CONSTRAINT `user_request_dtls_ibfk_1` FOREIGN KEY (`nbr_user_id`) REFERENCES `mst_user` (`nbr_user_id`),
ADD CONSTRAINT `user_request_dtls_ibfk_2` FOREIGN KEY (`nbr_group_id`) REFERENCES `mst_group` (`nbr_group_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
