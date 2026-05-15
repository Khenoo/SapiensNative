function TextBubble(props) {
  const cor = props.cor
  const escrever = props.escrever

  let bolhadetexto = <button style={{
  background: cor,
  color: 'black',
  padding: '10px 40%',
  margin: '6px',
  border: 'dotted',
  borderRadius: '30px',
  fontSize: '18px',
  marginBottom: 'auto'
  }}> {escrever} </button>
  return (
    bolhadetexto
)
}

export default TextBubble