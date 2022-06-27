// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { useState } from "react";
import { Game, Sentence } from "./types/game.types";

function App(): JSX.Element {

  const [game, setGame] = useState<Game>({
    completedSentences: [],
    sentenceInProgress: { words: [], isFinished: false }
  })


  const [typedInput, setTypedInput] = useState('');

  const handleAddWord = () => {
    setGame(prev => ({
      ...prev,
      sentenceInProgress: {
        ...prev.sentenceInProgress,
        words: [
          ...prev.sentenceInProgress.words,
          typedInput
        ]
      }
    }))

    setTypedInput('');
  }

  const handleCompleteSentence = () => {
    setGame((prev) => ({
      ...prev,
      completedSentences: [
        ...prev.completedSentences,
        { ...prev.sentenceInProgress, isFinished: true }
      ],
      sentenceInProgress: {
        words: [],
        isFinished: false
      },
    }));
  }

  return (
    <main>
      <h1>One Word Story</h1>
      <ol>
        {game.completedSentences.map((sentence, idx) => (
          <li key={idx}>{sentenceText(sentence)}</li>
        ))}
        <li>{sentenceText(game.sentenceInProgress)}</li>
      </ol>
      <br />
      <h3>Add word</h3>
      <input value={typedInput} onChange={(e) => setTypedInput(e.target.value)} />
      <button onClick={handleAddWord}>Add</button>
      <button onClick={handleCompleteSentence}>Full stop</button>
    </main>
  );
}

const sentenceText = (sentence: Sentence): string => `${sentence.words.join(' ')}${sentence.isFinished ? '.' : ''}`


export default App;
