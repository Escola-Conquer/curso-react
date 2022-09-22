import { useEffect, useState } from "react"
import * as Styles from "../styles/pages/Home";
import api from "../services/api";

import { ITopTenWeeklyMovies } from "../interface/Home"
 
export function Home() {

  const [top10WeeklyMovies, setTop10WeeklyMovies] = useState<
   ITopTenWeeklyMovies[]
 >([])

  useEffect(() => {
    api
      .get("/trending/movie/week")
      .then((response) => {
        setTop10WeeklyMovies(
          response.data.results.slice(0, 10).map((movie: any) => movie)
        )
      })
  }, [])
 


 return (
   <Styles.Container>
     <section id="presentation">
       <div className="text-wrapper">
         <h2>Bem vindo ao Filmz</h2>
         <h1>O lugar perfeito para ter sempre um filme na manga!</h1>
 
         <p>
           Veja o que as pessoas estão curtindo com a seleção do top 10 da
           semana e pesquise por filmes para saber um pouco mais sobre eles!
         </p>
       </div>
     </section>
 
     <section id="movies">
       <h3>Top 10 da semana</h3>
 
       <div className="cards">
       </div>
     </section>
   </Styles.Container>
 )
}
