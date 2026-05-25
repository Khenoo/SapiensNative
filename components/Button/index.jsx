import { TouchableOpacity, Text } from 'react-native'

function Button(props) {
  const cor = props.cor
  const escrever = props.escrever
  const onClick = props.onClick

  return (
    <TouchableOpacity
      onPress={onClick}
      style={{
        backgroundColor: cor,
        paddingVertical: 10,
        paddingHorizontal: 20,
        margin: 6,
        borderWidth: 2,
        borderStyle: 'dotted',
        borderRadius: 30,
        minWidth: 140,
        maxWidth: '90%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: 'black',
          fontSize: 16,
          textAlign: 'center',
        }}
      >
        {escrever}
      </Text>
    </TouchableOpacity>
  )
}

export default Button