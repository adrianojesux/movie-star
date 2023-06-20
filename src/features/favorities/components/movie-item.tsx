import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from './button';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {IMovie} from 'types/Movie';
import {Ionicons} from '@expo/vector-icons';
import {useCallback} from 'react';

type Props = {
  movie: IMovie;
  onClickDetail: (movie: IMovie) => void;
  onClickUnfavorite: (movie: IMovie) => void;
};

export function MovieItem({movie, onClickDetail, onClickUnfavorite}: Props) {
  const handleOnclickeDetail = useCallback(() => {
    onClickDetail(movie);
  }, []);

  const handleOnClickUnfavorite = useCallback(() => {
    onClickUnfavorite(movie);
  }, []);

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
        <View style={styles.buttons}>
          <View style={styles.buttoLeft}>
            <Button
              title="Detalhes"
              width={160}
              onClick={handleOnclickeDetail}
            />
          </View>
          <View style={styles.buttonRight}>
            <Button
              bgColor="#666"
              width={50}
              onClick={handleOnClickUnfavorite}
              icon={
                <Ionicons
                  name="md-heart-dislike-outline"
                  size={24}
                  color="black"
                />
              }
            />
          </View>
        </View>
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttoLeft: {},
  buttonRight: {
    width: 50,
  },
});
