import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
 
import api from "../services/api"
 
import * as Styles from "../styles/pages/Search"

export function Search() {
    const [keyword] = useSearchParams()
    
    useEffect(() => {
      if (keyword.get('keyword')) {
    
        api
          .get("/search/movie", { params: { query: keyword.get('keyword'), include_adult: false } })
      }
    }, [keyword.get('keyword')])

    return (
        <Styles.Container>
 
            <section id="movies">
            <h3>
                10 resultados encontrados
            </h3>
            <div className="cards">
            </div>
            </section>
        </Styles.Container>

    )

}