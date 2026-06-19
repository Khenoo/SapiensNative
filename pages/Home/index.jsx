import { View } from 'react-native'

import Background from '../../components/Background'
import Button from '../../components/Button'

function Home({ mudarPagina }) {
  return (
    <Background>
      <View
        style={{
          flex: 1,
          width: '100%',
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
          escrever="Configurações"
          onPress={() => mudarPagina('config')}
        />

        <Button
          cor="white"
          escrever="Tutorial"
          onPress={() => mudarPagina('tutorial')}
        />
      </View>
    </Background>
  )
}

export default Home