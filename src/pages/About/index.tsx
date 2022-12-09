/* eslint-disable react/no-unescaped-entities */
import { Header } from '../../components/Header'
import { MainContainer, Title } from './styles'
import Matheus from '../../assets/About/Matheus.jpg'
import Laura from '../../assets/About/Laura.jpeg'

export function About() {
  return (
    <>
      <Header></Header>
      <MainContainer>
        <Title>Sobre Nós</Title>
        <div>
          <section>
            <img src={Matheus} alt=""></img>
            <strong>Matheus D'Afonseca e Silva</strong>
            <p>18 anos</p>
            <p>Estudante de Infórmatica</p>
            <p>Apaixonado por dogs</p>
            <p>Muito forte</p>
          </section>
          <section>
            <img src={Laura} alt=""></img>
            <strong>Laura Fernanda Da Silva</strong>
            <p>17 anos</p>
            <p>Estudante de Infórmatica</p>
            <p>LAura</p>
            <p>lauRA</p>
          </section>
        </div>
      </MainContainer>
    </>
  )
}
