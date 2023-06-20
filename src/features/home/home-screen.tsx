import {TrackingScreen} from '@domain/analytics/tracking';
import {HomeStackParams} from '@navigation/types';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AppContainer} from '@ui/app-container';
import {useEffect} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {IMovie} from 'types/Movie';
import {MovieItem} from './components/movie-item';
import {useListMovies} from './store/use-list-movies';

export function HomeScreen() {
  const {data: moviesResult} = useListMovies();
  const navigation = useNavigation<NavigationProp<HomeStackParams>>();

  useEffect(() => {
    console.log(moviesResult);
  }, [moviesResult]);

  const handleOpenDetail = (movie: IMovie) => {
    navigation.navigate('detail', {movie});
  };

  return (
    <TrackingScreen screenName="HOME_SCREEN">
      <AppContainer>
        <FlatList
          style={{flex: 1}}
          data={moviesResult?.results}
          renderItem={({item}) => (
            <MovieItem movie={item} onClicleDetail={handleOpenDetail} />
          )}
        />
      </AppContainer>
    </TrackingScreen>
  );
}
