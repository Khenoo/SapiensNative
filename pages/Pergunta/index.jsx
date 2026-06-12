import Button from '../../components/Button'
import Question from '../../components/Question'
import FundoQuestion from '../../components/FundoQuestion'

function Pergunta({ mudarPagina }) {
  return (
    <Question>
      <FundoQuestion pergunta='Qual é a parte do computador responsável por conectar e interligar todos os componentes do computador entre si?' />

      <div style={{
        flex: 1,
        justifyContent: 'center',
        marginLeft: '25px',
        alignItems:'center',
        marginHorizontal: 'auto',
        marginTop: 'auto'
      }}>

      <Button
        cor='white'
        escrever='Ir Para a Resposta'
        onPress={() => mudarPagina('resposta')}
      />
      </div>
    </Question>
  )
}

export default Pergunta