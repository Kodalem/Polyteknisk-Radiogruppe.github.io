CREATE TABLE `comments` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(128) NOT NULL,
	`content` text(1024) NOT NULL,
	`project_id` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `event_page` (
	`event_id` text PRIMARY KEY NOT NULL,
	`title` text(512) NOT NULL,
	`pub_date` text NOT NULL,
	`description` text(512) NOT NULL,
	`link` text(512) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `members` (
	`student_id` text(10) PRIMARY KEY NOT NULL,
	`name` text(512) NOT NULL,
	`university_email` text(512) NOT NULL,
	`personal_email` text(512) NOT NULL,
	`pronouns` text(512),
	`gender` text(512),
	`phone` text(512),
	`paid_membership` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `people_project_assignment` (
	`student_id` text NOT NULL,
	`project_id` text NOT NULL,
	`role` text(512) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `project_page` (
	`project_id` text PRIMARY KEY NOT NULL,
	`title` text(512) NOT NULL,
	`pub_date` text NOT NULL,
	`description` text(512) NOT NULL,
	`team_lead` text(512) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `project_tags` (
	`project_id` integer NOT NULL,
	`tag` text(512) NOT NULL
);
