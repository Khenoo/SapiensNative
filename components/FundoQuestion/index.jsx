import { View, Text } from 'react-native'

function FundoQuestion(props) {
  const pergunta = props.pergunta
  const resposta = props.resposta

  return (
    <View
      style={{
        flex: 1,
        width: '90%',
        backgroundColor: 'lightyellow',

        borderWidth: 2,

        justifyContent: 'center',
        alignItems: 'center',

        padding: 20,

        marginTop: 20,
        marginBottom: 20,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          textAlign: 'center',
          width: '90%',
          lineHeight: 28,
        }}
      >
        {pergunta}
      </Text>

      {resposta && (
        <Text
          style={{
            marginTop: 40,
            fontSize: 36,
            textAlign: 'center',
            width: '90%',
          }}
        >
          {resposta}
        </Text>
      )}
    </View>
  )
}

export default FundoQuestion