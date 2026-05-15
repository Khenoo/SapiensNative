import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import Text from '../../components/Text'
import TextBubble from '../../components/TextBubble'

function PrimeiraPag() {
  return (
    <Fundo>
      <TextBubble cor='white' escrever='Seleção de Jogabilidade:
      Para continuar, selecione a jogabilidade na qual você e seu amigos jogarão.'></TextBubble>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        height: '400px',
        alignContent: 'space-between',
        justifyContent: 'center',
      }}>
      <Button cor="white" escrever="O Generalista"/>
      <Button cor="white" escrever="Mestre dos Magos"/>
      <Button cor="white" escrever="O Caminho Para a Vitória"/>
      <Button cor="white" escrever="Copa do Mundo"/>
      <Button cor="white" escrever="Generalista Sortudo"/>
      <Button cor="white" escrever="Essa é a sua área"/>
      <Button cor="white" escrever="Cartas na mesa"/>
      <Button cor="white" escrever="O Especialista"/>
      <Button cor="white" escrever="O Especialista Sortudo"/>
      <Button cor="white" escrever="Retornar ao Menu Principal"/>
      </div>
   </Fundo>
  )
}

export default PrimeiraPag