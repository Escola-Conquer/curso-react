import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Container = styled(NavLink)`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.grey[400]};
  text-decoration: none;

  margin-right: 1rem;

  transition: color 0.2s;

  &.active {
    cursor: default;
  }

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`
