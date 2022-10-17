interface IGenresProps {
  id: number
  name: string
}

export interface IMovieRequestProps {
	genres: IGenresProps[]
	homepage: string,
	id: number,
	overview: string,
	poster_path: string,
	release_date: string,
	revenue: number,
	runtime: number,
	title: string,
	vote_average: number,
	vote_count: number
}
