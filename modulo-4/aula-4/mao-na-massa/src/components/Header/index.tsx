import { FaBars, FaHome } from "react-icons/fa"
import Logo from "../../assets/logo.png"
import * as Styles from "./styles"

export function Header() {
  return (
    <Styles.Container>
      <div>
          <img
            src={Logo}
            alt="Logo de Filmz. Botão de play ao lado do texto 'Filmz'"
          />

          <FaHome />
          Home
          <FaBars />
          Minha lista
      </div>

      <form className="search-wrapper">
        <input
          type="text"
          placeholder="Pesquise um filme"
        />
      </form>
    </Styles.Container>
  )
}
