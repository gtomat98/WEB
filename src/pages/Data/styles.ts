import styled from 'styled-components'

export const MainContainer = styled.main`
  max-width: 1200px;
  margin: 10rem auto;
  width: 90%;
  display: flex;
  align-items: center;

  a {
    color: ${(props) => props.theme.white};

    svg {
      transition: color 0.5s;
      &:hover {
        color: ${(props) => props.theme.purple};
      }
    }
  }
`

export const DivContainer = styled.div`
  margin: 0 auto 0 auto;
  display: block;
  max-width: 1200px;
  width: 80%;

  footer {
    background-color: ${(props) => props.theme['gray-inputs']};
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

    font-weight: bold;
    color: ${(props) => props.theme['gray-title']};

    padding: 1.5%;
    display: flex;
    justify-content: center;
  }
`

export const FormContainer = styled.form`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  background-color: ${(props) => props.theme['gray-cards']};

  padding: 5%;
  display: block;

  footer {
    justify-self: end;
    background-color: ${(props) => props.theme['gray-inputs']};
  }
`
export const Divider = styled.div`
  width: 100%;
  input {
    width: 100%;
    display: block;
    padding: 5%;
    padding-left: 5%;
    margin-bottom: 5%;

    &::placeholder {
      font-weight: bold;
    }
  }
`

export const Inputs = styled.div`
  margin: auto;
  width: 100%;
  gap: 5%;
  display: flex;
  justify-content: space-between;
`
