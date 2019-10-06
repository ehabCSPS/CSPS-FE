import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
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
    Button,
    ImageBackground
  } from 'react-native';

  import CarImg from '../../../assets/images/travel.png'
  import backImg from '../../../assets/images/back.png'

const Language = (props) => {


    return(
        <ImageBackground source={backImg} style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
        <View style={styles.head} >
        <Text style={styles.headText}>Welcome to CSPS</Text>
        <Text style={styles.headText}>Explore Us</Text>
            </View>
        <View style={styles.body} >
            <Image source={CarImg} style={styles.image}/>
            </View>
        <View style={styles.footer} >

       
        <TouchableOpacity  style={styles.button}  >
        <LinearGradient colors={['#ffb800', '#ff9600']} style={styles.linearGradient}>
                <Text  style={styles.buttonTitle}>عربي</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.push('Home')}>
            <LinearGradient colors={['#ffb800', '#ff9600']}
             style={styles.linearGradient}
            >
                <Text  style={styles.buttonTitle}>English</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
      </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
    },
    head: {
        width: '100%', 
        height: '33.333%',
         flexDirection: 'column',
         alignItems:'center',  
         paddingTop:30
    },
    image: {
        width:'90%',
        height:'120%',
        alignSelf: 'center',
        paddingTop:10
    },
    headText: {
        fontSize:25,
        marginTop:20
    },
    body: {
        width: '100%', 
        height: '33.333%',
        flexDirection: 'column',
        marginTop:-25
    },
    footer: {
        width: '100%', 
        height: '33.333%',
         flexDirection: 'column',
         alignItems:'center',  
         marginTop:40
    },
    linearGradient: {
        width:'100%',
        height:'100%',
        alignItems:'center',
        paddingTop:5,
        borderRadius:5,
        textAlignVertical:'center' 
    },
    button: {
        width:'80%',
        height:'20%',
        marginTop: 30,
        textAlignVertical:'center' 
    },
    buttonTitle:{
        color:'#fff',
        fontSize:25,
    }
  });

export default Language