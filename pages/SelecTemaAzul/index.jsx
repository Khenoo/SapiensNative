import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function SelecTemaAzul({ mudarPagina }) {
  return (
    <Fundo>
      <div
        style={{
          flex: 1,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <TextBubble
          cor='rgba(80, 170, 255, 1)'
          titulo='Seleção de Tema'
          texto='Selecione um dos temas de Lazer.'
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <Button cor="rgba(80, 170, 255, 1)" escrever="Jogos" />
          <Button cor="rgba(80, 170, 255, 1)" escrever="Esportes" />
          <Button cor="rgba(80, 170, 255, 1)" escrever="Viagens" />
          <Button cor="rgba(80, 170, 255, 1)" escrever="Música" />
        </div>

        <Button
          cor="white"
          escrever="Retornar ao Menu Principal"
          onClick={() => mudarPagina('home')}
        />
      </div>
    </Fundo>
  )
}

export default SelecTemaAzul