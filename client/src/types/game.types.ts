export interface Game {
  completedSentences: Sentence<true>[];
  sentenceInProgress: Sentence<false>;
}

export interface Sentence<IsFinished extends boolean = boolean> {
  words: string[];
  isFinished: IsFinished;
}