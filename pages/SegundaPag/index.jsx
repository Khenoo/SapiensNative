import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function SegundaPag({ mudarPagina }) {
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
          cor='white'
          titulo='Seleção de Grande Área.'
          texto='Para continuar, selecione a grande área na qual você e seus amigos receberão a carta.'
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
            escrever="Ciências Humanas"
            onPress={() => mudarPagina('temaLaranja')}
          />

          <Button cor="yellow" escrever="Linguas" onPress={() => mudarPagina('temaAmarelo')} />

          <Button
            cor="rgba(170, 80, 255, 1)"
            escrever="Entretenimento"
            onPress={() => mudarPagina('temaRoxo')}
          />

          <Button cor="white" escrever="Ciências Exatas" onPress={() => mudarPagina('temaBranco')} />
          <Button
            cor="rgba(255, 75, 75, 1)"
            escrever="Ciências Sociais Aplicadas"
            onPress={() => mudarPagina('temaVermelho')}
          />
          <Button cor="pink" escrever="Conhecimentos Gerais" onPress={() => mudarPagina('temaRosa')} />

          <Button
            cor="rgba(80, 170, 255, 1)"
            escrever="Lazer"
            onPress={() => mudarPagina('temaAzul')}
          />

          <Button cor="green" escrever="Ciências Naturais" onPress={() => mudarPagina('temaVerde')} />
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

export default SegundaPag