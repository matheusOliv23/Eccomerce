import { lighten } from "polished";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
  
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: black;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
       background-color: black;
    }
  }
  body, html {
    width: 100%;
    height: 100%;
   
  }
  body {
    font: 400 1rem 'Montserrat', sans-serif;  
  }
  img {
    width: 100%;
    max-width: 100%;
  }
  ul {
    list-style: none;
  }
  button {
    cursor: pointer;   
  }
  a {
    text-decoration: none;
    text-decoration-line: none;
  }
  .container {
    width: 100%;
    margin: 0 auto;   
    
    @media(min-width:2200px) {
      margin: 0 auto;
      max-width: 90rem;
    }  
    
  }
`;
