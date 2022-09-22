import { HTMLAttributes } from "react"

import { IMovieProps } from "../../hooks/useWishlist/types"

export interface IMovieCardProps extends HTMLAttributes<HTMLDivElement> {
  movie: IMovieProps
  inWishlist: boolean
  handleAddMovieOnWishlist: (movie: IMovieProps) => void
}
