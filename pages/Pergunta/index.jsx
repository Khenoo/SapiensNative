import Button from '../../components/Button'
import Question from '../../components/Question'
import FundoQuestion from '../../components/FundoQuestion'

function Pergunta({ mudarPagina }) {
  return (
    <Question>
      <FundoQuestion escreverpergunta='Qual é a parte do computador responsável por conectar e interligar todos os componentes do computador entre si?' />

      <Button
        cor='white'
        escrever='Ir Para a Resposta'
        onClick={() => mudarPagina('resposta')}
      />
    </Question>
  )
}

export default Pergunta