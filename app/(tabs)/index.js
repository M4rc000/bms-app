import React, { useState } from 'react';
import { View, Text, StatusBar, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Image source={require('./assets/favicon.png')} />
      </View>
      <TextInput
        style={styles.username}
        placeholderTextColor={'#fff'}
        placeholder='Username'
      />
      <View style={styles.passwordContainer}>
        <TextInput
          secureTextEntry={!showPassword}
          style={styles.password}
          placeholderTextColor={'#fff'}
          placeholder='Password'
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePasswordVisibility}>
          <Ionicons
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            size={24}
            color='#fff'
          />
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Login" color={'#219C90'} onPress={() => console.log('Login pressed')} />
        </View>
      </View>
      <View style={styles.hr} />
      <View style={styles.simplyContainer}>
        <Text style={styles.simply}>Don't have an account ? <Text style={styles.span}>Register</Text></Text>
        <Text style={styles.forgot}>Forgot password ?</Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a2562',
  },
  hr: {
    borderBottomColor: '#fff',
    borderBottomWidth: .5,
    width: '80%', 
    marginVertical: 10,
    marginTop: 50,
  },
  username: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    marginTop: 50,
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
};