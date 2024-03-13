import { WorldChampionInterface } from 'services/apiChampions';

interface ChampionsProps {
  worldChampion: WorldChampionInterface;
}

function Champion({ worldChampion }: ChampionsProps) {
  return (
    <li className='champions-item'>
      <img
        src={worldChampion.photo}
        alt={worldChampion.name}
        className='champions-img'
      />
      <div className='champions-text'>
        <h3>{worldChampion.name}</h3>
        <p>{worldChampion.numTitles} Times World Champion</p>
      </div>
    </li>
  );
}

export default Champion;
