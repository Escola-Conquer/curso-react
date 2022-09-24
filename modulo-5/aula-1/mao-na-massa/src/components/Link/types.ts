import { ReactNode } from "react"
import { NavLinkProps } from "react-router-dom"

export interface ILinkProps extends NavLinkProps {
  children: ReactNode
}
