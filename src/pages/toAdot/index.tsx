import { Header } from '../../components/Header'
import { DogData, FormContainer, InfoArea, MainContainer } from './styles'
import Dog from '../../assets/Logo/Dog4.jpg'
import { PawPrint } from 'phosphor-react'

export function Adot() {
  return (
    <>
      <Header />
      <MainContainer>
        <DogData>
          <img src={Dog} alt=""></img>
          <span>
            <PawPrint size={30} weight="fill" />
            BOB
            <PawPrint size={30} weight="fill" />
          </span>
          <InfoArea>
            <div>
              <p>Idade: 5 anos.</p>
              <p>Sexo: masculino.</p>
            </div>
            <div>
              <p>Idade: 5 anos.</p>
              <p>Sexo: masculino.</p>
            </div>
            <div>
              <p>Idade: 5 anos.</p>
              <p>Sexo: masculino.</p>
            </div>
            <div>
              <p>Idade: 5 anos.</p>
              <p>Sexo: masculino.</p>
            </div>
          </InfoArea>
        </DogData>
        <FormContainer>
          <input placeholder="Teste" />
          <input placeholder="Teste" />
          <select name="" id="">
            <option>Definitivamente</option>
            <option>Temporariamente</option>
          </select>
          <button>ADOTAR</button>
        </FormContainer>
      </MainContainer>
    </>
  )
}
