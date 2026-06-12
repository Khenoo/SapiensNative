function fundoQuestion(props){

    const escreverpergunta = props.escreverpergunta

return(
    <div style={{
            display: 'flex',
            backgroundColor: 'lightyellow',
            height: '70%',
            width: '70%',
            border: 'dotted',
            justifyContent: 'center',
            padding: '30px',
            alignItems:'center'
        }}>
        <p
            style={{
                fontSize: '30px',
                textAlign: 'center',
                width: '85%',
                lineHeight: '1.5',
            }}
        >
            {escreverpergunta}
            
        </p>
</div>

)
}
export default fundoQuestion