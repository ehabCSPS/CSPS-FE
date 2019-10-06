import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput
  } from 'react-native';

  const Login = () => {

      return(
        <View style={styles.container}>
            <View style={styles.head}>
            <Text style={styles.headText}>Login</Text>
            </View>
            <View style={styles.body}>
            <Text style={styles.emailLabel}>Email</Text>
            <TextInput placeholder='Email' style={styles.emailInput} keyboardType='email-address' />
            <Text style={styles.emailLabel}>Password</Text>
            <TextInput placeholder='Password' style={styles.passwordInput} secureTextEntry={true} />
            </View>
            <View style={styles.footer}>
            <TouchableOpacity  style={styles.loginButton}  >
        <LinearGradient colors={['#ffb800', '#ff9600']} style={styles.linearGradient}>
                <Text  style={styles.buttonTitleLogin}>Log In</Text>
                </LinearGradient>
            </TouchableOpacity>

            <View style={styles.gotoSignUp}>
            <Text  style={styles.signUpLabel}>You don't have account ?</Text>
            <TouchableOpacity style={styles.signupButton}>
                <Text  style={styles.buttonTitleSignUp}>Sign Up</Text>
            </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.button}>
            <Text  style={styles.forgotPasswordLabel}>Forgot My Password</Text>
            </TouchableOpacity>
            </View>


        </View>
      )
  }

  const styles = StyleSheet.create({

    container:{
        flexDirection:'column',
    },
    headText:{
        fontSize:35,
        margin:25,
    },
    emailLabel:{
        fontSize:20,
        margin:25,
    },
    emailInput:{
        fontSize:20,
        marginLeft:25,
        marginTop:-20
    },
    passwordLabel:{
        fontSize:20,
        margin:25,
    },
    passwordInput:{
        fontSize:20,
        marginLeft:25,
        marginTop:-20
    },
    head:{

    },
    body:{

    },
    footer:{
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
        borderRadius:5,
        textAlignVertical:'center' 
    },
    loginButton: {
        width:'80%',
        height:'28%',
        marginTop: 30,
        textAlignVertical:'center' 
    },

    buttonTitleLogin:{
        color:'#fff',
        fontSize:25,
        padding:10
    },
    gotoSignUp:{
        flexDirection:'row',
        margin:40
    },
    signUpLabel: {
        color:'#000',
        fontSize:17,
        marginRight:10,
    },
    buttonTitleSignUp: {
        color:'#000',
        fontSize:17,
        fontWeight:'bold'
    },
    forgotPasswordButton: {
        width:'40%',
        height:'28%',
    },
    forgotPasswordLabel: {
        color:'#000',
        fontSize:17,
        fontWeight:'bold'
    }

  })

  export default Login