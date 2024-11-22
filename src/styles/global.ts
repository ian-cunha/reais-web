import { createGlobalStyle } from 'styled-components';

import Bold from '../fonts/Montserrat-Bold.ttf';
import Italic from '../fonts/Montserrat-Italic.ttf';
import Light from '../fonts/Montserrat-Light.ttf';
import Medium from '../fonts/Montserrat-Medium.ttf';
import Regular from '../fonts/Montserrat-Regular.ttf';
import SemiBold from '../fonts/Montserrat-SemiBold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${Regular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Bold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Italic}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Light}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${Medium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url(${SemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }
`;

export default GlobalStyle;