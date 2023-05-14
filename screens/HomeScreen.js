import React from 'react'
import { View, Text, StyleSheet,Image, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Canteens from './Canteens'
import { useNavigation } from '@react-navigation/native'


export default function HomeScreen(route) {
     const navigation = useNavigation()
     const [selectedValue, setSelectedValue] = React.useState("Select Canteen");

     route.params = { name: selectedValue };
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            
            <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={styles.profileImage} />
            <View>
                 <Text style={{color:'#707070'}}>
                 Order Now!
                 </Text>
            
            <TouchableOpacity style={{flexDirection: 'row',alignItems: 'flex-end',width: 145,}} onPress={() => navigation.navigate('Canteens')}>
            <Text style={{
                 fontSize: 20,
                 fontWeight: 'bold',
                 color: '#000',
                }}>
                route.params.name
                </Text>
                <Icon name="chevron-down" size={12} color="#707070"
                style={{marginLeft: 5, marginBottom:3}} 
                />
            </TouchableOpacity>
           </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#E6E3E3',
        },

    header: {
        flex: 0.07,
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingBottom: 0,
        alignItems: 'center',
        paddingLeft: 10,
        width: '100%',
        
        },

    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
        overflow: 'hidden',
        marginRight: 5,
    },
})


