import styled from 'styled-components'

export const MainContainer = styled.main`
  margin: 5rem auto;
  width: 80%;
  max-width: 1200px;

  border-radius: 8px;

  display: block;

  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  section {
    padding: 5%;
    background: ${(props) => props.theme['gray-cards']};
    width: 40%;
    max-width: 400px;
    display: block;
    margin: auto;
    border-radius: 8px;
    img {
      margin: auto;
      display: block;
      border: 3px solid ${(props) => props.theme['purple-dark']};
      border-radius: 8px;
      width: 100%;
      height: 30vh;
      object-fit: cover;
      margin-bottom: 1rem;
    }

    strong {
      color: ${(props) => props.theme['green-dark']};
      text-align: center;
      display: block;
      margin: auto;
      margin-bottom: 2rem;
    }

    p {
      padding: 3% 1%;
      border-radius: 8px;
      background: ${(props) => props.theme['gray-inputs']};
      color: ${(props) => props.theme['gray-input-font']};
      margin: 1rem 0;
      &::before {
        content: '\ ';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${(props) => props.theme.purple};
        display: inline-block;
        margin: 0 0.5rem;
      }
    }
  }
`

export const Title = styled.p`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;

  color: ${(props) => props.theme.white}; ;
`
