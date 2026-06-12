import Question from '../../components/Question'
import Button from '../../components/Button'

function Resposta({ mudarPagina }) {
  const pergunta =
    'Qual é a parte do computador responsável por conectar e interligar todos os componentes do computador entre si?'

  const resposta = 'Placa Mãe.'

  return (
    <Question>
      <div
        style={{
          width: '90%',
          maxWidth: '1000px',
          height: '85vh',

          backgroundColor: 'lightyellow',
          border: 'dotted',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',

          padding: '25px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '100%',
            backgroundColor: 'rgba(255,255,255,0.5)',
            borderRadius: '15px',
            padding: '15px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '18px',
              margin: 0,
              color: '#444',
            }}
          >
            {pergunta}
          </p>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h1
            style={{
              fontSize: '48px',
              textAlign: 'center',
              margin: 0,
            }}
          >
            {resposta}
          </h1>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <Button
            cor='white'
            escrever='Voltar para a pergunta'
            onClick={() => mudarPagina('pergunta')}
          />

          <Button
            cor='white'
            escrever='Gerar Outra Pergunta'
          />

          <Button
            cor='white'
            escrever='Voltar ao Menu'
            onClick={() => mudarPagina('home')}
          />
        </div>
      </div>
    </Question>
  )
}

export default Resposta