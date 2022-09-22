import { useNavigate } from "react-router-dom"
import { FiCameraOff, FiCheck, FiPlus } from "react-icons/fi"
 
import { Button } from "../Button"
 
import { ButtonVariants } from "../Button/types"
 
import * as Styles from "./styles"

export function MovieCard() {
    const navigate = useNavigate()
    
    return (
      <Styles.Container>
        <div className="movie-poster-wrapper">
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/7/78/Shrek_2_Poster.jpg"
              alt="Shrek 2 film cover"
            />
        </div>
    
        <div className="info-wrapper">
          <div>
            <h4>Shrek 2</h4>
            <p>Shrek e Fiona acabaram de voltar da lua de mel e vivem felizes em sua casa no pântano. O casal recebe um convite dos pais da princesa, que querem conhecer o novo genro, para um jantar no castelo. Eles ficaram sabendo que Fiona havia se casado com o seu verdadeiro amor, mas o que eles ainda não sabem é que este amor é um ogro mal-educado de mais de 300 quilos, que conta com um burro falante como melhor amigo.</p>
          </div>
          <footer>
         <div className="rating">
           <span>Avaliação geral: </span>
           <strong>8.9</strong>
         </div>
 
         <div className="actions">
           <Button
             type="button"
             variant={ButtonVariants.Secondary}
           >
             Adicionar à minha lista
             <FiPlus />
           </Button>
           <Button
             type="button"
             onClick={() => navigate(`/movie`)}
           >
             Ver mais
           </Button>
         </div>
       </footer>
     </div>
   </Styles.Container>
 )
}
