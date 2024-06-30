import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Cammron';
  src: url('./fonts/Cammron-Regular.woff2');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Cammron';
  src: url('./fonts/Cammron-Light.woff2');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'Cammron';
  src: url('./fonts/Cammron-Bold.woff2');
  font-weight: 700;
  font-style: normal;
}

// Reset CSS 
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
    font-family: 'Cammron', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// Estilo global para inputs, selects y textareas 
input, select, textarea, button, option {
  font-family: 'Cammron', sans-serif;
  color: black;
  border: 1px solid black;
  background: none;
  &::placeholder {
    font-family: 'Cammron', sans-serif;
  }
}

label {
  font-family: 'Cammron', sans-serif;
  font-weight: normal;
}

//Estilo específico para botones 
button {
  font-family: 'Cammron', sans-serif;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: black;
}

// Estilo específico para select 
select {
  -webkit-appearance: none; 
  -moz-appearance: none;
  appearance: none;
}

select:focus {
  border-color: black;
  outline: none;
  background-color: white; 
}

select option:checked {
  background-color: white;
  color: black;
}


`;
