import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function SelecTemaVerde({ mudarPagina }) {
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
          cor='green'
          titulo='Seleção de Tema'
          texto='Selecione um dos temas de Ciências Naturais.'
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <Button cor="green"
           escrever="Biologia"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="green"
           escrever="Química"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="green"
           escrever="Física"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="green"
           escrever="Astronomia"
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

export default SelecTemaVerde