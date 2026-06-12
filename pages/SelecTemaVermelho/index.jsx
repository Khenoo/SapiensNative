import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function SelecTemaVermelho({ mudarPagina }) {
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
          boxSizing: 'border-box',
        }}
      >
        <TextBubble
          cor='rgba(255, 75, 75, 1)'
          titulo='Seleção de Tema'
          texto='Selecione um dos temas de Ciências Sociais Aplicadas.'
        />

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
          }}
        >
          <Button cor="rgba(255, 75, 75, 1)" escrever="Administração" />
          <Button cor="rgba(255, 75, 75, 1)" escrever="Economia" />
          <Button cor="rgba(255, 75, 75, 1)" escrever="Direito" />
          <Button cor="rgba(255, 75, 75, 1)" escrever="Publicidade" />
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

export default SelecTemaVermelho