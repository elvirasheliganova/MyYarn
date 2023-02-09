import { View, Text } from 'react-native'
import React from 'react'

const SaveButton = () => {
  return (
    <View>
      <TouchableOpacity
        style={styles.saveYarnContainer}
        onPress={() => {

          if (cone) {
            setYarns(prevYarns =>
              [...prevYarns, cone])

            // console.log(yarns)
            //console.log(cone)

            /*  Alert.alert(
               "You've saved New Cone! ",
               "Choose what's next",
               [
                 {
                   text: "Add more cones",
                   onPress: () => navigation.navigate('Cone Images'),
                 },
                 { text: "Go to YarnBox", onPress: () => navigation.navigate('Yarn Box') }
               ]
             ); */
            // 
          }
          else {
            Alert.alert(
              "Please confirm ",
              "Please confirm cone data",
              [{
                text: "OK",
              }]
            );
          }

        }}
      >
        <Text style={styles.saveYarnText}>Save Yarn</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SaveButton