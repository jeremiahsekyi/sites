import type { Metadata } from "next";
import { ResourceRoom } from "@/components/resource-room";
export const metadata: Metadata = {
 title: "Daily Speech Practice & Resources",
 description: "Practise public speaking every day with The Speech Factory’s free impromptu prompts. Get communication tips, workshop excerpts and coaching programme news.",
};
export default function ResourcesPage(){ return <ResourceRoom />; }
