import styled from 'styled-components'

export const SectionContainer = styled.section`
  max-width: 1200px;
  width: 80%;

  border-bottom: 10px solid ${(props) => props.theme.purple};
  border-radius: 8px;
  display: flex;
  margin: 5rem auto 3rem auto;

  img {
    border-top-right-radius: 8px;
    height: max-content;
    width: 57.053571428571%;
  }
`

export const FormContainer = styled.form`
  padding: 10% 5% 0 5%;
  display: block;
  align-items: center;
  width: 42.946428571429%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background: rgb(41, 41, 41);
  background: linear-gradient(
    180deg,
    rgba(41, 41, 41, 1) 0%,
    rgba(41, 41, 41, 0) 100%
  );

  strong {
    width: fit-content;
    margin: auto;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-title']};
    display: block;
    text-align: center;

    span {
      color: ${(props) => props.theme.green};
    }

    hr {
      border-radius: 8px;
      border: 2px solid ${(props) => props.theme['purple-dark']};
      margin-bottom: 40%;
    }
  }

  input {
    width: 100%;
    padding: 5% 0;
    padding-left: 5%;
    display: block;
    margin: auto;

    color: ${(props) => props.theme['gray-text']};

    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme['gray-inputs']};

    margin-bottom: 5%;

    &::placeholder {
      font-weight: bold;
      color: ${(props) => props.theme['gray-input-font']};
    }
  }

  button {
    border: none;
    display: flex;
    width: 80%;

    justify-content: center;

    margin: auto;

    border-radius: 8px;

    padding: 5%;
    padding-left: 5%;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['gray-title']};
    font-weight: bold;
    margin-top: 30%;
    margin-bottom: 10%;

    transition: all 0.5s;

    &:hover {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.purple};
    }
  }
`
