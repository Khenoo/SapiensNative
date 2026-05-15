import { findByLabelText } from '@testing-library/dom'
import Background from '../../components/Background'
import Button from '../../components/Button'
import Question from '../../components/Question'
import TextBubble from '../../components/TextBubble'
import FundoQuestion from '../../components/FundoQuestion'

function Pergunta() {
  return (
    <Question>
    <FundoQuestion escreverpergunta='Placa Mãe.'></FundoQuestion>
        <Button cor='black' escrever='Gerar Outra Pergunta'></Button>
        <Button cor='black' escrever='Voltar ao Menu'></Button>
    </Question>
  )
}

export default Pergunta