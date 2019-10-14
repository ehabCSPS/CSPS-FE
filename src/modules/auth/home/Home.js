import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
  } from 'react-native';

  import CarImg from '../../../assets/images/gifSpeed.gif'
  import Icon from 'react-native-vector-icons/FontAwesome'

const Home = (props) => {

    return(
        <View style={styles.container}>
        <View style={styles.head} >
        <Icon.Button name="arrow-left" backgroundColor='#000' color='#FF3200'
        style={styles.icon} onPress={() => props.navigation.pop()}>
            </Icon.Button>
        <Text style={styles.headText}>Welcome to CSPS</Text>
        <Text style={styles.headText}>Explore Us</Text>
            </View>
        <View style={styles.body} >
            <Image source={CarImg} style={styles.image}/>
            </View>
        <View style={styles.footer} >

       
        <TouchableOpacity  style={styles.button}  onPress={() => props.navigation.push('Login')}  >
        <LinearGradient colors={['#761700', '#FF3200']} style={styles.linearGradient}>
                <Text  style={styles.buttonTitle}>Log in</Text>
                </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => props.navigation.push('Register')}>
                <Text  style={styles.buttonTitleSignUp}>Sign up</Text>
            </TouchableOpacity>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        backgroundColor: '#000'
    },
    head: {
        width: '100%', 
        height: '33.333%',
         flexDirection: 'column',
         alignItems:'center',  
         paddingTop:30,
         color:'#fff'
    },
    icon: {
        marginRight:320,
    },
    image: {
        width:'90%',
        height:'120%',
        alignSelf: 'center'
    },
    headText: {
        fontSize:25,
        marginTop:20,
        color:'#fff'
    },
    body: {
        width: '100%', 
        height: '33.333%',
        marginBottom:50,
        marginTop:-40
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
        borderRadius:5,
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
         color:'#fff',
        fontSize:20,
        alignSelf:'center'
    }
  });

export default Home