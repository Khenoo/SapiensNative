import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function SelecTemaLaranja({ mudarPagina }) {
  return (
    <Fundo>
      <TextBubble
        cor='orange'
        escrever='Seleção de Tema:
        Para continuar, selecione um dos temas da grande área de Ciências Humanas.'
      />

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          height: '400px',
          alignContent: 'space-between',
          justifyContent: 'center',
        }}
      >
        <Button
          cor="orange"
          escrever="Geografia"
          onClick={() => mudarPagina('pergunta')}
        />

        <Button cor="orange" escrever="História" />
        <Button cor="orange" escrever="Filosofia" />
        <Button cor="orange" escrever="Socio, Psico e Educação" />

        <Button
          cor="white"
          escrever="Retornar ao Menu Principal"
          onClick={() => mudarPagina('home')}
        />
      </div>
    </Fundo>
  )
}

export default SelecTemaLaranja