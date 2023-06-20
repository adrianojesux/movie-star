import {Newtwork} from '@domain/network';
import {useQuery} from '@tanstack/react-query';
import {container} from 'reactject';
import {Movie} from './types/movie';

const LIST_MOVIES_QUERY = '@moviestars/list-movies';

const getMovies = async (): Promise<Movie[]> => {
  const network = container.resolve(Newtwork);
  const {data} = await network.request<Movie[]>({
    method: 'GET',
    url: 'include_adult=true&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc',
  });
  return data;
};

export function listMovies() {
  return useQuery<Movie[]>([LIST_MOVIES_QUERY], getMovies);
}
