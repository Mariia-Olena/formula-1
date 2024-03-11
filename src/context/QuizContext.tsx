import { useReducer, createContext, useContext, ReactNode } from 'react';
import { ChampionInterface } from 'services/apiChampions';

// interface Action {
//   type:
//     | 'start'
//     | 'dataReceived'
//     | 'dataFailed'
//     | 'newAnswer'
//     | 'nextQuestion'
//     | 'finish'
//     | 'restart';
// }
type Start = {
  type: 'start';
};

type DataReceived = {
  type: 'dataReceived';
  payload: ChampionInterface[];
};

type DataFailed = {
  type: 'dataFailed';
};
type NewAnswer = {
  type: 'newAnswer';
  payload: ChampionInterface;
};

interface StateInterface {
  status: 'loading' | 'ready' | 'active' | 'error' | 'finished';
  champions: ChampionInterface[];
  index: number;
}

interface ContextInterface extends StateInterface {
  dispatch: (action: Action, payload?: unknown) => void;
}

type Action = Start | DataReceived | DataFailed | NewAnswer;

const initialState: StateInterface = {
  status: 'loading',
  champions: [],
  index: 0,
};

const QuizContext = createContext<ContextInterface | null>(null);

function reducer(state: StateInterface, action: Action): StateInterface {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        status: 'ready',
      };
    case 'dataReceived':
      return { ...state, champions: action.payload, status: 'ready' };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'newAnswer':
      return { ...state, index: state.index++ };
    default:
      throw new Error('Action is unknown');
  }
}

interface QuizProviderProps {
  children: ReactNode;
}

function QuizProvider({ children }: QuizProviderProps) {
  const [{ status, champions, index }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <QuizContext.Provider value={{ champions, status, index, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (!context)
    throw new Error('QuizContext was used outside of the QuizProvider');
  return context;
}

export { QuizProvider, useQuiz };
