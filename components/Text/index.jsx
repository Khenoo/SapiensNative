export default function Text(props){
  const cor = props.cor
  const escrever = props.escrever

  let texto = <h1 style={{
    fontSize: '100px',
    color: cor,
  }}> {escrever} </h1>

  return(
    texto
  )
}