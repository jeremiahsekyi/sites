import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { requireChatGPTUser } from "@/app/chatgpt-auth";
import { PilotRegisterAdmin } from "@/components/pilot-register-admin";
export const dynamic = "force-dynamic";
export const metadata:Metadata={title:"Class of 2027 Registration Book · Internal",robots:{index:false,follow:false}};
export default async function PilotRegistrationsPage(){
 if(process.env.VERCEL) redirect("https://the-speech-factory.sekyijeremy.chatgpt.site/internal/pilot-registrations");
 await requireChatGPTUser("/internal/pilot-registrations");
 return <main><PilotRegisterAdmin/></main>;
}
