import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function SelecTemaLaranja({ mudarPagina }) {
  return (
    <Fundo>
      <div
        style={{
          flex: 1,
          width: '100%',

          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',

          padding: '20px',
          boxSizing: 'border-box',
        }}
      >
        <TextBubble
          cor='orange'
          titulo='Seleção de Tema'
          texto='Para continuar, selecione um dos temas da grande área de Ciências Humanas.'
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '12px',
            width: '100%',
            maxWidth: '1000px',
          }}
        >
          <Button
            cor="orange"
            escrever="Geografia"
            onPress={() => mudarPagina('atencao')}
          />

          <Button cor="orange"
           escrever="História"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="orange"
           escrever="Filosofia"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="orange"
           escrever="Socio, Psico e Educação"
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

export default SelecTemaLaranja