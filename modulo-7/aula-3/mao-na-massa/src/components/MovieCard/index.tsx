import { useNavigate } from "react-router-dom"
import { FiCameraOff, FiCheck, FiPlus } from "react-icons/fi"

import { Button } from "../Button"

import { ButtonVariants } from "../Button/types"
import { IMovieCardProps } from "./types"

import * as Styles from "./styles"

export function MovieCard(props: IMovieCardProps) {
  const navigate = useNavigate()

  return (
    <Styles.Container {...props}>
      <div className="movie-poster-wrapper">
        {props.movie.poster_path ? (
          <img
            src={`${import.meta.env.VITE_THE_MOVIE_DB_IMAGES_URL}${
              props.movie.poster_path
            }`}
            alt={`${props.movie.title} film cover`}
          />
        ) : (
          <>
            <FiCameraOff />
            <p>Capa indisponível</p>
          </>
        )}
      </div>

      <div className="info-wrapper">
        <div>
          <h4>{props.movie.title}</h4>
          <p>{props.movie.overview}</p>
        </div>

        <footer>
          <div className="rating">
            <span>Avaliação geral: </span>
            <strong>{props.movie.vote_average.toFixed(1)}</strong>
          </div>

          <div className="actions">
            <Button
              type="button"
              variant={ButtonVariants.Secondary}
              onClick={() => props.handleAddMovieOnWishlist(props.movie)}
            >
              {props.inWishlist ? (
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
            <Button
              type="button"
              onClick={() => navigate(`/movie/${props.movie.id}`)}
            >
              Ver mais
            </Button>
          </div>
        </footer>
      </div>
    </Styles.Container>
  )
}
