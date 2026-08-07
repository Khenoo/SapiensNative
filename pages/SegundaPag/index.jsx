import { View } from 'react-native'

import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function SegundaPag({ mudarPagina }) {
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
          titulo="Seleção de Grande Área."
          texto="Para continuar, selecione a grande área na qual você e seus amigos receberão a carta."
        />

        <View
          style={{
            flex: 1,
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
              cor="orange"
              escrever="Ciências Humanas"
              onPress={() => mudarPagina('temaLaranja')}
            />

            <Button
              cor="yellow"
              escrever="Línguas"
              onPress={() => mudarPagina('temaAmarelo')}
            />

            <Button
              cor="rgba(170,80,255,1)"
              escrever="Entretenimento"
              onPress={() => mudarPagina('temaRoxo')}
            />

            <Button
              cor="white"
              escrever="Ciências Exatas"
              onPress={() => mudarPagina('temaBranco')}
            />

            <Button
              cor="rgba(255,75,75,1)"
              escrever="Ciências Sociais Aplicadas"
              onPress={() => mudarPagina('temaVermelho')}
            />

            <Button
              cor="pink"
              escrever="Conhecimentos Gerais"
              onPress={() => mudarPagina('temaRosa')}
            />

            <Button
              cor="rgba(80,170,255,1)"
              escrever="Lazer"
              onPress={() => mudarPagina('temaAzul')}
            />

            <Button
              cor="green"
              escrever="Ciências Naturais"
              onPress={() => mudarPagina('temaVerde')}
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
            escrever="Retornar ao Menu Inicial"
            onPress={() => mudarPagina('home')}
          />
        </View>
      </View>
    </Fundo>
  )
}

export default SegundaPag