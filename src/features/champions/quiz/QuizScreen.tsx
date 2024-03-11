import Options from 'features/champions/quiz/Options';
import Question from 'features/champions/quiz/Question';

function QuizScreen() {
  return (
    <div className='container'>
      <Question />
      <Options />
    </div>
  );
}

export default QuizScreen;
