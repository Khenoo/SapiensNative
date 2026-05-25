import Fundo from '../../components/Fundo'
import Button from '../../components/Button'
import TextBubble from '../../components/TextBubble'

function PrimeiraPag({ mudarPagina }) {
  return (
    <Fundo>
      <TextBubble
        cor='white'
        titulo='Seleção de Jogabilidade:'
        texto='Para continuar, selecione a jogabilidade na qual você e seus amigos jogarão.'
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
          cor="white"
          escrever="O Generalista"
          onClick={() => mudarPagina('segunda')}
        />

        <Button cor="white" escrever="Mestre dos Magos" />
        <Button cor="white" escrever="O Caminho Para a Vitória" />
        <Button cor="white" escrever="Copa do Mundo" />
        <Button cor="white" escrever="Generalista Sortudo" />
        <Button cor="white" escrever="Essa é a sua área" />
        <Button cor="white" escrever="Cartas na mesa" />
        <Button cor="white" escrever="O Especialista" />
        <Button cor="white" escrever="O Especialista Sortudo" />

        <Button
          cor="white"
          escrever="Retornar ao Menu Principal"
          onClick={() => mudarPagina('home')}
        />
      </div>
    </Fundo>
  )
}

export default PrimeiraPag