import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components/Header";
import { Search } from "../pages/Search";
 
import { Home } from "../pages/Home"
 
export function AppRoutes() {
 return (
   <BrowserRouter>
     <Header />
 
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/search" element={<Search/>} />
     </Routes>
   </BrowserRouter>
 )
}
