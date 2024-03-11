import { useChampions } from 'features/champions/useChampions';
import {
  useReducer,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { ChampionInterface } from 'services/apiChampions';

enum Status {
  loading = 'loading',
  ready = 'ready',
  active = 'active',
  error = 'error',
  finished = 'finished',
}

enum ActionType {
  start = 'start',
  dataReceived = 'dataReceived',
  dataFailed = 'dataFailed',
  newAnswer = 'newAnswer',
  nextQuestion = 'nextQuestion',
  finish = 'finish',
  restart = 'restart',
}

interface StateInterface {
  status: Status;
  champions: ChampionInterface[];
  answer: string;
  points: number;
  highScore: number;
  index: number;
}

type Start = {
  type: ActionType.start;
};
type DataReceived = {
  type: ActionType.dataReceived;
  payload: ChampionInterface[];
};
type DataFailed = {
  type: ActionType.dataFailed;
};
type NewAnswer = {
  type: ActionType.newAnswer;
  payload: ChampionInterface;
};
type NextQuestion = {
  type: ActionType.nextQuestion;
};
type Finish = {
  type: ActionType.finish;
};
type Restart = {
  type: ActionType.restart;
};

type Action =
  | Start
  | DataReceived
  | DataFailed
  | NewAnswer
  | NextQuestion
  | Finish
  | Restart;

interface ContextInterface extends StateInterface {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dispatch: (action: Action, payload?: any) => void;
}

const initialState: StateInterface = {
  status: Status.loading,
  champions: [],
  answer: '',
  points: 0,
  highScore: 0,
  index: 0,
};

const QuizContext = createContext<ContextInterface | null>(null);

function reducer(state: StateInterface, action: Action): StateInterface {
  switch (action.type) {
    case ActionType.start:
      return {
        ...state,
        status: Status.active,
      };
    // case ActionType.dataReceived:
    //   return { ...state, champions: action.payload, status: Status.ready };
    // case ActionType.dataFailed:
    //   return { ...state, status: Status.error };
    // case ActionType.newAnswer:
    //   const question = state.champions[state.index];

    //   return {
    //     ...state,
    //     answer: action.payload,
    //     points:
    //       action.payload === question.correctOption
    //         ? state.points + question.points
    //         : state.points,
    //   };
    // case ActionType.nextQuestion:
    //   return { ...state, index: state.index++, answer: null };
    // case ActionType.finish:
    //   return {
    //     ...state,
    //     status: Status.finished,
    //     highScore:
    //       state.points > state.highScore ? state.points : state.highScore,
    //   };
    // case ActionType.restart:
    //   return {
    //     ...initialState,
    //     champions: state.champions,
    //     status: Status.ready,
    //     highScore: state.highScore,
    //   };

    default:
      throw new Error('Action is unknown');
  }
}

interface QuizProviderProps {
  children: ReactNode;
}

function QuizProvider({ children }: QuizProviderProps) {
  const { champions: data, error } = useChampions();
  const [{ status, champions, index, answer, points, highScore }, dispatch] =
    useReducer(reducer, initialState);

  useEffect(() => {
    if (data) dispatch({ type: ActionType.dataReceived, payload: data });
    if (error) dispatch({ type: ActionType.dataFailed });
  }, [data, error]);

  return (
    <QuizContext.Provider
      value={{
        status,
        champions,
        index,
        answer,
        points,
        highScore,
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
