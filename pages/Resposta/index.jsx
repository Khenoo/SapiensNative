import Button from '../../components/Button'
import Question from '../../components/Question'
import FundoQuestion from '../../components/FundoQuestion'

function Resposta({ mudarPagina }) {
  return (
    <Question>
      <FundoQuestion escreverpergunta='Placa Mãe.'/>
      <Button
        cor='white'
        escrever='Voltar para a pergunta'
        onClick={() => mudarPagina('pergunta')}
      />

      <Button
        cor='white'
        escrever='Gerar Outra Pergunta'
        onClick={() => mudarPagina('pergunta')}
      />

      <Button
        cor='white'
        escrever='Voltar ao Menu'
        onClick={() => mudarPagina('home')}
      />

      
    </Question>
  )
}

export default Resposta