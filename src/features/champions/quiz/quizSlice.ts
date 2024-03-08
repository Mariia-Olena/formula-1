import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useChampions } from 'features/champions/useChampions';
import { ChampionInterface } from 'services/apiChampions';

enum Status {
  loading = 'loading',
  ready = 'ready',
  error = 'error',
  finished = 'finished',
}

interface QuizStateInterface {
  status: Status;
  questions: ChampionInterface[];
  answer: string;
  points: number;
  highScore: number;
}

const initialState: QuizStateInterface = {
  status: Status.loading,
  questions: [
    { name: 'Jim Clark', year: 1963, constructor: 'Alfa Romeo' },
    { name: 'Jim Clark', year: 1965, constructor: 'Alfa Romeo' },
    { name: 'Jack Brabham', year: 1966, constructor: 'Alfa Romeo' },
    { name: 'Zealand Denny Hulme', year: 1967, constructor: 'Alfa Romeo' },
    { name: 'Graham Hill', year: 1968, constructor: 'Alfa Romeo' },
    { name: 'Jackie Stewart', year: 1969, constructor: 'Alfa Romeo' },
    { name: 'Jochen Rindt', year: 1970, constructor: 'Alfa Romeo' },
    { name: 'Jackie Stewart', year: 1971, constructor: 'Alfa Romeo' },
    { name: 'Emerson Fittipaldi', year: 1972, constructor: 'Alfa Romeo' },
    { name: 'Jackie Stewart', year: 1973, constructor: 'Alfa Romeo' },
  ],
  answer: '',
  points: 0,
  highScore: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    start: (state) => {
      state.status = Status.ready;
    },
    newAnswer: (state, action: PayloadAction<string>) => {
      state.answer = action.payload;
    },
  },
});

export default quizSlice.reducer;

export const { start } = quizSlice.actions;
