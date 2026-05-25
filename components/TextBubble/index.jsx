function TextBubble(props) {
  const cor = props.cor
  const titulo = props.titulo
  const texto = props.texto

  let bolhadetexto = <button style={{
  background: cor,
  color: 'black',
  padding: '5% 5%',
  margin: '6px',
  border: 'dotted',
  borderRadius: '30px',
  fontSize: '18px',
  marginBottom: 'auto'
  }}> <p>{titulo}</p>
      <p>{texto}</p> </button>
  return (
    bolhadetexto
)
}

export default TextBubble