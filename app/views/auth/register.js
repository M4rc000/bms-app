import React, { useState } from 'react';
import { View, Text, Image, Button, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import authStyles from '../../styles/authStyles.js';

const image = require('../../../assets/images/login.png');
const logo = require('../../../assets/images/favicon.png');


export default function register() {

  const styles = authStyles();
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
        <View style={styles.contentRegister}>
        <Text style={styles.titlePage}>| Register |</Text>
          <View style={styles.usernameContainer}>
            <TextInput style={styles.username} placeholderTextColor={'#fff'} placeholder='Username' value={username}
              onChangeText={(text) => setUsername(text)}/>
          </View>
          <View style={styles.nameContainer}>
            <TextInput style={styles.name} placeholderTextColor={'#fff'} placeholder='Name' value={username}/>
          </View>
          <View style={styles.emailContainer}>
            <TextInput style={styles.email} placeholderTextColor={'#fff'} placeholder='Email' value={username}/>
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
              <Button title="Register" color={'#219C90'} onPress={Login} />
            </View>
          </View>
          <View style={styles.hr} />
          <View style={styles.simplyContainer}>
            <Text style={styles.simply}>
              Already have an account? <Link href='/'><Text style={styles.span}>Login</Text></Link>
            </Text>
            <Link style={styles.forgot} href="/views/auth/forgotpassword">
              Forgot password ?
            </Link>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}