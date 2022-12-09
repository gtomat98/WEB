import styled from 'styled-components'

export const MainContainer = styled.main`
  margin-top: 6.25rem;
  width: 100%;
`

export const SectionContainer = styled.section`
  max-width: 1440px;
  width: 80%;
  display: block;
  margin: auto;

  strong {
    margin-bottom: 6.25rem;
    display: block;
    text-align: center;
    line-height: 130%;
    color: ${(props) => props.theme['gray-title']};

    font-size: 2rem;

    span:first-child {
      color: ${(props) => props.theme.green};
    }
    span:last-child {
      color: ${(props) => props.theme.purple};
    }
  }

  a {
    font-weight: bold;
    margin: auto;
    width: fit-content;
    color: ${(props) => props.theme.white};
    border: 2px solid ${(props) => props.theme.purple};
    border-radius: 8px;
    padding: 3% 6%;
    background-color: ${(props) => props.theme['gray-background']};
    margin-top: 17rem;
    margin-bottom: 11.5rem;
    display: flex;
    justify-content: center;

    transition: background 0.3s;

    &:hover {
      background-color: ${(props) => props.theme.purple};
    }
  }
`

export const Leis = styled.section`
  padding: 5%;
  width: 100%;
  border-radius: 8px;
  padding-bottom: 5%;
  border-top: 3px solid ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme['gray-cards']};

  display: flex;
  gap: 5%;
`

export const Lei = styled.div`
  border-radius: 8px;
  width: 30%;
  padding-bottom: 45%;
  background-color: ${(props) => props.theme['gray-inputs']};
`

export const BackgroundGradient = styled.div`
  padding-bottom: 20%;
  height: fit-content;
  width: 100%;
  background-image: linear-gradient(
    180deg,
    #292929 0,
    #121214 25%,
    #121214 50%,
    #121214 75%,
    #121214 100%
  );

  hr {
    margin-bottom: 11.5rem;
  }
`

export const SectionContainerFinal = styled.section`
  max-width: 1440px;
  width: 80%;
  display: block;
  margin: auto;

  strong {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 6.25rem;
    text-align: center;
    line-height: 130%;
    color: ${(props) => props.theme['gray-title']};

    span:first-child {
      color: ${(props) => props.theme.green};
    }
    span:last-child {
      color: ${(props) => props.theme.purple};
    }
  }
`

export const IMG = styled.img`
  display: block;
  margin: auto;
  width: 80%;
`
