import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { FiCameraOff, FiCheck, FiLink, FiPlus } from "react-icons/fi"

import { Button } from "../components/Button"
import { ButtonVariants } from "../components/Button/types"
import { Loading } from "../components/Loading"

import { useWishlist } from "../hooks/useWishlist"

import api from "../services/api"

import { IMovieRequestProps } from "../interface/Movie"

import * as Styles from "../styles/pages/Movie"

export function Movie() {
  const { id } = useParams()
  const { isMovieInWishlist, handleAddOrRemoveMovieOnWishlist } = useWishlist()

  const currentUrl = window.location.href

  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState<IMovieRequestProps>()
  const [isLinkCopiedToClipboard, setIsLinkCopiedToClipboard] = useState(false)

  const movieYearRelease = movie && new Date(movie.release_date).getFullYear()
  const movieHours = movie && Number(Math.trunc(movie.runtime / 60).toFixed(0))
  const movieMinutes =
    movie && movieHours && (movie.runtime - movieHours * 60).toFixed(0)

  function handleCopyLinkToClipboard() {
    setIsLinkCopiedToClipboard(true)

    navigator.clipboard.writeText(currentUrl)
  }

  useEffect(() => {
    api
      .get<IMovieRequestProps>(`/movie/${id}`)
      .then((response) => {
        setMovie(response.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    if (isLinkCopiedToClipboard) {
      setTimeout(() => {
        setIsLinkCopiedToClipboard(false)
      }, 2500)
    }
  }, [isLinkCopiedToClipboard])

  return (
    <Styles.Container>
      {isLoading ? (
        <div className="loading-wrapper">
          <Loading />
        </div>
      ) : (
        <section id="presentation">
          <div className="movie-poster-wrapper">
            {movie?.poster_path ? (
              <img
                src={`${import.meta.env.VITE_THE_MOVIE_DB_IMAGES_URL}${
                  movie?.poster_path
                }`}
                alt={`Capa do filme ${movie?.title}`}
              />
            ) : (
              <>
                <FiCameraOff />
                <p>Capa indisponível</p>
              </>
            )}
          </div>

          <div className="about">
            <div>
              <h1>{movie?.title}</h1>

              <h4>
                {movie?.genres
                  .map((genre) => genre.name)
                  .toString()
                  .replaceAll(",", ", ")}
                <span>•</span>
                {movieYearRelease}
                <span>•</span>
                {`${movieHours}h `}
                {movieMinutes}m
              </h4>

              <p>{movie?.overview}</p>
            </div>

            <footer>
              <p>
                Avaliação geral: <span>{movie?.vote_average.toFixed(1)}</span>
              </p>

              <div className="actions">
                <Button
                  variant={ButtonVariants.Secondary}
                  onClick={handleCopyLinkToClipboard}
                  disabled={isLinkCopiedToClipboard}
                >
                  {isLinkCopiedToClipboard ? (
                    <>
                      Link copiado
                      <FiCheck />
                    </>
                  ) : (
                    <>
                      Copiar link
                      <FiLink />
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant={ButtonVariants.Secondary}
                  onClick={() =>
                    movie && handleAddOrRemoveMovieOnWishlist(movie)
                  }
                >
                  {movie && isMovieInWishlist(movie.id) ? (
                    <>
                      Em sua lista
                      <FiCheck />
                    </>
                  ) : (
                    <>
                      Adicionar à minha lista
                      <FiPlus />
                    </>
                  )}
                </Button>
              </div>
            </footer>
          </div>
        </section>
      )}
    </Styles.Container>
  )
}
