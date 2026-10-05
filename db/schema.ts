import { sqliteTable, text, integer, index, uniqueIndex } from "drizzle-orm/sqlite-core";
export const registrations = sqliteTable("pilot_registrations", {
 id:text("id").primaryKey(), requestId:text("request_id").notNull(), createdAt:text("created_at").notNull(),
 name:text("name").notNull(), email:text("email").notNull(), contact:text("contact").notNull(), contactMethod:text("contact_method").notNull(),
 nationality:text("nationality").notNull(), timezone:text("timezone").notNull(), needs:text("needs").notNull(), goals:text("goals").notNull(),
 january:text("january").notNull(), urgency:text("urgency").notNull(), immediateNeeds:text("immediate_needs").notNull(), deadline:text("deadline").notNull(), immediateDetails:text("immediate_details").notNull(),
 consentVersion:text("consent_version").notNull(), updates:integer("updates").notNull().default(0),
},t=>[uniqueIndex("idx_pilot_request_id").on(t.requestId),index("idx_pilot_created_at").on(t.createdAt)]);
export const rateLimits = sqliteTable("pilot_rate_limits",{key:text("key").primaryKey(),window:integer("window").notNull(),count:integer("count").notNull()});
