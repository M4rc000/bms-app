import React from 'react';
import { View, Text, Image, Button, TextInput, ImageBackground } from 'react-native';
import { Link } from 'expo-router';
import authStyles from '../../styles/authStyles.js';

const image = require('../../../assets/login.png');
const logo = require('../../../assets/favicon.png');


export default function forgotpassword() {
  const styles = authStyles();
  return (
    <ImageBackground source={image} resizeMode='cover' style={styles.image}>
      <View style={styles.containerLogo}>
        <View style={styles.logoContent}>
          <Image source={logo}></Image>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.contentForgotPassword}>
        <Text style={styles.titlePage}>| Forgot Password |</Text>
          <View style={styles.usernameContainer}>
            <TextInput style={styles.username} placeholderTextColor={'#fff'} placeholder='Email' 
              />
          </View>
          <View style={styles.btnContainer}>
            <View style={styles.buttonWrapper}>
              <Button title="Search" color={'#219C90'} />
            </View>
          </View>
          <View style={styles.hr} />
          <View style={styles.simplyContainer}>
            <Text style={styles.simply}>
              Don't have an account? <Link href='/views/auth/register'><Text style={styles.span}>Register</Text></Link>
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}