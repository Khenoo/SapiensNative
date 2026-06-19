import { View } from 'react-native'

import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function PrimeiraPag({ mudarPagina }) {
  return (
    <Fundo>
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 20,
        }}
      >
        <TextBubble
          cor="white"
          titulo="Seleção de Jogabilidade"
          texto="Para continuar, selecione a jogabilidade na qual você e seus amigos jogarão."
        />

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Button cor="white" escrever="O Generalista" onPress={() => mudarPagina('segunda')} />
          <Button cor="white" escrever="Mestre dos Magos" onPress={() => mudarPagina('segunda')} />
          <Button cor="white" escrever="O Caminho Para a Vitória" onPress={() => mudarPagina('segunda')} />
          <Button cor="white" escrever="Copa do Mundo" onPress={() => mudarPagina('copa')} />
          <Button cor="white" escrever="Generalista Sortudo" onPress={() => mudarPagina('atencao')} />
          <Button cor="white" escrever="Essa é a sua área" onPress={() => mudarPagina('segunda')} />
          <Button cor="white" escrever="Cartas na mesa" onPress={() => mudarPagina('segunda')} />
          <Button cor="white" escrever="O Especialista" onPress={() => mudarPagina('segunda')} />
          <Button cor="white" escrever="O Especialista Sortudo" onPress={() => mudarPagina('atencao')} />
        </View>

        <Button
          cor="white"
          escrever="Retornar ao Menu Principal"
          onPress={() => mudarPagina('home')}
        />
      </View>
    </Fundo>
  )
}

export default PrimeiraPag