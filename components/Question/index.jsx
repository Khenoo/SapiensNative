import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: orange;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function Question({ children }) {
  return <Container>{children}</Container>
}

export default Question