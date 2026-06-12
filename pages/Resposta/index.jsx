import Question from '../../components/Question'
import Button from '../../components/Button'
import FundoQuestion from '../../components/FundoQuestion'

function Resposta({ mudarPagina }) {
  const pergunta =
    'Qual é a parte do computador responsável por conectar e interligar todos os componentes do computador entre si?'

  const resposta = 'Placa Mãe.'

  return (
    <Question>
      <FundoQuestion 
      pergunta='Qual é a parte do computador responsável por conectar e interligar todos os componentes do computador entre si?'
      resposta='Placa Mãe.'
      />
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
            escrever='Voltar para a pergunta'
            onPress={() => mudarPagina('pergunta')}
          />

          <Button
            cor='white'
            escrever='Gerar Outra Pergunta'
            onPress={() => mudarPagina('pergunta')}
          />

          <Button
            cor='white'
            escrever='Voltar ao Menu'
            onPress={() => mudarPagina('home')}
          />
        </div>
    </Question>
  )
}

export default Resposta