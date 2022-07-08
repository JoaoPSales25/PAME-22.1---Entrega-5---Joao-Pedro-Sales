import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0; 
    color: ${props => props.theme.colors.text};
    box-sizing: border-box;
    
  
  }
  body{
    background-color: ${props => props.theme.colors.primary};
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    
    }
`;