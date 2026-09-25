import { View, TouchableOpacity, Image } from 'react-native'

import Background from '../../components/Background'
import Button from '../../components/Button'

function Home({ mudarPagina, reciclarTudo }) {
  return (
    <Background>
      <View
        style={{
          flex: 1,
          width: '100%',
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 40,
          }}
        >
          <Button
            cor="white"
            escrever="Jogar"
            onPress={() => mudarPagina('primeira')}
          />

          <Button
            cor="white"
            escrever="Tutorial"
            onPress={() => mudarPagina('tutorial')}
          />
        </View>
        <TouchableOpacity
          onPress={reciclarTudo}
          style={{
            position: 'absolute',
            bottom: 25,
            right: 25,

            width: 58,
            height: 58,

            justifyContent: 'center',
            alignItems: 'center',

            backgroundColor: 'white',
            borderRadius: 29,

            borderWidth: 2,
            borderColor: '#000',

            elevation: 6,
          }}
        >
          <Image
            source={require('../../assets/lixeira.png')}
            style={{
              width: 30,
              height: 30,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </Background>
  )
}

export default Home