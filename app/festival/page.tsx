import { redirect } from "next/navigation";

export default function FestivalRedirect() {
  redirect("/events");
}
