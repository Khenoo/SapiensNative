function Button(props) {
  const cor = props.cor
  const escrever = props.escrever
  const onClick = props.onClick

  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex',
        background: cor,
        color: 'black',
        padding: '10px 25px',
        margin: '6px',
        border: 'dotted',
        borderRadius: '30px',
        fontSize: '18px',
        cursor: 'pointer'
      }}
    >
      {escrever}
    </button>
  )
}

export default Button