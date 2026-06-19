import { View, Text } from 'react-native'

function TextBubble(props) {
  const cor = props.cor
  const titulo = props.titulo
  const texto = props.texto

  return (
    <View
      style={{
        backgroundColor: cor,

        paddingVertical: 20,
        paddingHorizontal: 20,

        margin: 6,

        minHeight: 140,

        borderWidth: 2,
        borderRadius: 30,

        justifyContent: 'center',
        alignItems: 'center',

        width: '95%',
      }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 10,
        }}
      >
        {titulo}
      </Text>

      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
        }}
      >
        {texto}
      </Text>
    </View>
  )
}

export default TextBubble