import { Text, View } from 'react-native'
import { useState } from 'react'

import Button from '../../components/Button'
import Fundo from '../../components/Fundo'

function AtencaoRandom({
  mudarPagina,
  gerarPergunta
}) {
  const areas = [
    { categoria: 'linguaPortuguesa', cor: 'orange' },
    { categoria: 'linguasEstrangeiras', cor: 'orange' },
    { categoria: 'literaturaPortuguesa', cor: 'orange' },
    { categoria: 'literaturaEstrangeira', cor: 'orange' },

    { categoria: 'infantil', cor: 'rgba(255,75,75,1)' },
    { categoria: 'jogosGames', cor: 'rgba(255,75,75,1)' },
    { categoria: 'hqMangas', cor: 'rgba(255,75,75,1)' },
    { categoria: 'esportes', cor: 'rgba(255,75,75,1)' },

    { categoria: 'informatica', cor: 'rgba(80,170,255,1)' },
    { categoria: 'engenharias', cor: 'rgba(80,170,255,1)' },
    { categoria: 'fisicaAstronomia', cor: 'rgba(80,170,255,1)' },
    { categoria: 'matematicaLogica', cor: 'rgba(80,170,255,1)' },

    { categoria: 'soci,PsicoEEduc', cor: 'rgba(170,80,255,1)' },
    { categoria: 'filosofia', cor: 'rgba(170,80,255,1)' },
    { categoria: 'historia', cor: 'rgba(170,80,255,1)' },
    { categoria: 'geografia', cor: 'rgba(170,80,255,1)' },

    { categoria: 'artes', cor: 'green' },
    { categoria: 'religiao', cor: 'green' },
    { categoria: 'esoterismo', cor: 'green' },
    { categoria: 'cultura', cor: 'green' },

    { categoria: 'series', cor: 'yellow' },
    { categoria: 'musica', cor: 'yellow' },
    { categoria: 'televisao', cor: 'yellow' },
    { categoria: 'cinema', cor: 'yellow' },

    { categoria: 'quimica', cor: 'white' },
    { categoria: 'seresVivos', cor: 'white' },
    { categoria: 'meioAmbiente', cor: 'white' },
    { categoria: 'corpoHumanoSaude', cor: 'white' },

    { categoria: 'comunicacaoImprensa', cor: 'pink' },
    { categoria: 'politica', cor: 'pink' },
    { categoria: 'direito', cor: 'pink' },
    { categoria: 'economiaAdministracao', cor: 'pink' },
  ]

  const [random] = useState(
    Math.floor(Math.random() * areas.length)
  )

  const areaEscolhida = areas[random]

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
        <View />

        <View
          style={{
            width: '90%',
            backgroundColor: 'rgba(255,255,224,0.95)',
            borderWidth: 2,
            borderRadius: 20,
            padding: 30,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: 'red',
              fontSize: 40,
              fontWeight: 'bold',
              marginBottom: 20,
            }}
          >
            ATENÇÃO!!!
          </Text>

          <Text
            style={{
              fontSize: 24,
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            Entregue o celular para o leitor das perguntas
          </Text>

          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 20,
            }}
          >
            A pergunta será gerada. Caso o celular esteja com o jogador, passe-o para o leitor.
          </Text>

          <Button
            cor="white"
            escrever="Continuar Para Pergunta"
            onPress={() =>
              gerarPergunta(
                areaEscolhida.categoria,
                areaEscolhida.cor
              )
            }
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

export default AtencaoRandom