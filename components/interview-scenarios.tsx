"use client";
import { useState } from "react";
const scenarios = [
 { label: "Interview", question: "Tell us about a time you turned a difficult situation into a meaningful result.", guidance: "Practise choosing a relevant example, explaining your contribution and making the outcome clear." },
 { label: "Panel follow-up", question: "That sounds like a team achievement. What was your specific contribution?", guidance: "Practise responding to follow-up questions with evidence, ownership and clarity, without losing sight of the team." },
 { label: "Performance review", question: "Why do you believe you are ready for greater responsibility?", guidance: "Practise connecting your performance, impact and growth to the next step you want to take." }
];
export function InterviewScenarios() {
 const [active, setActive] = useState(0);
 return <><div className="scenario-tabs" role="group" aria-label="Practice scenarios">{scenarios.map((scenario, index) => <button key={scenario.label} type="button" aria-pressed={active === index} onClick={() => setActive(index)}>{scenario.label}</button>)}</div><div aria-live="polite"><blockquote>“{scenarios[active].question}”</blockquote><p>{scenarios[active].guidance}</p></div></>;
}
