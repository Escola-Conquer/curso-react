import { createContext} from "react";
import {
  IWishlistContextData,
  IMovieProps,
} from "./types"

export const WishlistContext = createContext({} as IWishlistContextData)