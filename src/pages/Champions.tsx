import { useChampions } from 'features/champions/useChampions';
import { ChampionInterface } from 'services/apiChampions';

function Champions() {
  const { isLoading, champions } = useChampions();

  if (isLoading) return null;

  return (
    <ul>
      {champions!.map((item: ChampionInterface) => {
        return <li key={item.year}>{item.name}</li>;
      })}
    </ul>
  );
}

export default Champions;
