import './pagesStyles.scss';
import ChampionsList from 'features/champions/ChampionsList';
import { useChampions } from 'features/champions/useChampions';
import { useWorldChampions } from 'features/champions/useWorldChampions';
import QuizLayout from 'features/quiz/QuizLayout';
import Spinner from 'ui/Spinner';

function Champions() {
  const { isLoading: isLoadingChampions } = useChampions();
  const { isLoading: isWorldChampions } = useWorldChampions();

  if (isLoadingChampions || isWorldChampions) return <Spinner />;

  return (
    <div className='page-champions'>
      <ChampionsList />
      <QuizLayout />
    </div>
  );
}

export default Champions;
