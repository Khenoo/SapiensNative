import { findByLabelText } from '@testing-library/dom'
import Background from '../../components/Background'
import Button from '../../components/Button'
import Question from '../../components/Question'
import TextBubble from '../../components/TextBubble'
import FundoQuestion from '../../components/FundoQuestion'

function Pergunta() {
  return (
    <Question>
    <FundoQuestion escreverpergunta='Qual é a parte do computador responsável por conectar e interligar todos os componentes do computador entre si, ou seja, processador, memória RAM, disco rígido, placa gráfica, entre outros.'></FundoQuestion>
        <Button cor='black' escrever='Ir Para a Resposta'></Button>
    </Question>
  )
}

export default Pergunta