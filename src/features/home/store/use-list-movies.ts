import {Newtwork} from '@domain/network';
import {useQuery} from '@tanstack/react-query';
import {IMovie} from 'types/Movie';
import {Pagination} from './types/pagination';

const LIST_MOVIES_QUERY = '@moviestars/list-movies';

async function getMovies(): Promise<Pagination<IMovie[]>> {
  const network = Newtwork.getInstance();
  const {data} = await network.request<Pagination<IMovie[]>>({
    method: 'GET',
    url: 'discover/movie?include_adult=true&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc',
  });
  console.log(data);
  return data;
}

export function useListMovies() {
  return useQuery<Pagination<IMovie[]>>([LIST_MOVIES_QUERY], getMovies);
}
