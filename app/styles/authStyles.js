import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const authStyles = () => {
  const [fontsLoaded] = useFonts({
    'LongCang-Regular': require('../../assets/fonts/LongCang-Regular.ttf'),
  });

const styles = StyleSheet.create({
    containerLogo: {
      flex: 1,
      margin: 'auto',
      alignSelf: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 20,
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
    contentLogin: {
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
    contentRegister: {
      margin: 40,
      marginTop: 85,
      backgroundColor: "#343541",
      opacity: .8,
      width: 350,
      height: 500,
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
    contentForgotPassword: {
      margin: 40,
      marginTop: 90,
      backgroundColor: "#343541",
      paddingTop: 5,
      opacity: .8,
      width: 350,
      height: 300,
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
      marginTop: 20,
      margin: 25,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titlePage:{
      fontFamily: fontsLoaded ? 'LongCang-Regular' : 'System',
      color: 'white',
      margin: 5,
      padding: 10,
      fontSize: 30,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
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
      marginTop: 30,
      borderRadius: 20,
      borderColor: '#ffff',
      textAlign: 'center',
      color: '#fff',
    },
    nameContainer:{
      alignSelf: 'center',
    },
    name: {
      width: 300,
      height: 40,
      margin: 12,
      borderWidth: 2,
      padding: 10,
      marginTop: 10,
      borderRadius: 20,
      borderColor: '#ffff',
      textAlign: 'center',
      color: '#fff',
    },
    emailContainer:{
      alignSelf: 'center',
    },
    email: {
      width: 300,
      height: 40,
      margin: 12,
      borderWidth: 2,
      padding: 10,
      marginTop: 10,
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
      width: 150,
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

  return styles;
};

export default authStyles;