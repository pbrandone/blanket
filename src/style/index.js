import { injectGlobal } from 'styled-components';
import reset from './reset';

const defaultStyles = () => injectGlobal`
  ${reset}

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: -apple-system,
                 BlinkMacSystemFont,
                 "Segoe UI",
                 Roboto,
                 Helvetica,
                 Arial,
                 sans-serif,
                 "Apple Color Emoji",  /* Emojis*/
                 "Segoe UI Emoji", /* Emojis*/
                 "Segoe UI Symbol"; /* Emojis*/
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }

  input, select, textarea, button {
    font-family: inherit;
  }
`;

defaultStyles();
