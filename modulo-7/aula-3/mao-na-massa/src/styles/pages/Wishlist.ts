import styled from "styled-components"

export const Container = styled.div`
  min-height: calc(100vh - 70px); //70px from header

  margin-top: 70px;
  padding: 2rem 4.5rem;

  .cards {
    padding: 2rem 0;

    .card {
      margin-top: 1rem;

      &:first-child {
        margin-top: 0;
      }
    }
  }
`
