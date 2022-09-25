import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker';


const Pick = ({ title, data, onValueChange, selectedValue }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: 'flex-start' }}>
        <Text style={styles.text}>{title}</Text>
      </View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 30, width: '110%', alignSelf: 'center' }}
        onValueChange={onValueChange}
        itemStyle={styles.pickerItem}>

        {data.map((item, index) => (
          <Picker.Item label={item.label} value={item.value} key={index} />
        ))}
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#d5e9e3',
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f3e2be6'
  },
  pickerItem: {
    fontSize: 16,
    height: 40,
    fontWeight: 'bold',
    color: '#2C2400',

  }
})

export default Pick