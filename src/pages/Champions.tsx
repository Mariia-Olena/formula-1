import './pagesStyles.scss';
import ChampionsList from 'features/champions/ChampionsList';
import QuizLayout from 'features/champions/quiz/QuizLayout';

function Champions() {
  return (
    <div className='page-champions'>
      <ChampionsList />
      <QuizLayout />
    </div>
  );
}

export default Champions;
