import Dog from '../../assets/Logo/Dog.svg'
import Dog2 from '../../assets/Logo/Dog2.jpg'
import Dog3 from '../../assets/Logo/Dog3.jpg'
import Dog4 from '../../assets/Logo/Dog4.jpg'
import Dog5 from '../../assets/Logo/Dog5.jpg'
import Dog6 from '../../assets/Logo/Dog6.jpg'

import Cat from '../../assets/Logo/Cat.jpg'
import Cat2 from '../../assets/Logo/Cat2.jpg'
import Cat3 from '../../assets/Logo/Cat3.jpg'

import { Header } from '../../components/Header'
import { PawPrint } from 'phosphor-react'
import {
  InfoArea,
  Item,
  ItemsContainer,
  MainContainer,
  SectionContainer,
  SpanWithColor,
} from './styles'
import { NavLink } from 'react-router-dom'
import { Footer } from '../../components/Footer'
import { useEffect } from 'react'

export function AdmHome() {
  function handleAdotVariables() {}
  useEffect(() => {
    fetch('http://localhost:5000/dogs', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  })
  return (
    <>
      <Header></Header>
      <MainContainer>
        <SectionContainer>
          <strong>
            Pedidos de <SpanWithColor COLORS="green">Adoção!</SpanWithColor>
          </strong>
          <ItemsContainer>
            <Item>
              <div>
                <img src={Dog} alt=""></img>
              </div>

              <span>
                <PawPrint size={30} weight="fill" />
                BOB
                <PawPrint size={30} weight="fill" />
              </span>
              <InfoArea>
                <p>Idade: 5 anos.</p>
                <p>Sexo: masculino.</p>
                <NavLink to="/Adot" onClick={handleAdotVariables}>
                  VER MAIS
                </NavLink>
              </InfoArea>
            </Item>
            <Item>
              <img src={Dog2} alt=""></img>
              <span>
                <PawPrint size={30} weight="fill" />
                LICA
                <PawPrint size={30} weight="fill" />
              </span>
              <InfoArea>
                <p>Idade: 5 anos.</p>
                <p>Sexo: masculino.</p>
                <NavLink to="/Adot">VER MAIS</NavLink>
              </InfoArea>
            </Item>
            <Item>
              <img src={Dog3} alt=""></img>
              <span>
                <PawPrint size={30} weight="fill" />
                PINGO
                <PawPrint size={30} weight="fill" />
              </span>
              <InfoArea>
                <p>Idade: 5 anos</p>
                <p>Sexo: masculino.</p>
                <NavLink to="/Adot">VER MAIS</NavLink>
              </InfoArea>
            </Item>
          </ItemsContainer>
        </SectionContainer>
      </MainContainer>
    </>
  )
}
