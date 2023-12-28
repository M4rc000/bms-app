import React, { useState } from 'react';
import { View, Text, StatusBar, Image, Button, TextInput, TouchableOpacity, ImageBackground, Platform } from 'react-native';
import {BlurView} from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
const image = require('../assets/login.png');
const logo = require('../assets/favicon.png');


export default function index() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const Login = () => {
    console.log('Username: ' + username + '\n' + 'Password: ' + password);
    alert('Username: ' + username + '\n' + 'Password: ' + password);
  }

  return (
    <ImageBackground source={image} resizeMode='cover' style={styles.image}>
      <View style={styles.containerLogo}>
        <View style={styles.logoContent}>
          <Image source={logo}></Image>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.usernameContainer}>
            <TextInput style={styles.username} placeholderTextColor={'#fff'} placeholder='Username' value={username}
              onChangeText={(text) => setUsername(text)}/>
          </View>
          <View style={styles.passwordContainer}>
            <TextInput secureTextEntry={!showPassword} style={styles.password} placeholderTextColor={'#fff'} placeholder='Password' value={password}
              onChangeText={(text) => setPassword(text)}/>
            <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
              <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={24} color='#fff'/>
            </TouchableOpacity>
          </View>
          <View style={styles.btnContainer}>
            <View style={styles.buttonWrapper}>
              <Button title="Login" color={'#219C90'} onPress={Login} />
            </View>
          </View>
          <View style={styles.hr} />
          <View style={styles.simplyContainer}>
            <Text style={styles.simply}>Don't have an account ? <Text style={styles.span}>Register</Text></Text>
            <Text style={styles.forgot}>Forgot password ?</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  containerLogo: {
    flex: 1,
    margin: 'auto',
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 75,
  },
   logoContent: {
    marginBottom: 0,
    paddingBottom: 0,
    backgroundColor: '#fefefe',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  content: {
    margin: 40,
    backgroundColor: "#343541",
    opacity: .8,
    width: 350,
    height: 400,
    borderRadius: 25,
    textAlign: 'center',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  hr: {
    borderBottomColor: '#fff',
    borderBottomWidth: .5,
    width: '80%', 
    marginVertical: 10,
    marginTop: 30,
    margin: 25,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameContainer:{
    alignSelf: 'center',
  },
  username: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    marginTop: 80,
    borderRadius: 20,
    borderColor: '#ffff',
    textAlign: 'center',
    color: '#fff',
  },
  passwordContainer: {
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    position: 'relative',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  password: {
    flex: 1,
    height: 40,
    borderWidth: 2,
    padding: 10,
    borderRadius: 20,
    borderColor: '#ffff',
    color: '#fff',
    textAlign: 'center',
  },  
  eyeIcon: {
    position: 'absolute',
    right: 3,
    padding: 10,
  },
  btnContainer: {
    width: 200,
    height: 39,
    borderWidth: 2,
    padding: 0,
    marginTop: 15,
    borderRadius: 20,
    borderColor: '#ffff',
    alignSelf: 'center',
  },
  buttonWrapper: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  simplyContainer: {
    marginTop: 1,
  },
  simply: {
    textAlign: 'center',
    color: '#ffff',
    margin: 5,
    padding: 5,
  },
  span: {
    color: '#83A2FF',
  },
  forgot: {
    textAlign: 'center',
    color: '#B6BBC4',
    borderBottomColor: '#ffff',
    margin: 5,
    padding: 2,
  }
});