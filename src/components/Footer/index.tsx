import { FooterContainer, SectionContainer } from './styles'
import { CaretCircleUp } from 'phosphor-react'

export function Footer() {
  function handleGoUp() {
    // eslint-disable-next-line no-undef
    $('html, body').animate({ scrollTop: 0 }, 'slow')
  }
  return (
    <FooterContainer>
      <SectionContainer>
        <button onClick={handleGoUp}>
          <CaretCircleUp size={40} weight="fill" />
        </button>
      </SectionContainer>
    </FooterContainer>
  )
}
