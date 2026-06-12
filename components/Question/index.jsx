import styled from 'styled-components'
import { View } from 'react-native'


function Question({ children }) {
  return <view style={{
      width: '100%',
      flex: 1,
      backgroundColor: 'orange',
      backgroundSize: 'cover',
      backgroundPosition: 'center',

      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
  }}
  >{children}</view>
}

export default Question