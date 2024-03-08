/*
 Navicat Premium Data Transfer

 Source Server         : localhost_1433
 Source Server Type    : SQL Server
 Source Server Version : 16004105 (16.00.4105)
 Source Host           : localhost:1433
 Source Catalog        : blog
 Source Schema         : dbo

 Target Server Type    : SQL Server
 Target Server Version : 16004105 (16.00.4105)
 File Encoding         : 65001

 Date: 07/03/2024 13:08:23
*/


-- ----------------------------
-- Table structure for Accounts
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Accounts]') AND type IN ('U'))
	DROP TABLE [dbo].[Accounts]
GO

CREATE TABLE [dbo].[Accounts] (
  [AccountID] int  IDENTITY(1,1) NOT NULL,
  [Username] varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS  NOT NULL,
  [Email] varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS  NOT NULL,
  [Password] varbinary(256)  NULL,
  [Role] varchar(50) COLLATE SQL_Latin1_General_CP1_CI_AS  NOT NULL
)
GO

ALTER TABLE [dbo].[Accounts] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of Accounts
-- ----------------------------
BEGIN TRANSACTION
GO

SET IDENTITY_INSERT [dbo].[Accounts] ON
GO

INSERT INTO [dbo].[Accounts] ([AccountID], [Username], [Email], [Password], [Role]) VALUES (N'1', N'JaneDoe', N'jane.doe@example.com', 0x70617373776F726431, N'Admin'), (N'2', N'JohnDoe', N'john.doe@example.com', 0x70617373776F726432, N'Staff'), (N'3', N'EmilySmith', N'emily.smith@example.com', 0x70617373776F726433, N'User')
GO

SET IDENTITY_INSERT [dbo].[Accounts] OFF
GO

COMMIT
GO


-- ----------------------------
-- Table structure for BlogPosts
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[BlogPosts]') AND type IN ('U'))
	DROP TABLE [dbo].[BlogPosts]
GO

CREATE TABLE [dbo].[BlogPosts] (
  [PostID] int  IDENTITY(1,1) NOT NULL,
  [Title] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NOT NULL,
  [ShortDescription] varchar(500) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [CoverPicture] varbinary(max)  NULL,
  [Body] nvarchar(max) COLLATE SQL_Latin1_General_CP1_CI_AS  NOT NULL,
  [AuthorID] int  NULL,
  [CategoryID] int  NULL,
  [CreatedAt] datetime DEFAULT getdate() NOT NULL,
  [UpdatedAt] datetime  NULL,
  [DeletedAt] datetime  NULL
)
GO

ALTER TABLE [dbo].[BlogPosts] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of BlogPosts
-- ----------------------------
BEGIN TRANSACTION
GO

SET IDENTITY_INSERT [dbo].[BlogPosts] ON
GO

INSERT INTO [dbo].[BlogPosts] ([PostID], [Title], [ShortDescription], [CoverPicture], [Body], [AuthorID], [CategoryID], [CreatedAt], [UpdatedAt], [DeletedAt]) VALUES (N'1', N'Introduction to SQL', N'Learn the basics of SQL with this introductory post.', NULL, N'This is the body of our first post. It covers SQL basics.', N'1', N'1', N'2024-03-07 06:05:39.290', NULL, NULL), (N'2', N'Why Coding Matters', N'Discussing the importance of learning to code in today''s world.', NULL, N'This post explores the reasons why learning to code is more important than ever.', N'1', N'3', N'2024-03-07 06:05:39.290', NULL, NULL)
GO

SET IDENTITY_INSERT [dbo].[BlogPosts] OFF
GO

COMMIT
GO


-- ----------------------------
-- Table structure for Categories
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Categories]') AND type IN ('U'))
	DROP TABLE [dbo].[Categories]
GO

CREATE TABLE [dbo].[Categories] (
  [CategoryID] int  IDENTITY(1,1) NOT NULL,
  [CategoryName] varchar(100) COLLATE SQL_Latin1_General_CP1_CI_AS  NOT NULL
)
GO

ALTER TABLE [dbo].[Categories] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of Categories
-- ----------------------------
BEGIN TRANSACTION
GO

SET IDENTITY_INSERT [dbo].[Categories] ON
GO

INSERT INTO [dbo].[Categories] ([CategoryID], [CategoryName]) VALUES (N'1', N'Technology'), (N'2', N'Lifestyle'), (N'3', N'Education')
GO

