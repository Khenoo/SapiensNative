import Background from '../../components/Background'
import Button from '../../components/Button'

function Home({ mudarPagina }) {
  return (
    <Background>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 'auto',
          marginBottom: '5%'
        }}
      >
        <Button
          cor="white"
          escrever="Jogar"
          onPress={() => mudarPagina('primeira')}
        />

        <Button
          cor="white"
          escrever="Configurações"
          onPress={() => mudarPagina('config')}
        />

        <Button
          cor="white"
          escrever="Tutorial"
          onPress={() => mudarPagina('tutorial')}
        />
      </div>
    </Background>
  )
}

export default Home