import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        font-family: Roboto, sans-serif;

        
    }

    input, select {
        &:focus {
         outline: 2px solid ${(props) => props.theme.purple};
        }

        border: none;
        background: ${(props) => props.theme['gray-inputs']};
        border-radius: 8px;
    }

    body {
        font-family: Roboto, sans-serif;
        background-color: ${(props) => props.theme['gray-background']};
    }

    body::-webkit-scrollbar {
        width: 6px;               /* width of the entire scrollbar */
    }

    body::-webkit-scrollbar-track {
        background: ${(props) =>
          props.theme['gray-inputs']};        /* color of the tracking area */
    }

    body::-webkit-scrollbar-thumb {
        background-color: ${(props) =>
          props.theme['gray-input-font']};;    /* color of the scroll thumb */
    }
    

`
