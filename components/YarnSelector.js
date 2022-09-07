import { View, Text } from 'react-native'
import React from 'react'

const YarnSelector = () => {
  return (
    <View style={{
      marginHorizontal: 15, paddingHorizontal: 15, paddingVertical: 10, marginTop: 5,
      backgroundColor: '#D7DCCA80'
      //'#EFECE7'
      ,
      borderRadius: 10,
      shadowColor: '# 8C9284',
      shadowOffset: { width: -2, height: -4 },
      shadowOpacity: 0.1,
      //shadowRadius: 3, 
    }}>
      {console.log(yarn)}

      <View style={{
        flexDirection: 'row', backgroundColor: '#DCFC98', justifyContent: 'space-between',
        //borderWidth:  1 , 

        //borderColor: 'silver', 
        borderRadius: 10,
        //shadowColor: '# 8C9284',
        //shadowOffset: {width: 2, height: 4},
        //shadowOpacity: 0.1,
        //shadowRadius: 2,  
        padding: 5
      }}>
        <View style={{}}>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>{yarn.selectedYarnType} </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', }}>
          {yarn.mix && yarn.mix.selectedCashMix ? <Text style={{ fontSize: 14, fontWeight: '600' }}>Cash {yarn.mix.selectedCashMix} </Text> : null}
          {yarn.mix && yarn.mix.selectedMerinosMix ? <Text style={{ fontSize: 14, fontWeight: '600' }}> Merinos {yarn.mix.selectedMerinosMix} </Text> : null}
          {yarn.mix && yarn.mix.selectedSilkMix ? <Text style={{ fontSize: 14, fontWeight: '600' }}> Silk {yarn.mix.selectedSilkMix} </Text> : null}


        </View>

      </View>
      <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingHorizontal: 5 }}>
        <Text style={{ fontSize: 14, fontWeight: '600' }}>{yarn.selectedYarnWeight} mts per 100 grams</Text>
        <Text style={{ fontSize: 14, color: 'grey' }}>Weight </Text>

      </View>
      <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingHorizontal: 5 }}>
        <Text style={{ fontSize: 14, fontWeight: '600' }}>{yarn.selectedYarnManufacturer} </Text>
        <Text style={{ fontSize: 14, color: 'grey' }}>Manufactured by </Text>

      </View>
      {yarn.weight ? <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingHorizontal: 5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end', }}>
          {edit ? <>
            <TextInput
              style={{
                height: 25,
                backgroundColor: '#BFC3AE',
                //margin: 10,
                width: 45,
                borderRadius: 5,
                padding: 5,
                fontSize: 14,
                fontWeight: 'bold'
              }}
              textAlign={'left'}
              onChangeText={(value) => onChangeNewWeight(value)}
              value={newWeight}
              placeholder="500 "
              placeholderTextColor={'#867D59'}

              keyboardType="numeric"
            />
            <View style={{ height: 25, justifyContent: 'center' }}>
              <Text>grams</Text>
            </View>
            <Pressable
              style={{ width: 25, height: 25, marginLeft: 10, borderRadius: 15, backgroundColor: '#fdccA0', justifyContent: 'center', alignItems: 'center' }}
              onPress={() => {
                setEdit(false)
                yarn.weight = newWeight
              }}
            >
              <Feather name="check" size={25} color="black" />
            </Pressable>
          </> :
            <Text style={{ fontSize: 14, fontWeight: '600' }}>{yarn.weight} grams </Text>}
          {!edit ? <Pressable
            style={{ width: 25, height: 25, marginLeft: 10, borderRadius: 15, backgroundColor: '#DCFC98', justifyContent: 'center', alignItems: 'center' }}
            onPress={() => setEdit(true)}
          >
            <Feather name="edit-3" size={20} color="black" />
          </Pressable> : null}
        </View>
        <Text style={{ fontSize: 14, color: 'grey' }}>Cone weight </Text>


      </View> : null}

      <View style={{ marginTop: 5, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingHorizontal: 5 }}>
        {yarn.isWorsted ? <Text style={{ fontSize: 14, fontWeight: '600' }}>Worsted</Text> : null}
        {yarn.isCarded ? <Text style={{ fontSize: 14, fontWeight: '600' }}>Carded</Text> : null}
        {yarn.isAngled ? <Text style={{ fontSize: 14, fontWeight: '600' }}>Angled </Text> : null}
        {yarn.isWorsted || yarn.isCarded || yarn.isAngled ? <Text style={{ fontSize: 14, color: 'grey', marginLeft: 100 }}>Particularity</Text> : null}

      </View>

    </View>
  )
}

export default YarnSelector