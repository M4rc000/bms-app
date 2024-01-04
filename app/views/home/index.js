import { React, useState} from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import homeStyles from '../../styles/homeStyles.js';
import modalStyles from '../../styles/modalStyles.js';

const image = require('../../../assets/login.png');

export default function Index() {
  const styles = homeStyles();
  const style = modalStyles();
  const [modalVisible, setModalVisible] = useState(false); // MODAL

  return (
    <View>
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
            }}>
            <View style={style.centeredView}>
            <View style={style.modalView}>
                <Text style={style.modalText}>Hello World!</Text>
                <Pressable
                style={[style.button, style.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={style.textStyle}>Close</Text>
                </Pressable>
            </View>
            </View>
        </Modal>
        <View style={styles.navContainer}>
            <TouchableOpacity onPress={() => console.log('Menu button pressed')} style={styles.menuIcon}>
                <Ionicons name="ios-menu" size={32} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Home</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.infoIcon}>
                <MaterialIcons name="notifications-active" size={30} color="black" />
            </TouchableOpacity>
        </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.titleBody}>Hello, Marco Antonio</Text>
        <Text style={styles.textBody}>How are you today?</Text>
        <Text style={{ fontSize: 15, marginTop: 30, marginLeft: 30 }}>
            Let's find popular quotes
        </Text>
        <View style={{ marginTop: 5 }}>
            <View style={styles.cardImageLeft}>
                <Image source={image} style={{ flex: 1, width: 100, height: 100, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}></Image>
                <View style={{ flex: 2, marginLeft: 10, marginTop: 15 }}>
                    <Text>
                        Today is hard 
                    </Text>
                    <Text>
                        Tommorow will be worst
                    </Text>
                    <Text>
                        But today after tommorow will be sunshine
                    </Text>
                </View>
            </View>
            <View style={styles.cardImageRight}>
                <View style={{ flex: 2, marginLeft: 10, marginTop: 15 }}>
                    <Text>
                        Today is hard 
                    </Text>
                    <Text>
                        Tommorow will be worst
                    </Text>
                    <Text>
                        But today after tommorow will be sunshine
                    </Text>
                </View>
                <Image source={image} style={{ flex: 1, width: 100, height: 100, borderTopRightRadius: 20, borderBottomRightRadius: 20 }}></Image>
            </View>
            <View style={styles.cardImageLeft}>
                <Image source={image} style={{ flex: 1, width: 100, height: 100, borderTopLeftRadius: 20, borderBottomLeftRadius: 20 }}></Image>
                <View style={{ flex: 2, marginLeft: 10, marginTop: 15 }}>
                    <Text>
                        Today is hard 
                    </Text>
                    <Text>
                        Tommorow will be worst
                    </Text>
                    <Text>
                        But today after tommorow will be sunshine
                    </Text>
                </View>
            </View>
        </View>
        <View style={{ flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'center', margin: 30 }}>
            <Text>
                <TouchableOpacity style={styles.shape}>
                    <MaterialCommunityIcons name="shape-square-plus" size={24} color="#fff" style={{ zIndex: 999 }}/>
                </TouchableOpacity>
            </Text>
        </View>
      </View>
    </View>
  );
}
