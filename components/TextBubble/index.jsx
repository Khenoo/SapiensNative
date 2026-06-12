import { TouchableOpacity, Text } from 'react-native'

function TextBubble(props) {
  const cor = props.cor
  const titulo = props.titulo
  const texto = props.texto

  let bolhadetexto = <TouchableOpacity style={{
  background: cor,
  color: 'black',
  padding: '5% 5%',
  margin: '6px',
  minHeight: 120,
  borderWidth: 2,
  borderStyle: 'dotted',
  borderRadius: '30px',
  fontSize: '18px',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: 'auto'
  }}> <Text>{titulo}</Text>
      <Text>{texto}</Text> </TouchableOpacity>
  return (
    bolhadetexto
)
}

export default TextBubble