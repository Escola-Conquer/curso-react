import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { Loading } from "../components/Loading"
import { MovieCard } from "../components/MovieCard"
import { useWishlist } from "../hooks/useWishlist"
import { IMovieProps } from "../hooks/useWishlist/types"

import api from "../services/api"

import * as Styles from "../styles/pages/Search"

export function Search() {
  const [keyword] = useSearchParams()
  const { handleAddOrRemoveMovieOnWishlist, isMovieInWishlist } = useWishlist()

  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState<IMovieProps[]>([])

  useEffect(() => {
    if (keyword.get('keyword')) {
      setIsLoading(true)

      api
        .get("/search/movie", { params: { query: keyword.get('keyword'), include_adult: false } })
        .then((response) => {
          
          setMovies(response.data.results)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [keyword.get('keyword')])

  return (
    <Styles.Container>

      <section id="movies">
        <h3>
          {movies.length} resultado{movies.length !== 1 && "s"} encontrado
          {movies.length !== 1 && "s"}
        </h3>

        <div className="cards">
          {isLoading ? (
            <Loading />
          ) : (
            movies.map((movie) => {
              return (
                <MovieCard
                  key={movie.id}
                  movie={{
                    id: movie.id,
                    poster_path: movie.poster_path,
                    title: movie.title,
                    overview: movie.overview,
                    vote_average: movie.vote_average,
                    vote_count: movie.vote_count,
                  }}
                  handleAddMovieOnWishlist={handleAddOrRemoveMovieOnWishlist}
                  inWishlist={isMovieInWishlist(movie.id)}
                  className="card"
                />
              )
            })
          )}
        </div>
      </section>
    </Styles.Container>
  )
}
