import { createGlobalStyle } from 'styled-components'

const Global = createGlobalStyle`
  @font-face {
    src: url(/fonts/whitney.woff);
    font-family: Whitney;
    font-style: normal;
    font-weight: normal
  }

  *,
  *::before,
  *::after {
    margin: 0;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    font-family: Whitney, Helvetica Neue, Helvetica,Arial, sans-serif;
  }

  body, html, #root {
    width: 100vw;
    min-height: 100%;
    height: 100%;

    /* Theme switching */
    background-color: ${({ theme }: any) => theme.background};
    color: ${({ theme }: any) => theme.normalText}
  }

  :root {
    --elevation-low: 0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);
    --interactive-normal: #b9bbbe
  }
`

export default Global
