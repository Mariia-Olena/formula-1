import Champion from 'features/champions/Champion';
import { useWorldChampions } from 'features/champions/useWorldChampions';
import Spinner from 'ui/Spinner';
import './championsStyles.scss';

function ChampionsList() {
  const { isLoading, worldChampions } = useWorldChampions();

  if (isLoading) return <Spinner />;
  return (
    <ul className='champions-list'>
      <div className='champions-slide'>
        {worldChampions &&
          worldChampions.map((worldChampion) => (
            <Champion worldChampion={worldChampion} key={worldChampion.id} />
          ))}
      </div>
      <div className='champions-slide'>
        {worldChampions &&
          worldChampions.map((worldChampion) => (
            <Champion worldChampion={worldChampion} key={worldChampion.id} />
          ))}
      </div>
    </ul>
  );
}

export default ChampionsList;
