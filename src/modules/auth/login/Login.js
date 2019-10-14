import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    
  } from 'react-native';

  import { MKTextField , MKColor  } from 'react-native-material-kit';
  import Icon from 'react-native-vector-icons/FontAwesome'

  const Login = (props) => {

      return(
        <View style={styles.container}>
            <View style={styles.head}>
            <Icon.Button name="arrow-left" backgroundColor='#000' color='#FF3200'
        style={styles.icon} onPress={() => props.navigation.pop()}>
            </Icon.Button>
            <Text style={styles.headText}>Login</Text>
            </View>
            <View style={styles.body}>
            <Text style={styles.emailLabel}>Email</Text>
            <MKTextField
            tintColor={MKColor.Silver}
            textInputStyle={{color: MKColor.Silver,fontSize:18}}
            placeholder="email"
            placeholderTextColor='#fff'
            keyboardType='email-address'
              style={styles.textfield}
            />
            <Text style={styles.emailLabel}>Password</Text>
            <MKTextField
             tintColor={MKColor.Silver}
              textInputStyle={{color: MKColor.Silver,fontSize:18}}
               placeholder="password"j
               password={true}
               placeholderTextColor='#fff'
              style={styles.textfield}
            />
            </View>
            <View style={styles.footer}>
            <TouchableOpacity  style={styles.loginButton}  >
        <LinearGradient colors={['#761700', '#FF3200']} style={styles.linearGradient}>
                <Text  style={styles.buttonTitleLogin}>Log In</Text>
                </LinearGradient>
            </TouchableOpacity>

            <View style={styles.gotoSignUp}>
            <Text  style={styles.signUpLabel}>You don't have account ?</Text>
            <TouchableOpacity style={styles.signupButton} onPress={() => props.navigation.push('Register')}>
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
        backgroundColor: '#000',
        height:'100%'
    },
    headText:{
        fontSize:35,
        margin:25,
        color:'#fff'
    },
    textfield:{
    marginLeft:25,
    width:'90%'
    },
    icon: {
       // marginRight:300,
       marginLeft:15,
       marginTop:25
    },
    emailLabel:{
        fontSize:20,
        margin:25,
        color:'#fff'
    },
    emailInput:{
        fontSize:20,
        marginLeft:25,
        marginTop:-20,
        color:'#fff'
    },
    passwordLabel:{
        fontSize:20,
        margin:25,
        color:'#fff'
    },
    passwordInput:{
        fontSize:20,
        marginLeft:25,
        marginTop:-20,
        color:'#fff'
    },
    head:{
        height: '33.333%',
    },
    body:{
        height: '33.333%',
        marginTop:-50
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
        margin:40,
        marginBottom:20
    },
    signUpLabel: {
        color:'#fff',
        fontSize:17,
        marginRight:10,
    },
    buttonTitleSignUp: {
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
    },
    forgotPasswordButton: {
        width:'40%',
        height:'28%',
    },
    forgotPasswordLabel: {
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
    }

  })

  export default Login