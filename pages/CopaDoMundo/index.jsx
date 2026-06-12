import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function CopaDoMundo({ mudarPagina }) {
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
        <TextBubble
          cor='white'
          titulo='Copa do Mundo'
          texto='Escolha como a pergunta será selecionada.'
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <Button
            cor="white"
            escrever="Pergunta Gerada pelo Sistema"
            onPress={() => mudarPagina('atencao')}
          />

          <Button
            cor="white"
            escrever="Escolha do Jogador"
            onPress={() => mudarPagina('segunda')}
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

export default CopaDoMundo