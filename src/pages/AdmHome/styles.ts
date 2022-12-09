import styled from 'styled-components'

export const MainContainer = styled.main`
  max-width: 1200px;
  width: 80%;

  display: block;

  margin: 10rem auto;
`

export const SectionContainer = styled.section`
  display: block;
  margin: auto;
  strong {
    display: block;
    font-size: 1.8rem;
    text-align: center;

    color: ${(props) => props.theme['gray-title']};
  }
  margin-bottom: 15rem;
`

const SPAN_COLORS = {
  green: 'green',
  purple: 'purple',
} as const

interface SpanProps {
  COLORS: keyof typeof SPAN_COLORS
}

export const SpanWithColor = styled.span<SpanProps>`
  color: ${(props) => props.theme[SPAN_COLORS[props.COLORS]]};
`

export const ItemsContainer = styled.div`
  margin-top: 10%;
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Item = styled.div`
  opacity: 0.9;
  height: fit-content;
  display: block;
  width: 28.88888888889%;
  padding-bottom: 0%;
  background-color: ${(props) => props.theme['gray-cards']};

  border-radius: 8px;

  img {
    margin: auto;
    display: block;
    align-items: center;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;

    transition: height 0.5s;
    overflow: hidden;
    height: 200px;
  }

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

  transition: all 0.5s;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
    box-shadow: rgba(100, 100, 1000, 0.09) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    img {
      height: 250px;
    }
  }
`

export const InfoArea = styled.div`
  margin-top: 2rem;
  display: block;

  p {
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
    width: 80%;

    margin: auto;

    border-radius: 8px;

    padding: 3%;
    background-color: ${(props) => props.theme['gray-inputs']};
    margin-bottom: 5%;
  }

  a {
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
    margin-top: 10%;
    margin-bottom: 10%;

    transition: all 0.5s;

    &:hover {
      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme.purple};
    }
  }
`
