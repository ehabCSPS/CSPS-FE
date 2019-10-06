import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
  } from 'react-native';

  import CarImg from '../../../assets/images/car.jpg'

const Home = (props) => {

    return(
        <View style={styles.container}>
        <View style={styles.head} >
        <Text style={styles.headText}>Welcome to CSPS</Text>
        <Text style={styles.headText}>Explore Us</Text>
            </View>
        <View style={styles.body} >
            <Image source={CarImg} style={styles.image}/>
            </View>
        <View style={styles.footer} >

       
        <TouchableOpacity  style={styles.button}  onPress={() => props.navigation.push('Login')}  >
        <LinearGradient colors={['#ffb800', '#ff9600']} style={styles.linearGradient}>
                <Text  style={styles.buttonTitle}>Log in</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text  style={styles.buttonTitleSignUp}>Sign up</Text>
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
    body: {
        width: '100%', 
        height: '33.333%',
    },
    footer: {
        width: '100%', 
        height: '33.333%',
         flexDirection: 'column',
         alignItems:'center',  
         marginTop:30
    },
    linearGradient: {
        width:'100%',
        height:'100%',
        alignItems:'center',
        borderRadius:20,
        paddingTop:5,
        textAlignVertical:'center' 
    },
    button: {
        width:'70%',
        height:'20%',
        marginTop: 10,
        textAlignVertical:'center' 
    },
    buttonTitle:{
        color:'#fff',
        fontSize:25,
    },
    buttonTitleSignUp:{
        color:'#000',
        fontSize:20,
        alignSelf:'center'
    }
  });

export default Home