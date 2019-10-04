import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity,
    Alert,
    Button
  } from 'react-native';

  import CarImg from '../../../assets/images/car.jpg'

const Language = () => {

    return(
        <View style={styles.container}>
        <View style={styles.head} >
        <Text style={styles.headText}>Welcome to Whatever</Text>
        <Text style={styles.headText}>Explore Us</Text>
            </View>
        <View style={styles.center} >
            <Image source={CarImg} style={styles.image}/>
            </View>
        <View style={styles.footer} >
        <TouchableOpacity 
        style={styles.button}
        >
                <Text  style={styles.buttonTitle}>عربي</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text  style={styles.buttonTitle}>English</Text>
            </TouchableOpacity>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor:'#fff'
    },
    head: {
        width: '100%', 
        height: '33.333%',
         flexDirection: 'column',
         alignItems:'center',  
         paddingTop:30
    },
    image: {
        width:'50%',
        height:'100%',
        alignSelf: 'center'
    },
    headText: {
        fontSize:25,
        marginTop:20
    },
    center: {
        width: '100%', 
        height: '33.333%',
    },
    footer: {
        width: '100%', 
        height: '33.333%',
         flexDirection: 'column',
         alignItems:'center',  
    },
    button: {
        width:'70%',
        height:'20%',
        alignItems:'center',
        alignSelf:'center',
        alignContent:'center',
        marginTop: 30,
        backgroundColor: '#f2a011',
        borderRadius:10,
        borderWidth: 1,
        borderColor:'#f2a011',  
        textAlignVertical:'center'   
    },
    buttonTitle:{
        color:'#fff',
        fontSize:25,
      
    }
  });

export default Language