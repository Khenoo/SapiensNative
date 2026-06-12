import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function SelecTemaRoxo({ mudarPagina }) {
  return (
    <Fundo>
      <div
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <TextBubble
          cor='rgba(170, 80, 255, 1)'
          titulo='Seleção de Tema'
          texto='Selecione um dos temas de Entretenimento.'
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <Button cor="rgba(170, 80, 255, 1)"
           escrever="Cinema"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="rgba(170, 80, 255, 1)"
           escrever="Séries"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="rgba(170, 80, 255, 1)"
           escrever="Animes"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="rgba(170, 80, 255, 1)"
           escrever="Jogos"
           onPress={() => mudarPagina('atencao')} />
        </div>

        <Button
          cor="white"
          escrever="Retornar ao Menu Principal"
          onPress={() => mudarPagina('home')}
        />
      </div>
    </Fundo>
  )
}

export default SelecTemaRoxo