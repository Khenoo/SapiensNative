import { View, ScrollView } from 'react-native'

import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function SegundaPagRandom({
  mudarPagina,
  gerarPergunta,
}) {
  const grandesAreas = [
    {
      nome: 'Ciências Humanas',
      cor: 'orange',
      temas: [
        'geografia',
        'historia',
        'filosofia',
        'soci,PsicoEEduc',
      ],
    },
    {
      nome: 'Línguas',
      cor: 'yellow',
      temas: [
        'linguaPortuguesa',
        'linguasEstrangeiras',
        'literaturaPortuguesa',
        'literaturaEstrangeira',
      ],
    },
    {
      nome: 'Entretenimento',
      cor: 'rgba(170,80,255,1)',
      temas: [
        'esportes',
        'hqMangas',
        'jogosGames',
        'infantil',
      ],
    },
    {
      nome: 'Ciências Exatas',
      cor: 'white',
      temas: [
        'matematicaLogica',
        'fisicaAstronomia',
        'engenharias',
        'informatica',
      ],
    },
    {
      nome: 'Ciências Sociais Aplicadas',
      cor: 'rgba(255,75,75,1)',
      temas: [
        'economiaAdministracao',
        'direito',
        'politica',
        'comunicacaoImprensa',
      ],
    },
    {
      nome: 'Conhecimentos Gerais',
      cor: 'pink',
      temas: [
        'cultura',
        'esoterismo',
        'religiao',
        'artes',
      ],
    },
    {
      nome: 'Lazer',
      cor: 'rgba(80,170,255,1)',
      temas: [
        'cinema',
        'televisao',
        'musica',
        'series',
      ],
    },
    {
      nome: 'Ciências Naturais',
      cor: 'green',
      temas: [
        'corpoHumanoSaude',
        'meioAmbiente',
        'seresVivos',
        'quimica',
      ],
    },
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
            cor="white"
            titulo="Seleção de Grande Área."
            texto="Para continuar, selecione a grande área da qual você ou seus amigos receberão a carta."
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
            escrever="Retornar ao Menu Inicial"
            onPress={() => mudarPagina('home')}
          />
        </View>
      </View>
    </Fundo>
  )
}

export default SegundaPagRandom