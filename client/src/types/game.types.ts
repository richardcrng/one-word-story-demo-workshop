export interface Game {
  sentences: Sentence[];
}

export interface Sentence {
  words: string[];
  isFinished: boolean;
}