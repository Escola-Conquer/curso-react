import styled from "styled-components"

export const Container = styled.div`
  min-height: calc(100vh - 70px); //70px from header

  margin-top: 70px;
  padding: 2rem 4.5rem;

  #search-bar {
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      align-items: center;
      justify-content: center;

      input {
        background: ${({ theme }) => theme.colors.white};

        padding: calc(0.5rem - 2px) 1rem;

        border: none;
        border-radius: 4px 0 0 4px;
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
