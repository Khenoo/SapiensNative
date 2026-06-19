import { View } from 'react-native'

function Question({
  children,
  cor = 'orange'
}) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: cor,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </View>
  )
}

export default Question