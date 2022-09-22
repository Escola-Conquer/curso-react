import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonVariants {
  Primary = 'primery',
  Secondary = 'secondary'
}

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariants
}

export interface IContainerProps {
  variant?: ButtonVariants
}