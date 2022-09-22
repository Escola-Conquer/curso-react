import { FaBars, FaHome } from "react-icons/fa"
import Logo from "../../assets/logo.png"
import * as Styles from "./styles";
import { Link } from "../Link";
import { Button } from "../Button";

export function Header() {
    return (
      <Styles.Container>
        <Link to="/">
         <img
           src={Logo}
           alt="Logo de Filmz. Botão de play ao lado do texto 'Filmz'"
         />
       </Link>
 
       <Link to="/">
         <FaHome />
         Home
       </Link>
       <Link to="/wishlist">
         <FaBars />
         Minha lista
       </Link>
        <form className="search-wrapper">
          <input
            type="text"
            placeholder="Pesquise um filme"
          />
          <Button style={{ borderRadius: "0 4px 4px 0" }} type="submit">Pesquisar</Button>
        </form>
      </Styles.Container>
    )
   }
   