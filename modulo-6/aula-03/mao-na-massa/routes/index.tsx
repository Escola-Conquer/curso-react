import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components/Header"

import { Home } from "../pages/Home"
import { WishList } from "../pages/WishList"
import { Movie } from "../pages/Movie"
import { Search } from "../pages/Search"

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/movie/:id" element={<Movie/>} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </BrowserRouter>
  )
}
