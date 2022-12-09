import { Header } from '../../components/Header'
import { FormContainer, SectionContainer } from './styles'

export function Adm() {
  return (
    <>
      <Header></Header>
      <SectionContainer>
        <FormContainer>
          <strong>
            <span>Administrador</span>
            <hr />
          </strong>

          <input placeholder="EMAIL" />
          <input placeholder="SENHA" />
          <input placeholder="CONFIRME SUA SENHA" />
          <button>CADASTRE-SE</button>
        </FormContainer>
      </SectionContainer>
    </>
  )
}
