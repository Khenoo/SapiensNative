import React from 'react'
import styled from 'styled-components/native'
import carta from '@/assets/carta.jpg'
import { ImageBackground } from 'react-native'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const BackgroundStyled = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
`

function Background({ children }) {
  return (
    <BackgroundStyled
      source={carta}
      resizeMode="contain"
    >
      <Container>
        {children}
      </Container>
    </BackgroundStyled>
  )
}

export default Background