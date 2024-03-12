import { useReducer, createContext, useContext, ReactNode } from 'react';

import { ChampionInterface } from 'services/apiChampions';

type Start = {
  type: 'start';
  payload: number;
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
type NextQuestion = {
  type: 'nextQuestion';
};
type Finish = {
  type: 'finish';
};

type Action =
  | Start
  | DataReceived
  | DataFailed
  | NewAnswer
  | NextQuestion
  | Finish;

interface StateInterface {
  status: 'loading' | 'ready' | 'active' | 'error' | 'finished';
  champions: ChampionInterface[];
  index: number;
  answer: ChampionInterface | null;
  points: number;
  numQuestions: number;
  maxPossiblePoints: number;
}

interface ContextInterface extends StateInterface {
  dispatch: (action: Action, payload?: unknown) => void;
}

const initialState: StateInterface = {
  status: 'loading',
  champions: [],
  index: 0,
  answer: null,
  points: 0,
  numQuestions: 0,
  maxPossiblePoints: 0,
};

const pointsPerQuestion = 10;

const QuizContext = createContext<ContextInterface | null>(null);

function reducer(state: StateInterface, action: Action): StateInterface {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        status: 'ready',
        numQuestions: action.payload,
        maxPossiblePoints: action.payload * pointsPerQuestion,
      };
    case 'dataReceived':
      return {
        ...state,
        champions: action.payload,
        numQuestions:
          state.numQuestions === 1 ? action.payload.length : state.numQuestions,
        status: 'ready',
      };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'newAnswer': {
      const champion = state.champions[state.index];
      const isAnswerCorrect =
        champion.name === action.payload.name &&
        champion.year === action.payload.year;
      return {
        ...state,
        answer: action.payload,
        points: isAnswerCorrect
          ? state.points + pointsPerQuestion
          : state.points,
      };
    }
    case 'nextQuestion':
      return { ...state, index: state.index++, answer: null };
    case 'finish':
      return {
        ...state,
        status: 'finished',
      };
    default:
      throw new Error('Action is unknown');
  }
}

interface QuizProviderProps {
  children: ReactNode;
}

function QuizProvider({ children }: QuizProviderProps) {
  const [
    {
      status,
      champions,
      index,
      points,
      answer,
      numQuestions,
      maxPossiblePoints,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider
      value={{
        champions,
        status,
        index,
        points,
        answer,
        numQuestions,
        maxPossiblePoints,
        dispatch,
      }}
    >
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
