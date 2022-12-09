import HELP from '../../assets/Logo/Group 28.svg'
import { Header } from '../../components/Header'
import {
  BackgroundGradient,
  Lei,
  Leis,
  MainContainer,
  SectionContainer,
  SectionContainerFinal,
  IMG,
} from './styles'
import { NavLink } from 'react-router-dom'
import { Footer } from '../../components/Footer'

export function Home() {
  return (
    <>
      <Header />
      <MainContainer>
        <SectionContainer>
          <strong>
            Saiba sobre os <span> direitos </span> de seu futuro
            <span> PET </span>
          </strong>
          <Leis>
            <Lei></Lei>
            <Lei></Lei>
            <Lei></Lei>
          </Leis>
          <NavLink to="/SignUp">ADOTE SEU PET</NavLink>
        </SectionContainer>
        <BackgroundGradient>
          <hr />
          <SectionContainerFinal>
            <IMG src={HELP} alt=""></IMG>
          </SectionContainerFinal>
        </BackgroundGradient>
      </MainContainer>
      <Footer></Footer>
    </>
  )
}
