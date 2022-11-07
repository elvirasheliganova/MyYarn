import { View, Text } from 'react-native'
import React from 'react'

const SearchDataBox = (data) => {
  return (
    <View
      style={{
        backgroundColor: '#C0D3C7',
        borderRadius: 8,
        padding: 5,
        marginHorizontal: 5,
        height: 30
      }}>
      <Text style={{}}>{data.data}</Text>
    </View>
  )
}

export default SearchDataBox