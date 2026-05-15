import styled from 'styled-components'
import carta from '@/assets/sapienscomcor.png'
import carta2 from '@/assets/sapienssemcor.png'
import React from 'react'
import { ImageBackground, View, Text, StyleSheet } from 'react-native'

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function Fundo({ children }) {
  return <><ImageBackground source={carta} resizeMode='center'><Container>{children}</Container></ImageBackground></>
}

export default Fundo