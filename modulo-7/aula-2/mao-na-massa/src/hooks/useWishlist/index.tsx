import { createContext, useState} from "react";
import {
  IWishlistContextData,
  IMovieProps,
  IWishlistProviderprops,
} from "./types"

export const WishlistContext = createContext({} as IWishlistContextData)

export function WishlistProvider(props:IWishlistProviderprops): JSX.Element {
  const [wishlist, setWishlist] = useState<IMovieProps[]>([])

  function handleAddOrRemoveMovieOnWishlist(movie: IMovieProps) {
    if (wishlist.find((wishlistFilm) => wishlistFilm.id === movie.id)) {
      const filteredWishlist = wishlist.filter(
        (wishlistFilm) => wishlistFilm.id !== movie.id
      )
  
      setWishlist(filteredWishlist)
      localStorage.setItem("wishlist", JSON.stringify(filteredWishlist))
  
      return
    }
  
    setWishlist((prevState) => [...prevState, movie])
    localStorage.setItem("wishlist", JSON.stringify([...wishlist, movie]))
  }
 

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,handleAddOrRemoveMovieOnWishlist
      }}
    >
      {props.children}
    </WishlistContext.Provider>
  )
 }
 