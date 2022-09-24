import styled from "styled-components"

import { ButtonVariants, IContainerProps } from "./types"

export const Container = styled.button<IContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  color: ${({ theme }) => theme.colors.white};

  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.primary[500]};
  
  padding: calc(0.5rem - 4px) 1rem;
  
  transition: background-color 0.2s, border-color 0.2s;

  &:disabled {
    cursor: not-allowed;
  }
  
  &.${ButtonVariants.Primary} {
    background: ${({ theme }) => theme.colors.primary[500]};

    &:hover {
      background: ${({ theme }) => theme.colors.primary[300]};
      border-color: ${({ theme }) => theme.colors.primary[300]};
    }
  }
  &.${ButtonVariants.Secondary} {
    background: transparent;

    &:hover {
      background: ${({ theme }) => theme.colors.primary[500]};
      border-color: ${({ theme }) => theme.colors.primary[500]};
    }
  }
`
