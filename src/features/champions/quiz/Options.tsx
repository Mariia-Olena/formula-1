import { useEffect, useState } from 'react';

import { ChampionInterface } from 'services/apiChampions';
import { shuffle } from 'utils/helpers';
import { useQuiz } from 'context/QuizContext';

function createOptions(
  champions: ChampionInterface[],
  index: number
): ChampionInterface[] {
  const rightAnswer = champions[index];
  let option1 = rightAnswer;
  let option2 = rightAnswer;
  let option3 = rightAnswer;

  while (rightAnswer.name === option1.name) {
    option1 = champions[Math.floor(Math.random() * champions.length)];
  }

  while (rightAnswer.name === option2.name || option1.name === option2.name) {
    option2 = champions[Math.floor(Math.random() * champions.length)];
  }

  while (
    option1.name === option3.name ||
    option2.name === option3.name ||
    rightAnswer.name === option3.name
  ) {
    option3 = champions[Math.floor(Math.random() * champions.length)];
  }

  return shuffle([rightAnswer, option1, option2, option3]);
}

function Options() {
  const { champions, index, answer, dispatch } = useQuiz();
  const [options, setOptions] = useState<ChampionInterface[]>([]);

  useEffect(() => {
    setOptions(createOptions(champions, index));
  }, [champions, index]);

  const champion = champions[index];
  const hasAnswered = answer !== null;
  const isAnswerCorrect =
    champion.name === answer?.name && champion.year === answer.year;

  return (
    <div className='quiz-options'>
      {options.map((option) => (
        <button
          onClick={() => dispatch({ type: 'newAnswer', payload: option })}
          key={option.year}
          disabled={hasAnswered}
          className={`button ${hasAnswered ? 'quiz-answer' : ''} ${
            option.name === answer?.name && option.year === answer?.year
              ? isAnswerCorrect
                ? 'quiz-correct'
                : 'quiz-incorrect'
              : ''
          } `}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
}

export default Options;
