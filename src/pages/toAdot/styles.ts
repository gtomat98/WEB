import styled from 'styled-components'

export const MainContainer = styled.main`
  margin: auto;
  width: 80%;
  max-width: 1200px;

  padding: 5%;

  display: flex;
`

export const DogData = styled.aside`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 50%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.5298494397759104) 0%,
    rgba(61, 92, 255, 1) 100%
  );

  span {
    width: fit-content;
    margin: auto;
    padding: 5%;
    background-color: ${(props) => props.theme['gray-background']};
    border: 2px solid ${(props) => props.theme.purple};
    border-top: none;

    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;

    font-size: 1.5rem;

    font-weight: bold;
    color: ${(props) => props.theme['gray-title']};

    svg {
      color: ${(props) => props.theme.purple};
    }
  }

  img {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`

export const InfoArea = styled.div`
  margin-top: 2rem;
  display: block;

  div {
    width: 90%;
    margin: auto;
    display: flex;
    gap: 0.5rem;

    p {
      align-items: center;
      &::before {
        content: '\ ';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: ${(props) => props.theme.purple};
        display: inline-block;
        margin: 0 0.5rem;
      }
      color: ${(props) => props.theme['gray-title']};

      padding: 3%;
      width: 100%;
      font-size: small;
      border-radius: 8px;
      background-color: ${(props) => props.theme['gray-inputs']};
    }

    margin-bottom: 1rem;
  }
`

export const FormContainer = styled.form`
  width: 50%;
  padding: 5%;
  background: ${(props) => props.theme['gray-cards']};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  align-items: center;

  display: block;

  input,
  select {
    color: ${(props) => props.theme['gray-input-font']};
    font-size: 1rem;
    margin: 0rem auto 2rem auto;
    width: 80%;
    padding: 3%;
    display: block;
  }

  select {
    -webkit-appearance: none;

    option {
      border-radius: 8px;
      background-color: ${(props) => props.theme['gray-inputs']};
    }

    margin-bottom: 20%;
  }

  button {
    border: none;
    display: flex;
    width: 40%;
    justify-content: center;

    margin: auto;

    border-radius: 8px;

    padding: 5%;
    padding-left: 5%;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['gray-title']};
    font-weight: bold;
    margin-top: 10%;
    margin-bottom: 10%;

    transition: all 0.5s;

    &:hover {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.purple};
    }
  }
`
