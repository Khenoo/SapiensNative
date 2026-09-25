import { View, Text, ScrollView } from 'react-native'

import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function Tutorial({ mudarPagina }) {
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
          cor='white'
          titulo='Tutorial do Jogo'
          texto='Aprenda como jogar o Sapiens.'
        />

        <ScrollView
          style={{
            flex: 1,
            marginVertical: 15,
            backgroundColor: 'rgba(255,255,255,0.9)',
            borderWidth: 2,
            borderRadius: 20,
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
            Como jogar
          </Text>

          <Text>1. Escolha um modo de jogo.</Text>
          <Text>2. Escolha a grande área desejada.</Text>
          <Text>3. Escolha um tema.</Text>
          <Text>4. Passe o celular para o leitor.</Text>
          <Text>5. O sistema irá gerar uma pergunta.</Text>
          <Text>6. Leia a pergunta e tente acertar.</Text>
          <Text>7. Revele a resposta.</Text>
          <Text>8. Continue até decidir parar.</Text>

          <Text
            style={{
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 20,
            }}
          >
            Modos de jogo
          </Text>

          <Text>• O Generalista:</Text>
          <Text>
            Objetivo: Acertar uma pergunta de cada área, na qual o tema da pergunta de cada turno será escolhido pelo jogador
          </Text>
          <Text>• Mestre dos Magos</Text>
          <Text>
            Objetivo: Acertar a maior quantidade de perguntas, no total de 32 feitas (uma para cada tema). Vence o jogador que possuir melhor conhecimento geral entre os temas presentes.
          </Text>
          <Text>• Copa do Mundo</Text>
          <Text>
            Objetivo: Vence quem responder mais perguntas corretamente eliminando os adversários em combates diretos.
          </Text>
          <Text>• Generalista Sortudo</Text>
          <Text>
            Objetivo: Acertar uma pergunta de cada área, com temas sorteados por cartas.
          </Text>
          <Text>• O Especialista</Text>
          <Text>
            Objetivo: Vence quem responder o número de perguntas previamente combinado sobre o mesmo tema.
          </Text>
          <Text>• O Caminho Para a Vitória</Text>
          <Text>
            Objetivo: chegar ao final do tabuleiro, acertando as perguntas de acordo com a sorte nos dados.
          </Text>
          <Text>• Essa é a sua área</Text>
          <Text>
            Objetivo: Acertar primeiro uma pergunta de todos os temas de uma grande área.Vence aquele que acertar quatro perguntas, possuindo melhor conhecimento geral da área escolhida. 
          </Text>
          <Text>• Cartas na mesa</Text>
          <Text>
            Objetivo: Quem fizer mais pontos no final das 32 perguntas dos temas sorteados nas cartas distribuídas vence o jogo.
          </Text>
          <Text>• O Especialista Sortudo</Text>
          <Text>
            Objetivo: Vence quem responder o número de perguntas previamente combinado sobre o mesmo tema sorteado nas cartas. 
          </Text>
          <Text>Este jogo pode agregar mais de 8 jogadores. Nesse caso, é possível optar por equipes, ao invés de partidas individuais.</Text>
          <Text>                                                                    </Text>
          <Text>                                                                    </Text>
          <Text>                                                                    </Text>
        </ScrollView>

        <Button
          cor="white"
          escrever="Retornar ao Menu Inicial"
          onPress={() => mudarPagina('home')}
        />
      </View>
    </Fundo>
  )
}

export default Tutorial