import { z } from "zod";

export const PILOT_BOOKING_URL = "https://calendar.app.google/UzbP7FBg1Awo21Pr6";
export const PILOT_COHORT = "January 2027";
export const coachingNeeds = ["Public speaking confidence", "Presentation skills", "Thinking on my feet", "Leadership communication", "Interview preparation", "Storytelling", "Voice and delivery", "Other"] as const;
export const immediateNeeds = ["Interview preparation", "Presentation or pitch preparation", "Practice coaching", "An upcoming speech", "Workplace communication", "Other"] as const;
export const availabilityOptions = ["Yes, I can start in January", "Possibly, depending on the timetable", "No, keep me informed about a later cohort"] as const;
export const urgencyOptions = ["Yes, I need support before January", "Possibly, I would like to discuss it", "No, January works for me"] as const;
const plain = (min:number,max:number) => z.string().trim().min(min).max(max);
export const registrationSchema = z.object({
  requestId: z.string().uuid(),
  name: plain(2,120), email: z.string().trim().email().max(200).transform(v=>v.toLowerCase()),
  contact: plain(7,40).refine(v=>/^[+\d\s().-]+$/.test(v) && v.replace(/\D/g,"").length>=7,"Use a phone number with country code."),
  contactMethod: z.enum(["Email", "WhatsApp", "Phone"]),
  nationality: plain(2,100), timezone: plain(2,100),
  needs: z.array(z.enum(coachingNeeds)).min(1).max(8), goals: plain(0,1500),
  january: z.enum(availabilityOptions), urgency: z.enum(urgencyOptions),
  immediateNeeds: z.array(z.enum(immediateNeeds)).max(6), deadline: z.string().max(10).refine(v=>!v||/^\d{4}-\d{2}-\d{2}$/.test(v)),
  immediateDetails: plain(0,1500), consent: z.literal(true), updates: z.boolean(),
  website: z.string().max(200).optional().default(""),
}).superRefine((v,ctx)=>{
  if(v.needs.includes("Other") && !v.goals)ctx.addIssue({code:z.ZodIssueCode.custom,path:["goals"],message:"Please describe your coaching goal."});
  if(v.urgency===urgencyOptions[0] && v.immediateNeeds.length===0)ctx.addIssue({code:z.ZodIssueCode.custom,path:["immediateNeeds"],message:"Choose the support you need before January."});
});
export type PilotRegistration = z.infer<typeof registrationSchema>;
export type RegistrationRow = {
 id:string; created_at:string; name:string; email:string; contact:string; contact_method:string;
 nationality:string; timezone:string; needs:string; goals:string; january:string; urgency:string;
 immediate_needs:string; deadline:string; immediate_details:string; consent_version:string; updates:number;
};
