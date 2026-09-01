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
            flex: 1,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Button
              cor="white"
              escrever="O Generalista"
              onPress={() => mudarPagina('segunda')}
            />

            <Button
              cor="white"
              escrever="Mestre dos Magos"
              onPress={() => mudarPagina('segunda')}
            />

            <Button
              cor="white"
              escrever="O Caminho Para a Vitória"
              onPress={() => mudarPagina('segunda')}
            />

            <Button
              cor="white"
              escrever="Copa do Mundo"
              onPress={() => mudarPagina('copa')}
            />

            <Button
              cor="white"
              escrever="Generalista Sortudo"
              onPress={() => mudarPagina('atencaorandom')}
            />

            <Button
              cor="white"
              escrever="Essa é a sua área"
              onPress={() => mudarPagina('segunda')}
            />

            <Button
              cor="white"
              escrever="Cartas na Mesa"
              onPress={() => mudarPagina('segunda')}
            />

            <Button
              cor="white"
              escrever="O Especialista"
              onPress={() => mudarPagina('segunda')}
            />

            <Button
              cor="white"
              escrever="O Especialista Sortudo"
              onPress={() => mudarPagina('atencaorandom')}
            />
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <Button
            cor="white"
            escrever="Retornar ao Menu Principal"
            onPress={() => mudarPagina('home')}
          />
        </View>
      </View>
    </Fundo>
  )
}

export default PrimeiraPag