
import styled, { css } from 'styled-components'

export const NextPage = styled.button`
    ${({ theme }) => css`
        background-color: white;
        border: ${theme.spacings.xsmall} double ${theme.colors.red};
        box-shadow: 0px ${theme.spacings.xxsmall} ${theme.spacings.xxlarge} rgb(0 0 0 / 10%);
        color: ${theme.colors.red};
        cursor: pointer;
        font-size: ${theme.spacings.small};
        font-weight: bold;
        margin: 2em auto;
        max-width: 200px;
        padding: ${theme.spacings.xsmall};
    `}
`