import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function Configuracoes({ mudarPagina }) {
  return (
    <Fundo>
      <div
        style={{
          width: '100%',
          height: '100vh',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',

          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <TextBubble
          cor='white'
          titulo='Configurações'
          texto='Ajuste algumas opções do aplicativo.'
        />

        <div
          style={{
            width: '90%',
            maxWidth: '700px',

            backgroundColor: 'rgba(255,255,255,0.85)',

            border: 'dotted',
            borderRadius: '20px',

            padding: '25px',

            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <div>
            <h3>Volume Geral</h3>

            <input
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              style={{
                width: '100%',
              }}
            />
          </div>
          <div>
            <h3>Volume do Clique</h3>

            <input
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              style={{
                width: '100%',
              }}
            />
          </div>
          <div>
            <h3>Volume da Música</h3>

            <input
              type="range"
              min="0"
              max="100"
              defaultValue="50"
              style={{
                width: '100%',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <h3>Modo preto e branco</h3>

            <input type="checkbox" />
          </div>
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

export default Configuracoes