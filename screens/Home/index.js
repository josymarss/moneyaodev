import React, { useState,useEffect } from "react";
import Netinfo from '@react-native-community/netinfo'
import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

//my imports 
import style from './style' // arquivos seprados mais organizacao, leia style components, componentes reutilizaveis, e menos code na page inicial 

export default function Home({ navigation }) {
  
  const navigateToUsers = () => {
    navigation.navigate("Users");
  }
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    
    //create account here! first check he internet connection
    Netinfo.fetch().then(state => {
      state.isConnected ? navigation.navigate('Users') : alert('check your internet conncetion')
    })

  },[])

  return (
    <View style={styles.container}>
      {/* <Button title="Go to users" onPress={navigateToUsers} /> */}

      <View style={styles.loginArea}>
        <TouchableOpacity style={styles.entrarBtn} onPress={navigateToUsers}>
          <Text style={styles.btnTxt}>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.criarConta}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.btn1Txt}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
        style={styles.Modal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableHighlight
              style={styles.closeModalBtn}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.closeBtn}>+</Text>
            </TouchableHighlight>
            <View style={styles.modalHeader}>
              <Text style={styles.headerText}>Número de telefone</Text>
            </View>
            <View style={styles.modalBody}>
              {/* <Image source={require('')} /> */}
              <TextInput
                placeholder="Digite o seu número de telefone"
                keyboardType="phone-pad"
                style={styles.input}
              ></TextInput>

              <TouchableOpacity
                style={styles.modalEntrarBtn}
                onPress={navigateToUsers}
              >
                <Text style={styles.btnTxt}>Criar conta</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

