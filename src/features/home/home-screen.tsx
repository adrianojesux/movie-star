import {TrackingScreen} from '@domain/analytics/tracking';
import {HomeStackParams, RootBottomParams} from '@navigation/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {useFavoriteMovieStore} from '@store/favorite-movies-store';
import {AppContainer} from '@ui/app-container';
import {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {IMovie} from 'types/Movie';
import {MovieItem} from './components/movie-item';
import {useListMovies} from './store/use-list-movies';

export function HomeScreen() {
  const {data: moviesResult} = useListMovies();
  const {favoriteMovie} = useFavoriteMovieStore();
  const navigation = useNavigation<NavigationProp<RootBottomParams>>();

  useEffect(() => {
    console.log(moviesResult);
  }, [moviesResult]);

  const handleAddfavorite = (movie: IMovie) => {
    favoriteMovie(movie);
    navigation.navigate('favorites');
  };

  return (
    <TrackingScreen screenName="HOME_SCREEN">
      <AppContainer>
        <FlatList
          style={{flex: 1}}
          data={moviesResult?.results}
          renderItem={({item}) => (
            <MovieItem movie={item} onClicleFavorite={handleAddfavorite} />
          )}
        />
      </AppContainer>
    </TrackingScreen>
  );
}
