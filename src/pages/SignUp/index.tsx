import Info from '../../assets/Logo/SignUpAsset.svg'
import { Header } from '../../components/Header'
import { FormContainer, SectionContainer } from './styles'

export function SignUp() {
  return (
    <>
      <Header></Header>
      <SectionContainer>
        <FormContainer>
          <strong>
            Crie sua <span>CONTA</span>
            <hr />
          </strong>

          <input placeholder="EMAIL" />
          <input placeholder="SENHA" />
          <input placeholder="CONFIRME SUA SENHA" />
          <button>CADASTRE-SE</button>
        </FormContainer>
        <img src={Info} alt=""></img>
      </SectionContainer>
    </>
  )
}
