import { MovieCard } from "../components/MovieCard"

import { IMovieRequestProps } from "../interface/Movie"

import * as Styles from "../styles/pages/Wishlist"

export function WishList() {
  
  const movie : IMovieRequestProps = {"genres":[{"id":18,"name":"Drama"}],
  "homepage":"http://www.foxmovies.com/movies/fight-club","id":550,
  "overview":"A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy.",
  "poster_path":"/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg","release_date":"1999-10-15","revenue":100853753,
  "runtime":139,"title":"Fight Club","vote_average":8.432,"vote_count":24722}


  return (
    <Styles.Container>
      <h1>Minha lista</h1>

      <div className="cards">
          <MovieCard
          key={movie.id}
          movie={movie}
          />
      </div>
    </Styles.Container>
  )
}
