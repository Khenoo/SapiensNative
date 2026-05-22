import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function SegundaPag({ mudarPagina }) {
  return (
    <Fundo>
      <TextBubble
        cor='white'
        escrever='Descrever o que deve ser escrito no cabecalho'
      />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '400px',
          alignContent: 'space-between',
          justifyContent: 'center',
        }}
      >
        <Button
          cor="orange"
          escrever="Ciências Humanas"
          onClick={() => mudarPagina('temaLaranja')}
        />

        <Button cor="yellow" escrever="Linguas" />
        <Button cor="purple" escrever="Entretenimento" />
        <Button cor="white" escrever="Ciências Exatas" />
        <Button cor="red" escrever="Ciências Sociais Aplicadas" />
        <Button cor="pink" escrever="Conhecimentos Gerais" />
        <Button cor="blue" escrever="Lazer" />
        <Button cor="green" escrever="Ciências Naturais" />

        <Button
          cor="white"
          escrever="Retornar ao Menu Inicial"
          onClick={() => mudarPagina('home')}
        />
      </div>
    </Fundo>
  )
}

export default SegundaPag