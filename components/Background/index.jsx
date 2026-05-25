import React from 'react'
import styled from 'styled-components/native'
import { ImageBackground } from 'react-native'

import carta from '@/assets/carta.jpg'

const Container = styled.View`
  flex: 1;
`

const Conteudo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

function Background({ children }) {
  return (
    <Container>
      <ImageBackground
        source={carta}
        resizeMode="stretch"
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Conteudo>
          {children}
        </Conteudo>
      </ImageBackground>
    </Container>
  )
}

export default Background