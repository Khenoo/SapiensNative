function Button(props) {
  const cor = props.cor
  const escrever = props.escrever

  let botao = <button style={{
  display: 'flex',
  background: cor,
  color: 'black',
  padding: '10px 25px',
  margin: '6px',
  border: 'dotted',
  borderRadius: '30px',
  fontSize: '18px',
  
  }}> {escrever} </button>
  return (
    botao
)
}

export default Button