import { React, useState} from 'react';
import { View, Text, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import homeStyles from '../../styles/homeStyles.js';
import modalStyles from '../../styles/modalStyles.js';

const image = require('../../../assets/images/login.png');
const colImage = require('../../../assets/images/user/Marco.png');

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
            setModalVisible(!modalVisible);
            }}>
            <View style={style.modal}>
                <View style={style.modalHeader}>
                    <Text style={style.textHeader}>Notifications</Text>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={style.closeBtn}>
                            <Ionicons name="close-outline" size={30} color="white" />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={style.modalBody}>
                    <View style={style.colContainer}>
                        <View style={style.column}>
                            <Image source={colImage} style={style.colImage}></Image>
                            <Text style={style.colText}>
                                <Text style={{ 
                                fontWeight: '500' }}>
                                    Marco Antonio{' '}
                                </Text>
                                <Text style={{ fontWeight: '300'}}>
                                    added new post.
                                </Text>
                            </Text>
                            <Text style={{ color: 'grey', position: 'absolute', marginLeft: 56, marginTop: 30, fontSize: 12 }}> 5 mins ago</Text>
                        </View>
                        <View style={style.column}>
                            <Image source={colImage} style={style.colImage}></Image>
                            <Text style={style.colText}>
                                <Text style={{ 
                                fontWeight: '500' }}>
                                    Marco Antonio{' '}
                                </Text>
                                <Text style={{ fontWeight: '300'}}>
                                    added new post.
                                </Text>
                            </Text>
                            <Text style={{ color: 'grey', position: 'absolute', marginLeft: 56, marginTop: 30, fontSize: 12 }}> 5 mins ago</Text>
                        </View>
                        <View style={style.column}>
                            <Image source={colImage} style={style.colImage}></Image>
                            <Text style={style.colText}>
                                <Text style={{ 
                                fontWeight: '500' }}>
                                    Marco Antonio{' '}
                                </Text>
                                <Text style={{ fontWeight: '300'}}>
                                    added new post.
                                </Text>
                            </Text>
                            <Text style={{ color: 'grey', position: 'absolute', marginLeft: 56, marginTop: 30, fontSize: 12 }}> 5 mins ago</Text>
                        </View>
                        <View style={{...style.column, borderBottomLeftRadius: 20, borderBottomRightRadius: 20, borderBottomWidth: 0  }}>
                            <Image source={colImage} style={style.colImage}></Image>
                            <Text style={style.colText}>
                                <Text style={{ 
                                fontWeight: '500' }}>
                                    Marco Antonio{' '}
                                </Text>
                                <Text style={{ fontWeight: '300'}}>
                                    added new post.
                                </Text>
                            </Text>
                            <Text style={{ color: 'grey', position: 'absolute', marginLeft: 56, marginTop: 30, fontSize: 12 }}> 5 mins ago</Text>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
        <View style={styles.navContainer}>
            <TouchableOpacity onPress={() => console.log('Menu button pressed')} style={styles.menuIcon}>
                <Ionicons name="ios-menu" size={32} color="white" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Home</Text>
            <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.infoIcon}>
                <MaterialCommunityIcons name="email-newsletter" size={28} color="white" />
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