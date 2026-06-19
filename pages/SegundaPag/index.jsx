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
          alignItems: 'center',
          justifyContent: 'space-between',
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
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Button
            cor="orange"
            escrever="Ciências Humanas"
            onPress={() => mudarPagina('temaLaranja')}
          />

          <Button
            cor="yellow"
            escrever="Linguas"
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

        <Button
          cor="white"
          escrever="Retornar ao Menu Inicial"
          onPress={() => mudarPagina('home')}
        />
      </View>
    </Fundo>
  )
}

export default SegundaPag