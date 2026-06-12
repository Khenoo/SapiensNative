import { View, Text } from 'react-native'

function fundoQuestion(props){

    const pergunta = props.pergunta
    const resposta = props.resposta

return(
    <View style={{
            flex: 1,
            backgroundColor: 'lightyellow',
            height: '70%',
            width:  '80%',
            border: 'dotted',
            justifyContent: 'center',
            padding: '30px',
            alignItems:'center',
            marginHorizontal: 'auto',
            marginTop: '20%'
        }}>
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
        <Text
            style={{
                marginTop: '50%',
                fontSize: 36,
                textAlign: 'center',
                width: '90%',
                lineHeight: 28,
            }}
        >
            {resposta}
            
        </Text>
</View>

)
}
export default fundoQuestion