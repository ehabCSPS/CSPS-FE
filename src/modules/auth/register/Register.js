import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Animated,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {MKTextField, MKColor} from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = props => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAwareScrollView
        style={{backgroundColor: '#000'}}
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={styles.container}
        scrollEnabled={false}>
        <View style={styles.head}>
          <Icon.Button
            name="arrow-left"
            backgroundColor="#000"
            color="#FF3200"
            style={styles.icon}
            onPress={() => props.navigation.pop()}
          />
          <Text style={styles.headText}>Sign Up</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.names}>
            <View style={styles.name}>
              <Text style={styles.emailLabel}>First Name</Text>
              <MKTextField
                tintColor={MKColor.Silver}
                textInputStyle={{color: MKColor.Silver, fontSize: 17}}
                placeholder="first name"
                placeholderTextColor="#fff"
                style={styles.textfield}
              />
            </View>
            <View style={styles.name}>
              <Text style={styles.emailLabel}>Last Name</Text>
              <MKTextField
                tintColor={MKColor.Silver}
                textInputStyle={{color: MKColor.Silver, fontSize: 17}}
                placeholder="last name"
                placeholderTextColor="#fff"
                style={styles.textfield}
              />
            </View>
          </View>
          <Text style={styles.emailLabel}>Email</Text>
          <MKTextField
            tintColor={MKColor.Silver}
            textInputStyle={{color: MKColor.Silver, fontSize: 17}}
            placeholder="email"
            placeholderTextColor="#fff"
            keyboardType="email-address"
            style={styles.textfield}
          />
          <Text style={styles.emailLabel}>Username</Text>
          <MKTextField
            tintColor={MKColor.Silver}
            textInputStyle={{color: MKColor.Silver, fontSize: 17}}
            placeholder="username"
            placeholderTextColor="#fff"
            keyboardType="email-address"
            style={styles.textfield}
          />
          <Text style={styles.emailLabel}>Password</Text>
          <MKTextField
            tintColor={MKColor.Silver}
            textInputStyle={{color: MKColor.Silver, fontSize: 17}}
            placeholder="password"
            j
            password={true}
            placeholderTextColor="#fff"
            style={styles.textfield}
          />
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.loginButton}>
            <LinearGradient
              colors={['#761700', '#FF3200']}
              style={styles.linearGradient}>
              <Text style={styles.buttonTitleLogin}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.gotoSignUp}>
            <Text style={styles.signInLabel}>You already have Account ?</Text>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => props.navigation.push('Login')}>
              <Text style={styles.buttonTitleSignIn}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#000',
  },
  headText: {
    fontSize: 35,
    margin: 25,
    color: '#fff',
  },
  icon: {
    // marginRight:300,
    marginLeft: 15,
    marginTop: 25,
  },
  emailLabel: {
    fontSize: 18,
    margin: 25,
    marginBottom: 10,
    color: '#c7c7c7',
  },
  emailInput: {
    fontSize: 20,
    marginLeft: 25,
    marginTop: -20,
  },
  passwordLabel: {
    fontSize: 20,
    margin: 25,
  },
  passwordInput: {
    fontSize: 20,
    marginLeft: 25,
    marginTop: -20,
  },
  head: {},
  body: {},
  textfield: {
    marginLeft: 25,
    width: '90%',
    marginTop: -10,
  },
  name: {
    flexDirection: 'column',
    width: '50%',
  },
  names: {
    flexDirection: 'row',
    marginTop: -20,
  },
  footer: {
    width: '100%',
    height: '33.333%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    borderRadius: 5,
    textAlignVertical: 'center',
  },
  loginButton: {
    width: '80%',
    height: '28%',
    marginTop: 30,
    textAlignVertical: 'center',
  },

  buttonTitleLogin: {
    color: '#fff',
    fontSize: 25,
    padding: 10,
  },
  gotoSignUp: {
    flexDirection: 'row',
    margin: 40,
    marginTop: 20,
  },
  signInLabel: {
    color: '#c7c7c7',
    fontSize: 17,
    marginRight: 10,
  },
  buttonTitleSignIn: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Register;
