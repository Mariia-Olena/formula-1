import { ChampionInterface } from 'services/apiChampions';
import './quiz.scss';

interface OptionsPropsInterface {
  options: ChampionInterface[];
}

function Options({ options }: OptionsPropsInterface) {
  return (
    <div className='options'>
      {options.map((option) => (
        <button onClick={() => {}} className='button' key={option.year}>
          {option.name}
        </button>
      ))}
    </div>
  );
}

export default Options;
