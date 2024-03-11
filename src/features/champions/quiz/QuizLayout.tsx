import { useSelector } from 'react-redux';
import './quiz.scss';

import { RootState } from 'src/store/store';
import StartScreen from 'features/champions/quiz/StartScreen';
import QuizScreen from 'features/champions/quiz/QuizScreen';
import { ChampionInterface } from 'services/apiChampions';
import { shuffle } from 'utils/helpers';

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

function QuizLayout() {
  const status = useSelector((state: RootState) => state.quiz.status);
  const index = useSelector((state: RootState) => state.quiz.index);
  const champions = useSelector((state: RootState) => state.quiz.champions);
  const champion = champions[index];
  const options = createOptions(champions, index);

  return (
    <div className='layout'>
      <div>
        {status === 'loading' && <StartScreen />}
        {status === 'ready' && (
          <QuizScreen options={options} champion={champion} />
        )}
      </div>
    </div>
  );
}

export default QuizLayout;
