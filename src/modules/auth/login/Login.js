import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {connect} from 'react-redux';
import {MKTextField, MKColor} from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  validateEmail,
  validatePassword,
} from './../../../global/functions/validation';
import {login} from './state/actions';
const Login = ({loginSuccess, login, loginFailed, navigation}) => {
  const [user, setUser] = useState({email: '', password: ''});
  const handleEmail = text => {
    setUser({...user, email: text});
  };
  const handlePassword = text => {
    setUser({...user, password: text});
  };
  const submitLogin = () => {
    // according to back-end we log in with username and password so we validate only password
    if (validatePassword(user.password)) {
      login(user);
    } else {
      //show error
    }
  };
  useEffect(() => {
    if (loginSuccess) {
      //should navigate to dashboard
    }
    if (loginFailed) {
      //show error
    }
  }, [loginSuccess, loginFailed]);
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Icon.Button
          name="arrow-left"
          backgroundColor="#000"
          color="#FF3200"
          style={styles.icon}
          onPress={() => navigation.pop()}></Icon.Button>
        <Text style={styles.headText}>Login</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.emailLabel}>Email</Text>
        <MKTextField
          tintColor={MKColor.Silver}
          textInputStyle={{color: MKColor.Silver, fontSize: 18}}
          placeholder="email"
          name="email"
          onChangeText={handleEmail}
          placeholderTextColor="#fff"
          keyboardType="email-address"
          style={styles.textfield}
        />
        <Text style={styles.emailLabel}>Password</Text>
        <MKTextField
          tintColor={MKColor.Silver}
          textInputStyle={{color: MKColor.Silver, fontSize: 18}}
          placeholder="password"
          password={true}
          onChangeText={handlePassword}
          name="password"
          placeholderTextColor="#fff"
          style={styles.textfield}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={submitLogin} style={styles.loginButton}>
          <LinearGradient
            colors={['#761700', '#FF3200']}
            style={styles.linearGradient}>
            <Text style={styles.buttonTitleLogin}>Log In</Text>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.gotoSignUp}>
          <Text style={styles.signUpLabel}>You don't have account ?</Text>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.push('Register')}>
            <Text style={styles.buttonTitleSignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.forgotPasswordLabel}>Forgot My Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#000',
    height: '100%',
  },
  headText: {
    fontSize: 35,
    margin: 25,
    color: '#fff',
  },
  textfield: {
    marginLeft: 25,
    width: '90%',
    marginTop: -10,
  },
  icon: {
    // marginRight:300,
    marginLeft: 15,
    marginTop: 25,
  },
  emailLabel: {
    fontSize: 18,
    margin: 25,
    color: '#c7c7c7',
    marginTop: 30,
  },
  emailInput: {
    fontSize: 20,
    marginLeft: 25,
    marginTop: -20,
    color: '#fff',
  },
  passwordLabel: {
    fontSize: 18,
    margin: 25,
    color: '#fff',
  },
  passwordInput: {
    fontSize: 20,
    marginLeft: 25,
    marginTop: -20,
    color: '#fff',
  },
  head: {
    height: '33.333%',
  },
  body: {
    height: '33.333%',
    marginTop: -50,
  },
  footer: {
    width: '100%',
    height: '33.333%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
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
    marginBottom: 20,
  },
  signUpLabel: {
    color: '#c7c7c7',
    fontSize: 17,
    marginRight: 10,
  },
  buttonTitleSignUp: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    width: '40%',
    height: '28%',
  },
  forgotPasswordLabel: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
  };
};
const mapStateToProps = state => {
  return {
    loginSuccess: state.login.loginSuccess,
    loginFailed: state.login.loginFailed,
    token: state.login.token,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
