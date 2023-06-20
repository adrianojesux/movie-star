import {TrackingScreen} from '@domain/analytics/tracking';
import {RouteProp, useRoute} from '@react-navigation/native';
import {AppContainer} from '@ui/app-container';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IMovie} from 'types/Movie';

type RouteParams = {
  params: {
    movie: IMovie;
  };
};

export function MovieDetailScreen() {
  const route = useRoute<RouteProp<RouteParams>>();

  const movie = route.params.movie;

  return (
    <TrackingScreen screenName="MOVIE_DETAIL_SCREEN">
      <AppContainer>
        <View style={styles.posterContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`,
            }}
          />
        </View>
      </AppContainer>
    </TrackingScreen>
  );
}

const styles = StyleSheet.create({
  posterContainer: {
    flex: 1,
    height: 200,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: Dimensions.get('screen').height / 50,
  },
});
