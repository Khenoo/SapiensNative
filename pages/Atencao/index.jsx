import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function Atencao({ mudarPagina }) {
  return (
    <Fundo>
      <div
        style={{
          width: '100%',
          height: '100vh',

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',

          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <div />
        <div
          style={{
            width: '90%',
            maxWidth: '700px',

            backgroundColor: 'rgba(255,255,224,0.95)',

            border: 'dotted',
            borderRadius: '20px',

            padding: '30px',

            textAlign: 'center',

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <h1
            style={{
              margin: 0,
              color: 'red',
              fontSize: '40px',
            }}
          >
            ATENÇÃO!!!
          </h1>

          <p
            style={{
              fontSize: '24px',
              margin: 0,
            }}
          >
            Entregue o celular para o leitor das perguntas
          </p>

          <p
            style={{
              fontSize: '18px',
              textAlign: 'center',
              maxWidth: '500px',
            }}
          >
            A pergunta será gerada. Caso o celular esteja
            com o jogador, passe-o para o leitor.
          </p>

          <Button
            cor="white"
            escrever="Continuar Para Pergunta"
            onPress={() => mudarPagina('pergunta')}
          />
        </div>
        <Button
          cor="white"
          escrever="Retornar ao Menu Inicial"
          onPress={() => mudarPagina('home')}
        />
      </div>
    </Fundo>
  )
}

export default Atencao