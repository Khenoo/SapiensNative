import { View, ScrollView } from 'react-native'

import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '@/components/TextBubble'

function SegundaPagRandom({
  mudarPagina,
  gerarPergunta
}) {
  const grandesAreas = [
    {
      nome: 'Linguagens',
      cor: 'orange',
      temas: [
        'linguasEstrangeiras',
        'linguaPortuguesa',
        'literaturaPortuguesa',
        'literaturaEstrangeira'
      ]
    },
    {
      nome: 'Entretenimento',
      cor: 'red',
      temas: [
        'infantil',
        'jogosGames',
        'hqMangas',
        'esportes'
      ]
    },
    {
      nome: 'Tecnologia',
      cor: 'blue',
      temas: [
        'informatica',
        'engenharias',
        'fisicaAstronomia',
        'matematicaLogica'
      ]
    },
    {
      nome: 'Humanas',
      cor: 'purple',
      temas: [
        'soci,PsicoEEduc',
        'filosofia',
        'historia',
        'geografia'
      ]
    },
    {
      nome: 'Cultura',
      cor: 'green',
      temas: [
        'artes',
        'religiao',
        'esoterismo',
        'cultura'
      ]
    },
    {
      nome: 'Mídia',
      cor: 'yellow',
      temas: [
        'series',
        'musica',
        'televisao',
        'cinema'
      ]
    },
    {
      nome: 'Ciências',
      cor: 'white',
      temas: [
        'quimica',
        'seresVivos',
        'meioAmbiente',
        'corpoHumanoSaude'
      ]
    },
    {
      nome: 'Sociais',
      cor: 'pink',
      temas: [
        'comunicacaoImprensa',
        'politica',
        'direito',
        'economiaAdministracao'
      ]
    }
  ]

  function escolherGrandeArea(area) {
    const indice = Math.floor(Math.random() * area.temas.length)
    const temaEscolhido = area.temas[indice]

    gerarPergunta(temaEscolhido, area.cor)
  }

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
            cor="orange"
            titulo="Escolha uma Grande Área"
            texto="Escolha uma área para descobrir seu tema!"
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
            {grandesAreas.map((area) => (
              <Button
                key={area.nome}
                cor={area.cor}
                escrever={area.nome}
                onPress={() => escolherGrandeArea(area)}
              />
            ))}
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

export default SegundaPagRandom