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

export function Feed() {
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
            Olá <SpanWithColor COLORS="green">Usuário,</SpanWithColor> temos
            algumas recomendações de{' '}
            <SpanWithColor COLORS="purple">PETS</SpanWithColor> especiais para{' '}
            <SpanWithColor COLORS="green">você!</SpanWithColor>
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
        <SectionContainer>
          <strong>CACHORROS</strong>
          <ItemsContainer>
            <Item>
              <img src={Dog4} alt=""></img>
              <span>
                <PawPrint size={30} weight="fill" />
                MEL
                <PawPrint size={30} weight="fill" />
              </span>
              <InfoArea>
                <p>Idade: 5 anos.</p>
                <p>Sexo: masculino.</p>
                <NavLink to="/Adot">VER MAIS</NavLink>
              </InfoArea>
            </Item>
            <Item>
              <img src={Dog5} alt=""></img>
              <span>
                <PawPrint size={30} weight="fill" />
                CHEETOS
                <PawPrint size={30} weight="fill" />
              </span>
              <InfoArea>
                <p>Idade: 5 anos.</p>
                <p>Sexo: masculino.</p>
                <NavLink to="/Adot">VER MAIS</NavLink>
              </InfoArea>
            </Item>
            <Item>
              <img src={Dog6} alt=""></img>
              <span>
                <PawPrint size={30} weight="fill" />
                REX
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
        <SectionContainer>
          <strong>GATOS</strong>
          <ItemsContainer>
            <Item>
              <img src={Cat} alt=""></img>
              <span>
                <PawPrint size={30} weight="fill" />
                Tiago
                <PawPrint size={30} weight="fill" />
              </span>
              <InfoArea>
                <p>Idade: 5 anos.</p>
                <p>Sexo: masculino.</p>
                <NavLink to="/Adot">VER MAIS</NavLink>
              </InfoArea>
            </Item>
            <Item>
              <div>
                <img src={Cat2} alt=""></img>
              </div>
              <span>
                <PawPrint size={30} weight="fill" />
                Roberto
                <PawPrint size={30} weight="fill" />
              </span>
              <InfoArea>
                <p>Idade: 5 anos.</p>
                <p>Sexo: masculino.</p>
                <NavLink to="/Adot">VER MAIS</NavLink>
              </InfoArea>
            </Item>
            <Item>
              <img src={Cat3} alt=""></img>
              <span>
                <PawPrint size={30} weight="fill" />
                Douglas
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
      <Footer />
    </>
  )
}
