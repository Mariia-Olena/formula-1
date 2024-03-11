import { useQuiz } from 'context/QuizContext';

function Question() {
  const { champions, index } = useQuiz();
  const champion = champions[index];

  return <p>Who was world champion in {champion.year}?</p>;
}

export default Question;
