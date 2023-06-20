import {IMovie} from 'types/Movie';

export type HomeStackParams = {
  home: undefined;
  detail: {movie: IMovie};
};

export type RootBottomParams = {
  home: undefined;
  search: undefined;
  favorites: undefined;
};
