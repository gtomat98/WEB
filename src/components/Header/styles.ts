import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  height: 6.25rem;
  width: 100%;
  background-color: ${(props) => props.theme['gray-cards']};
`

export const SectionContainer = styled.section`
  max-width: 1440px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.5625rem;

  a {
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme['purple-dark']};

    transition: all 0.5s;

    &:hover {
      color: ${(props) => props.theme.purple};
      background-color: ${(props) => props.theme['gray-background']};
    }
  }
`
