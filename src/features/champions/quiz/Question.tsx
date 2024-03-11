import { ChampionInterface } from 'services/apiChampions';

interface QuestionPropsInterface {
  champion: ChampionInterface;
}

function Question({ champion }: QuestionPropsInterface) {
  return <p>Who was world champion in {champion.year}?</p>;
}

export default Question;
