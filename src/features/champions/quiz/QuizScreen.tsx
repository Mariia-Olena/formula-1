import Options from 'features/champions/quiz/Options';
import Question from 'features/champions/quiz/Question';
import { ChampionInterface } from 'services/apiChampions';

interface QuizScreenPropsInterface {
  champion: ChampionInterface;
  options: ChampionInterface[];
}

function QuizScreen({ champion, options }: QuizScreenPropsInterface) {
  return (
    <div className='container'>
      <Question champion={champion} />
      <Options options={options} />
    </div>
  );
}

export default QuizScreen;
