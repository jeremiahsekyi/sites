export type SpeechPromptType = "word" | "proverb" | "quotation";

export type SpeechPrompt = {
  type: SpeechPromptType;
  text: string;
};

const promptSets = [
  ["Tragedy", "First impressions last", "“No man ever steps in the same river twice, for it is not the same river and he is not the same man.”. Heraclitus"],
  ["Triumph", "Money talks", "“Democracy is based upon the conviction that there are extraordinary possibilities in ordinary people.”. Harry Emerson Fosdick"],
  ["Blood", "Strike while the iron is hot", "“Rivers know this. There is no hurry. We shall get there someday.”. A. A. Milne"],
  ["Scarcity", "Beauty is in the eye of the beholder", "“The real problem of humanity is that we have paleolithic emotions, medieval institutions, and godlike technology.”. E. O. Wilson"],
  ["Serendipity", "You reap what you sow", "“If liberty means anything at all, it means the right to tell people what they do not want to hear.”. George Orwell"],
  ["Curiosity", "Better late than never", "“The important thing is not to stop questioning. Curiosity has its own reason for existing.”. Albert Einstein"],
  ["Currency", "Too many cooks spoil the broth", "“It takes many good deeds to build a good reputation, and only one bad one to lose it.”. Benjamin Franklin"],
  ["Inflation", "Honesty is the best policy", "“Inflation is the one form of taxation that can be imposed without legislation.”. Milton Friedman"],
  ["Forgiveness", "Practice makes perfect", "“The weak can never forgive. Forgiveness is the attribute of the strong.”. Mahatma Gandhi"],
  ["Conflict", "Don’t judge a book by its cover", "“A society grows great when old men plant trees whose shade they know they shall never sit in.”. Greek proverb"],
  ["Randomness", "Fortune favours the bold", "“In theory, theory and practice are the same. In practice, they are not.”. Jan L. A. van de Snepscheut"],
  ["Empathy", "Time heals all wounds", "“Whenever you feel like criticising anyone, remember that not everyone has had the advantages you have had.”. F. Scott Fitzgerald"],
  ["Delusion", "Slow and steady wins the race", "“Speed is irrelevant if you are going in the wrong direction.”. Mahatma Gandhi"],
  ["Privacy", "Delulu is the only solulu", "“Arguing that you do not care about privacy because you have nothing to hide misunderstands what privacy means.”. Edward Snowden"],
  ["Ambition", "All that glitters is not gold", "“Ambition should be made of sterner stuff than the desire for easy praise.”. William Shakespeare"],
  ["GOAT", "Every cloud has a silver lining", "“Do not judge me by my successes, but by how many times I fell down and got back up.”. Nelson Mandela"],
  ["Betrayal", "Rules are meant to be followed", "“The sad truth is that most evil is done by people who never decide to be good or evil.”. Hannah Arendt"],
  ["Hell", "Necessity is the mother of invention", "“The best way to predict the future is to invent it through deliberate human action.”. Alan Kay"],
  ["Flames", "Let bygones be bygones", "“The past is never dead. It is not even past, no matter how much we deny it.”. William Faulkner"],
  ["Beauty", "Might makes right", "“Injustice anywhere is a threat to justice everywhere, regardless of borders or identities.”. Martin Luther King Jr."],
  ["Greatness", "No man is an island", "“The eternal quest of human beings is to shatter their loneliness and be understood.”. Norman Cousins"],
  ["Home", "Work smarter, not harder", "“There is nothing so useless as doing efficiently that which should not be done at all.”. Peter Drucker"],
  ["Hell", "Trust your gut", "“If you are not confused, you are not paying attention to what is really happening.”. Tom Peters"],
  ["Glee", "Out with the old, in with the new", "“Tradition is not the worship of ashes, but the preservation of living fire.”. Gustav Mahler"],
  ["Pride", "What you see is what you get", "“Sunlight is said to be the best of disinfectants for political and corporate wrongdoing.”. Louis Brandeis"],
  ["Bland", "The early bird catches the worm", "“Luck is what happens when preparation meets opportunity through sustained effort.”. Seneca"],
  ["Train", "Death comes for us all", "“The greatest danger to liberty is a government that ignores limits on its own power.”. Barry Goldwater"],
  ["Healing", "Home is where the heart is", "“No one leaves home unless home is the mouth of a shark, chasing them away.”. Warsan Shire"],
  ["Invisible", "Numbers don’t lie", "“Not everything that can be counted counts, and not everything that counts can be counted.”. William Bruce Cameron"],
  ["Ghosts", "Actions speak louder than words", "“All of humanity’s problems stem from the inability to sit quietly alone in a room.”. Blaise Pascal"],
] as const;

export const speechPrompts: SpeechPrompt[] = promptSets.flatMap(([word, proverb, quotation]) => [
  { type: "word", text: word },
  { type: "proverb", text: proverb },
  { type: "quotation", text: quotation },
]);
