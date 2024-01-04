import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const modalStyles = () => {
    const [fontsLoaded] = useFonts({
        'LongCang-Regular': require('../../assets/fonts/LongCang-Regular.ttf'),
        'Montserrat-Bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
    });

    const style = StyleSheet.create({
        centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        },
        modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        },
        button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        },
        buttonOpen: {
        backgroundColor: '#F194FF',
        },
        buttonClose: {
        backgroundColor: '#2196F3',
        },
        textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        },
        modalText: {
        marginBottom: 15,
        textAlign: 'center',
        },
    });
    return style;
}

export default modalStyles;