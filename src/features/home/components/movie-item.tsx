import {Image, StyleSheet, Text, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {IMovie} from 'types/Movie';
import {Button} from '@ui/button';
import {Ionicons} from '@expo/vector-icons';

type Props = {
  movie: IMovie;
  onClicleFavorite: (movie: IMovie) => void;
};

export function MovieItem({movie, onClicleFavorite}: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`,
        }}
      />
      <View style={styles.infos}>
        <Text style={styles.title} numberOfLines={2} ellipsizeMode="head">
          {movie?.title}
        </Text>
        <View style={styles.stats}>
          <AnimatedCircularProgress
            size={50}
            width={10}
            fill={movie.vote_average * 10}
            tintColor="#ffB841"
            backgroundColor="#2a2f4f">
            {fill => <Text style={styles.paragraph}>{movie.vote_average}</Text>}
          </AnimatedCircularProgress>
          <Text style={styles.col}>
            <Text style={styles.paragraph_sub}>{'Lançamento\n'}</Text>
            <Text style={styles.paragraph}>{movie.release_date}</Text>
          </Text>
          <Text style={styles.col}>
            <Text style={styles.paragraph_sub}>{'Idioma\n'}</Text>
            <Text style={styles.paragraph}>{movie.original_language}</Text>
          </Text>
        </View>
        <Button
          title="Favorito"
          onClick={() => onClicleFavorite(movie)}
          lefIcon={<Ionicons name="heart-outline" size={24} color="#fff" />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a2f4f',
    marginVertical: 20,
    borderRadius: 10,
    flexDirection: 'row',
    overflow: 'hidden',
    height: 200,
  },
  image: {
    width: 120,
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paragraph: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '700',
  },
  paragraph_sub: {
    fontSize: 14,
    color: '#c2c2c2',
    fontWeight: '700',
    marginBottom: 8,
  },
  col: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  infos: {
    flexDirection: 'column',
    paddingVertical: 16,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'space-between',
  },
});
