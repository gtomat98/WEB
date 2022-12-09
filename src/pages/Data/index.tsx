import { NavLink } from 'react-router-dom'
import { Header } from '../../components/Header'
import {
  DivContainer,
  Divider,
  FormContainer,
  Inputs,
  MainContainer,
} from './styles'
import { CaretCircleRight } from 'phosphor-react'

export function Data() {
  return (
    <>
      <Header></Header>
      <MainContainer>
        <DivContainer>
          <FormContainer>
            <Inputs>
              <Divider>
                <input type="text" placeholder="Nome completo" />
                <input type="text" placeholder="RG" />
                <input type="text" placeholder="CPF" />
                <input type="text" placeholder="Data de nascimento" />
                <input type="text" placeholder="Telefone" />
              </Divider>

              <Divider>
                <input type="text" placeholder="Renda média mensal" />
                <input type="text" placeholder="Estado" />
                <input type="text" placeholder="CEP" />
                <input type="text" placeholder="Cidade" />
                <input type="text" placeholder="Espaço livre em casa" />
              </Divider>
            </Inputs>
          </FormContainer>
          <footer>
            <strong>COMPLETE SUAS INFORMAÇÕES</strong>
          </footer>
        </DivContainer>
        <NavLink to="/">
          <CaretCircleRight size={50} />
        </NavLink>
      </MainContainer>
    </>
  )
}
