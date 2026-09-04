export type SpeechPromptType =
  | "fundamentals"
  | "essentials"
  | "proverbs"
  | "hypotheticals"
  | "debates"
  | "one-word";

export type SpeechPrompt = {
  type: SpeechPromptType;
  text: string;
};

export const speechPrompts: SpeechPrompt[] = [
  { type: "fundamentals", text: "I am..." },
  { type: "fundamentals", text: "What I love doing" },
  { type: "fundamentals", text: "What single experience greatly influenced the person you are today?" },
  { type: "fundamentals", text: "What words would your friends use to describe you, and why?" },
  { type: "fundamentals", text: "The one thing I do better than anyone else" },

  { type: "essentials", text: "A pitch for my dream job" },
  { type: "essentials", text: "If I could make one SDG a reality" },
  { type: "essentials", text: "My advice to my 13-year-old self" },
  { type: "essentials", text: "My innovation" },
  { type: "essentials", text: "My world address" },

  { type: "proverbs", text: "The child who is not embraced by the village will burn it down to feel its warmth." },
  { type: "proverbs", text: "We do not inherit the earth from our ancestors. We borrow it from our children." },
  { type: "proverbs", text: "When two elephants fight, it is the grass that suffers." },
  { type: "proverbs", text: "The deepest oceans are filled with creatures that learned to glow in the dark." },
  { type: "proverbs", text: "In a forest of a hundred thousand trees, no two leaves are exactly alike." },

  { type: "hypotheticals", text: "If there was no sickness" },
  { type: "hypotheticals", text: "If the world was ending" },
  { type: "hypotheticals", text: "If I were born into royalty, or the perfect setting" },
  { type: "hypotheticals", text: "If you needed a licence to be a parent" },
  { type: "hypotheticals", text: "If I ruled the world..." },

  { type: "debates", text: "Politicians, and their families, should be legally required to use public services." },
  { type: "debates", text: "It is better to be loved widely than loved deeply." },
  { type: "debates", text: "It is better to focus on enjoying life than extending it." },
  { type: "debates", text: "Governments should focus more resources on researching the deep oceans than on space exploration." },
  { type: "debates", text: "We should have a four-day work week." },

  { type: "one-word", text: "Beauty" },
  { type: "one-word", text: "Faith" },
  { type: "one-word", text: "Hope" },
  { type: "one-word", text: "Wonder" },
  { type: "one-word", text: "Growth" },
];
