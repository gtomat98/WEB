import Logo from '../../assets/Logo/Logo.svg'
import { HeaderContainer, Navigation, SectionContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { UserCircle, Info } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <SectionContainer>
        <NavLink to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <Navigation>
          <NavLink to="/About">
            <Info size={40} weight="fill" />
          </NavLink>
          <NavLink to="/">
            <UserCircle size={40} weight="fill" />
          </NavLink>
          <NavLink to="/Adicionar">
            <UserCircle size={40} weight="fill" />
          </NavLink>
        </Navigation>
      </SectionContainer>
    </HeaderContainer>
  )
}
