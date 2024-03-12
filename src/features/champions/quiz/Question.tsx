import './quiz.scss';
import { useQuiz } from 'context/QuizContext';

function Question() {
  const { champions, index } = useQuiz();
  const champion = champions[index];

  return (
    <div className='question'>
      <h3>Who was world champion in {champion.year}?</h3>
    </div>
  );
}

export default Question;