SET IDENTITY_INSERT [dbo].[Categories] OFF
GO

COMMIT
GO


-- ----------------------------
-- Table structure for Comments
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Comments]') AND type IN ('U'))
	DROP TABLE [dbo].[Comments]
GO

CREATE TABLE [dbo].[Comments] (
  [CommentID] int  IDENTITY(1,1) NOT NULL,
  [PostID] int  NOT NULL,
  [UserID] int  NOT NULL,
  [Comment] nvarchar(max) COLLATE SQL_Latin1_General_CP1_CI_AS  NOT NULL,
  [CreatedAt] datetime DEFAULT getdate() NOT NULL
)
GO

ALTER TABLE [dbo].[Comments] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of Comments
-- ----------------------------
BEGIN TRANSACTION
GO

SET IDENTITY_INSERT [dbo].[Comments] ON
GO

INSERT INTO [dbo].[Comments] ([CommentID], [PostID], [UserID], [Comment], [CreatedAt]) VALUES (N'1', N'1', N'2', N'Great post! Really helped me understand the basics.', N'2024-03-07 06:05:39.293'), (N'2', N'1', N'2', N'Looking forward to more content like this.', N'2024-03-07 06:05:39.293')
GO

SET IDENTITY_INSERT [dbo].[Comments] OFF
GO

COMMIT
GO


-- ----------------------------
-- Auto increment value for Accounts
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[Accounts]', RESEED, 3)
GO


-- ----------------------------
-- Uniques structure for table Accounts
-- ----------------------------
ALTER TABLE [dbo].[Accounts] ADD CONSTRAINT [UQ__Accounts__A9D10534467758D7] UNIQUE NONCLUSTERED ([Email] ASC)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Primary Key structure for table Accounts
-- ----------------------------
ALTER TABLE [dbo].[Accounts] ADD CONSTRAINT [PK__Accounts__349DA586CF5357E3] PRIMARY KEY CLUSTERED ([AccountID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for BlogPosts
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[BlogPosts]', RESEED, 2)
GO


-- ----------------------------
-- Primary Key structure for table BlogPosts
-- ----------------------------
ALTER TABLE [dbo].[BlogPosts] ADD CONSTRAINT [PK__BlogPost__AA126038FD0FA28C] PRIMARY KEY CLUSTERED ([PostID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for Categories
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[Categories]', RESEED, 3)
GO


-- ----------------------------
-- Primary Key structure for table Categories
-- ----------------------------
ALTER TABLE [dbo].[Categories] ADD CONSTRAINT [PK__Categori__19093A2B94C22FEF] PRIMARY KEY CLUSTERED ([CategoryID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Auto increment value for Comments
-- ----------------------------
DBCC CHECKIDENT ('[dbo].[Comments]', RESEED, 2)
GO


-- ----------------------------
-- Primary Key structure for table Comments
-- ----------------------------
ALTER TABLE [dbo].[Comments] ADD CONSTRAINT [PK__Comments__C3B4DFAA5966A6A4] PRIMARY KEY CLUSTERED ([CommentID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO


-- ----------------------------
-- Foreign Keys structure for table BlogPosts
-- ----------------------------
ALTER TABLE [dbo].[BlogPosts] ADD CONSTRAINT [FK__BlogPosts__Autho__3D5E1FD2] FOREIGN KEY ([AuthorID]) REFERENCES [dbo].[Accounts] ([AccountID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

ALTER TABLE [dbo].[BlogPosts] ADD CONSTRAINT [FK__BlogPosts__Categ__3E52440B] FOREIGN KEY ([CategoryID]) REFERENCES [dbo].[Categories] ([CategoryID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO


-- ----------------------------
-- Foreign Keys structure for table Comments
-- ----------------------------
ALTER TABLE [dbo].[Comments] ADD CONSTRAINT [FK__Comments__PostID__4222D4EF] FOREIGN KEY ([PostID]) REFERENCES [dbo].[BlogPosts] ([PostID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

ALTER TABLE [dbo].[Comments] ADD CONSTRAINT [FK__Comments__UserID__4316F928] FOREIGN KEY ([UserID]) REFERENCES [dbo].[Accounts] ([AccountID]) ON DELETE NO ACTION ON UPDATE NO ACTION
GO

