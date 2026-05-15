import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import Text from '../../components/Text'
import TextBubble from '../../components/TextBubble'

function SelecTemaLaranja() {
  return (
    <Fundo>
      <TextBubble cor='orange' escrever='Seleção de Tema
      Para continuar, selecione um dos temas da grande área de ciências humanas.'></TextBubble>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        height: '400px',
        alignContent: 'space-between',
        justifyContent: 'center',
      }}>
      <Button cor="orange" escrever="Geografia"/>
      <Button cor="orange" escrever="História"/>
      <Button cor="orange" escrever="Filosofia"/>
      <Button cor="orange" escrever="Socio, Psico e Educação"/>
      <Button cor="white" escrever="Retornar ao Menu Principal"/>
      </div>
   </Fundo>
  )
}

export default SelecTemaLaranja