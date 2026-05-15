import { findByLabelText } from '@testing-library/dom'
import Background from '../../components/Background'
import Button from '../../components/Button'

const p1 = {display: "flex", alignItems: "flex-end"}

function Home() {
  return (
    <Background>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 'auto',
        marginBottom: '5%'
      }}>
      <Button cor="white" escrever="Jogar"/>
      <Button cor="white" escrever="Configurações"/>
      <Button cor="white" escrever="Tutorial"/>
      </div>
    </Background>
  )
}

export default Home