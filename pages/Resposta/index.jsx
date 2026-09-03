import { View } from 'react-native'

import Question from '../../components/Question'
import Button from '../../components/Button'
import FundoQuestion from '../../components/FundoQuestion'

function Resposta({
  mudarPagina,
  pergunta,
  resposta,
  cor,
  reciclarPerguntas,
  gerarPergunta,
  categoriaAtual,
}) {
  return (
    <Question cor={cor}>
      <FundoQuestion
        pergunta={pergunta}
        resposta={resposta}
      />

      <View
        style={{
          marginBottom: 30,
          alignItems: 'center',
        }}
      >
        <Button
          cor="white"
          escrever="Voltar para a pergunta"
          onPress={() => mudarPagina('pergunta')}
        />

        <Button
          cor="white"
          escrever="Gerar Outra Pergunta"
          onPress={() => gerarPergunta(categoriaAtual, cor)}
        />

        <Button
          cor="white"
          escrever="Escolher Outra Área"
          onPress={() => mudarPagina('segunda')}
        />

        <Button
          cor="white"
          escrever="Voltar ao Menu"
          onPress={() => mudarPagina('home')}
        />
      </View>
    </Question>
  )
}

export default Resposta