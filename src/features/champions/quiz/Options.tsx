import { ChampionInterface } from 'services/apiChampions';
import './quiz.scss';
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
  const { champions, index, dispatch } = useQuiz();
  const champion = champions[index];
  const options = createOptions(champions, index);

  return (
    <div className='options'>
      {options.map((option) => (
        <button
          onClick={() => dispatch({ type: 'newAnswer', payload: option })}
          className='button'
          key={option.year}
        >
          {option.name}
        </button>
      ))}
    </div>
  );
}

export default Options;
