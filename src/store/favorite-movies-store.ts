import AsyncStorage from '@react-native-async-storage/async-storage';
import {IMovie} from 'types/Movie';
import {create} from 'zustand';
import {createJSONStorage, persist} from 'zustand/middleware';
import {createSelectors} from './create-selector';

interface FavoriteMovieState {
  movies: IMovie[];
  favoriteMovie: (movie: IMovie) => void;
  unfavoriteMovie: (movieId: number) => void;
}

const favoriteStoreBase = create(
  persist<FavoriteMovieState>(
    set => ({
      movies: [],
      favoriteMovie: (movie: IMovie) =>
        set(state => ({movies: [...state.movies, ...[movie]]})),
      unfavoriteMovie: (movieId: number) =>
        set(({movies}) => {
          movies.splice(movies.findIndex(m => m.id === movieId));
          return {movies};
        }),
    }),
    {
      name: '@movie-stars/favorite-movies',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export const useFavoriteMovieStore = createSelectors(favoriteStoreBase);
