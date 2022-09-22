import { ILinkProps } from "./types"

import * as Styles from "./styles"

export function Link(props: ILinkProps) {
  return (
    <Styles.Container
      className={({ isActive }) =>
        `${props.className} ${isActive ? "active" : ""}`
      }
      {...props}
    >
      {props.children}
    </Styles.Container>
  )
}
