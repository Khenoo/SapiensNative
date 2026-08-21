import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '@/components/TextBubble'

import { View, ScrollView } from 'react-native'

function SelecTemaVermelho({
  mudarPagina,
  gerarPergunta
}) {
  return (
    <Fundo>
      <View
        style={{
          flex: 1,
          width: '100%',
          padding: 20,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TextBubble
            cor="rgba(255,75,75,1)"
            titulo="Seleção de Tema"
            texto="Selecione um tema."
          />
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
              cor="rgba(255,75,75,1)"
              escrever="Economia e Administração"
              onPress={() =>
                gerarPergunta(
                  'economiaAdministracao',
                  'rgba(255,75,75,1)'
                )
              }
            />

            <Button
              cor="rgba(255,75,75,1)"
              escrever="Direito"
              onPress={() =>
                gerarPergunta(
                  'direito',
                  'rgba(255,75,75,1)'
                )
              }
            />

            <Button
              cor="rgba(255,75,75,1)"
              escrever="Política"
              onPress={() =>
                gerarPergunta(
                  'politica',
                  'rgba(255,75,75,1)'
                )
              }
            />

            <Button
              cor="rgba(255,75,75,1)"
              escrever="Comunicação e Imprensa"
              onPress={() =>
                gerarPergunta(
                  'comunicacaoImprensa',
                  'rgba(255,75,75,1)'
                )
              }
            />
          </View>
        </ScrollView>

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

export default SelecTemaVermelho