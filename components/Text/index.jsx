import { Text } from 'react-native'

export default function Text(props){
  const cor = props.cor
  const escrever = props.escrever

  let texto = <Text style={{
    fontSize: '100px',
    color: cor,
  }}> {escrever} </Text>

  return(
    texto
  )
}