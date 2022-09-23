import styled from "styled-components"

import Filmz from "../../assets/films.png"

export const Container = styled.main`
  width: 100%;
  max-width: 100vw;

  #presentation {
    position: relative;

    width: 100%;
    height: 400px;

    height: 100%;
    min-height: 600px;
    min-height: 100vh;
    
    background-image: url(${Filmz});
    background-repeat: no-repeat;
    background-size: cover;

    .text-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      padding: 10rem 0 2rem;
      margin-left: 4rem;

      max-width: 860px;

      h2 {
        font-size: 2rem;
      }

      h1 {
        font-size: 4rem;
        line-height: 4.5rem;

        margin-top: 1rem;
      }

      p {
        font-size: 1.25rem;
        margin-top: 3rem;
        font-weight: 500;
      }
    }
  }

  #movies {
    padding: 2rem 4.5rem;

    h3 {
      font-size: 2rem;
      font-weight: 700;
    }

    .cards {
      padding: 2rem 0;

      .card {
        margin-top: 1rem;

        &:first-child {
          margin-top: 0;
        }
      }
    }
  }
`
