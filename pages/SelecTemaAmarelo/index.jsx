import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function SelecTemaAmarelo({ mudarPagina }) {
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
          cor='yellow'
          titulo='Seleção de Tema'
          texto='Selecione um dos temas de Línguas.'
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <Button cor="yellow"
           escrever="Português"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="yellow"
           escrever="Inglês"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="yellow"
           escrever="Literatura"
           onPress={() => mudarPagina('atencao')} />
          <Button cor="yellow"
           escrever="Gramática"
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

export default SelecTemaAmarelo