CREATE TABLE `pilot_rate_limits` (
	`key` text PRIMARY KEY NOT NULL,
	`window` integer NOT NULL,
	`count` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `pilot_registrations` (
	`id` text PRIMARY KEY NOT NULL,
	`request_id` text NOT NULL,
	`created_at` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`contact` text NOT NULL,
	`contact_method` text NOT NULL,
	`nationality` text NOT NULL,
	`timezone` text NOT NULL,
	`needs` text NOT NULL,
	`goals` text NOT NULL,
	`january` text NOT NULL,
	`urgency` text NOT NULL,
	`immediate_needs` text NOT NULL,
	`deadline` text NOT NULL,
	`immediate_details` text NOT NULL,
	`consent_version` text NOT NULL,
	`updates` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `idx_pilot_request_id` ON `pilot_registrations` (`request_id`);--> statement-breakpoint
CREATE INDEX `idx_pilot_created_at` ON `pilot_registrations` (`created_at`);