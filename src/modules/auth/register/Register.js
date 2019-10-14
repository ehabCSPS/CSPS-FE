import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput
  } from 'react-native';
  import { MKTextField , MKColor  } from 'react-native-material-kit';
  import Icon from 'react-native-vector-icons/FontAwesome'

const Register = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.head}>
            <Icon.Button name="arrow-left" backgroundColor='#000' color='#FF3200'
        style={styles.icon} onPress={() => props.navigation.pop()}>
            </Icon.Button>
            <Text style={styles.headText}>Sign Up</Text>
            </View>
            <View style={styles.body}>
            <Text style={styles.emailLabel}>Name</Text>
            <MKTextField
            tintColor={MKColor.Silver}
            textInputStyle={{color: MKColor.Silver,fontSize:18}}
            placeholder="name"
            placeholderTextColor='#fff'
              style={styles.textfield}
            />
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
                <Text  style={styles.buttonTitleLogin}>Sign Up</Text>
                </LinearGradient>
            </TouchableOpacity>
            <View style={styles.gotoSignUp}>
            <Text  style={styles.signInLabel}>You already have Account ?</Text>
            <TouchableOpacity style={styles.signInButton} onPress={() => props.navigation.push('Login')}>
                <Text  style={styles.buttonTitleSignIn}>Sign In</Text>
            </TouchableOpacity>
            </View>
            
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        height:'100%',
        backgroundColor:'#000'
    },
    headText:{
        fontSize:35,
        margin:25,
        color:'#fff'
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
    textfield:{
        marginLeft:25,
        width:'90%'
        },
    footer:{
        width: '100%', 
        height: '33.333%',
         flexDirection: 'column',
         alignItems:'center',  
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
        padding:10,
        color:'#fff'
    },
    gotoSignUp:{
        flexDirection:'row',
        margin:40,
        marginTop:20
    },
    signInLabel: {
        color:'#fff',
        fontSize:17,
        marginRight:10,
    },
    buttonTitleSignIn: {
        color:'#fff',
        fontSize:17,
        fontWeight:'bold'
    },
})

export default Register