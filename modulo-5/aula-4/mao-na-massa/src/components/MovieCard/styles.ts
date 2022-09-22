import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  background: ${({ theme }) => theme.colors.grey[700]};

  height: 290px;
  max-height: 290px;

  border-radius: 8px;

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

  .info-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    height: 100%;

    padding: 1rem;

    h4 {
      font-size: 2rem;
      font-weight: 700;
    }

    footer {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .actions {
        display: flex;
        align-items: center;
        justify-content: center;

        button:first-child {
          margin-right: 0.5rem;

          svg {
            margin-left: 0.5rem;
          }
        }
      }
    }
  }
`
