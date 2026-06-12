import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function SelecTemaAzul({ mudarPagina }) {
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
          cor='rgba(80, 170, 255, 1)'
          titulo='Seleção de Tema'
          texto='Selecione um dos temas de Lazer.'
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <Button cor="rgba(80, 170, 255, 1)"
           escrever="Jogos"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="rgba(80, 170, 255, 1)"
           escrever="Esportes"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="rgba(80, 170, 255, 1)"
           escrever="Viagens"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="rgba(80, 170, 255, 1)"
           escrever="Música"
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

export default SelecTemaAzul