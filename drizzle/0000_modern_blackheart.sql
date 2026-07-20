CREATE TABLE `bookmarks` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`url` text NOT NULL,
	`category` text DEFAULT 'other',
	`created_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `notes` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`folder_id` text,
	`is_favorite` integer DEFAULT false,
	`is_archived` integer DEFAULT false,
	`is_trash` integer DEFAULT false,
	`tags` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`completed` integer DEFAULT false,
	`due_date` integer,
	`has_reminder` integer DEFAULT false,
	`priority` text DEFAULT 'medium',
	`project_id` text,
	`created_at` integer NOT NULL,
	`updated_at` integer NOT NULL
);
