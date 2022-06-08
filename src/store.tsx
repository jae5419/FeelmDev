import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
export type RootState = ReturnType<typeof store.getState>;

type movieType = {
  id: number;
  title: string;
  genre: string;
  synop: string;
  director: string;
  cast: string[];
  rating: string;
  runTime: number;
  year: number;
  img: string;
}[];

const movieList = createSlice({
  name: "movieList",
  initialState: [
    {
      id: 0,
      title: "",
      genre: "",
      synop: "",
      director: "",
      cast: [""],
      rating: "",
      runTime: 0,
      year: 0,
      img: "",
    },
  ],
  reducers: {
    setMovies(state, action: PayloadAction<any>) {
      return (state = action.payload);
    },
    findMovies(state, action: PayloadAction<string>) {
      const result = state.filter(
        (item) =>
          item.title.includes(action.payload) ||
          item.genre.includes(action.payload) ||
          item.director.includes(action.payload),
      );
      return (state = result);
    },
  },
});
export const { setMovies, findMovies } = movieList.actions;

const store = configureStore({
  reducer: {
    movieList: movieList.reducer,
  },
});
export default store;
