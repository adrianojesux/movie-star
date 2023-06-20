import {TrackingScreen} from '@domain/analytics/tracking';
import {useFavoriteMovieStore} from '@store/favorite-movies-store';
import {AppContainer} from '@ui/app-container';
import {useCallback} from 'react';
import {FlatList} from 'react-native';
import {IMovie} from 'types/Movie';
import {MovieItem} from './components/movie-item';

export function FavoritiesScreen() {
  const {movies, unfavoriteMovie} = useFavoriteMovieStore();

  const handleUnfavoriteMovie = useCallback((movie: IMovie) => {
    console.log('remove favorite');
    unfavoriteMovie(movie.id);
  }, []);

  return (
    <TrackingScreen screenName="FAVORITIES_MOVIE_SCREEN">
      <AppContainer>
        <FlatList
          style={{flex: 1}}
          data={movies}
          renderItem={({item}) => (
            <MovieItem
              movie={item}
              onClickDetail={console.log}
              onClickUnfavorite={handleUnfavoriteMovie}
            />
          )}
        />
      </AppContainer>
    </TrackingScreen>
  );
}
