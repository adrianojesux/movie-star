import {inject, injectable} from 'reactject';
import {listMovies} from '../store/list-movies';

@injectable()
export class ListMoviesUseCase {
  async execute() {
    const movies = await listMovies();
    console.log(movies);
  }
}
