import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function Tutorial({ mudarPagina }) {
  return (
    <Fundo>
      <div
        style={{
          width: '100%',
          height: '100vh',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <TextBubble
          cor='white'
          titulo='Tutorial do Jogo'
          texto='Aprenda como jogar o Sapiens.'
        />
        <div
          style={{
            width: '90%',
            maxWidth: '900px',

            flex: 1,

            overflowY: 'auto',

            backgroundColor: 'rgba(255,255,255,0.85)',

            border: 'dotted',
            borderRadius: '20px',

            padding: '20px',

            marginTop: '15px',
            marginBottom: '15px',
          }}
        >
          <h2>Como jogar</h2>

          <p>
            1. Escolha um modo de jogo.
          </p>

          <p>
            2. Escolha a grande área desejada.
          </p>

          <p>
            3. Escolha um tema.
          </p>

          <p>
            4. Passe o celular para o leitor.
          </p>

          <p>
            5. O sistema irá gerar uma pergunta.
          </p>

          <p>
            6. Leia a pergunta e tente acertar.
          </p>

          <p>
            7. Revele a resposta.
          </p>

          <p>
            8. Continue até decidir parar.
          </p>

          <h2>Modos de jogo</h2>

          <p>
            O Generalista
          </p>

          <p>
            Mestre dos Magos
          </p>

          <p>
            Copa do Mundo
          </p>

          <p>
            texto teste
          </p>
        </div>

        <Button
          cor="white"
          escrever="Retornar ao Menu Inicial"
          onClick={() => mudarPagina('home')}
        />
      </div>
    </Fundo>
  )
}

export default Tutorial