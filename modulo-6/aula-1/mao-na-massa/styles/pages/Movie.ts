import styled from "styled-components"

export const Container = styled.div`
  margin-top: 70px;
  padding: 4rem 4.5rem 2rem;

  #presentation {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    width: 100%;
    max-width: 1200px;
    height: 290px;
    margin: 0 auto;

    .movie-poster-wrapper {
      width: 100%;
      max-width: 190px;
      height: 290px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

        border-radius: 8px 0 0 8px;
      }

      p {
        margin-top: 0.5rem;
      }
    }

    img {
      width: 100%;
      max-width: 400px;
    }

    .about {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-between;

      height: 100%;

      margin-left: 2rem;

      > div {
        h1 {
          font-size: 2.5rem;
          font-weight: 700;
        }

        h4 {
          span {
            margin: 0 0.5rem;
          }
        }

        p {
          margin-top: 2rem;
        }
      }

      footer {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        margin-bottom: 0.25rem;

        span {
          font-weight: 700;
        }

        .actions {
          display: flex;
          align-items: center;
          justify-content: center;

          button:first-child {
            margin-right: 1rem;
          }
        }
      }
    }
  }
`
