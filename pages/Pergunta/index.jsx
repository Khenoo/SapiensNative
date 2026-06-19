import { View } from 'react-native'

import Button from '../../components/Button'
import Question from '../../components/Question'
import FundoQuestion from '../../components/FundoQuestion'

function Pergunta({
  mudarPagina,
  pergunta,
  cor
}) {
  return (
    <Question cor={cor}>
      <FundoQuestion
        pergunta={pergunta}
      />

      <View
        style={{
          marginBottom: 30,
          alignItems: 'center',
        }}
      >
        <Button
          cor='white'
          escrever='Ir Para a Resposta'
          onPress={() => mudarPagina('resposta')}
        />
      </View>
    </Question>
  )
}

export default Pergunta