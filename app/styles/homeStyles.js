import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const homeStyles = () => {
  const [fontsLoaded] = useFonts({
    'LongCang-Regular': require('../../assets/fonts/LongCang-Regular.ttf'),
    'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
  });

const styles = StyleSheet.create({
    navContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#0f53bb',
        fontSize: 30,
        height: 50,
        alignItems: 'center',
    },
    menuIcon: {
        margin: 4,
        padding: 4,
    },
    infoIcon: {
        margin: 4,
        padding: 4,
    },
    headerText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18,
        margin: 12,
        fontFamily: fontsLoaded ? 'Montserrat-Bold' : 'System',
    },      
    bodyContainer:{
        backgroundColor: '#ebedf0',
        height: 900,
    },
    titleBody: {
        fontSize: 24,
        marginLeft: 15,
        marginTop: 15,
        padding: 10,
        fontWeight: '400',
    },
    textBody: {
        fontSize: 18,
        marginLeft: 30,
        fontWeight: '300',
    },
    cardImageLeft: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 380,
        height: 100,
        marginTop: 10,
        justifyContent: 'center',
        alignSelf:'center',
        borderRadius: 20,
    },
    cardImageRight: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 380,
        height: 100,
        marginTop: 10,
        justifyContent: 'center',
        alignSelf:'center',
        borderRadius: 20,
    },
    shape:{
        width: 50,
        height: 50,
        backgroundColor: '#6a6a6a',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

  return styles;
};

export default homeStyles;