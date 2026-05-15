import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import Text from '../../components/Text'
import TextBubble from '../../components/TextBubble'

function SegundaPag() {
  return (
    <Fundo>
      <TextBubble cor='white' escrever='Descrever o que deve ser escrito no cabecalho'></TextBubble>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        height: '400px',
        alignContent: 'space-between',
        justifyContent: 'center',
      }}>
      <Button cor="orange" escrever="Ciências Humanas"/>
      <Button cor="yellow" escrever="Linguas"/>
      <Button cor="purple" escrever="Entretenimento"/>
      <Button cor="white" escrever="Ciências Exatas"/>
      <Button cor="red" escrever="Ciências Sociais Aplicadas"/>
      <Button cor="pink" escrever="Conhecimentos Gerais"/>
      <Button cor="blue" escrever="Lazer"/>
      <Button cor="green" escrever="OpçãCiências Naturais"/>
      <Button cor="white" escrever="Retornar ao Menu Inicial"/>
      </div>
   </Fundo>
  )
}

export default SegundaPag