import React, { useState } from "react";
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

export default function Home({ navigation }) {
  function navigateToUsers() {
    navigation.navigate("Users");
  }
  const [modalVisible, setModalVisible] = useState(false);

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 0,
    backgroundColor: "#E3EBEE",
  },
  loginArea: {
    backgroundColor: "#fff",
    width: "100%",
    height: 300,
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignContent: "center",
    alignItems: "center",
  },
  criarConta: {
    width: "80%",
    height: 50,
    borderRadius: 10,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    top: 99,
    borderWidth: 1,
    borderColor: "#07877D",
  },
  entrarBtn: {
    backgroundColor: "#07877D",
    width: "80%",
    height: 50,
    borderRadius: 10,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    top: 80,
  },
  modalEntrarBtn: {
    backgroundColor: "#07877D",
    width: "80%",
    height: 50,
    borderRadius: 10,
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    top: 115,
  },
  btnTxt: {
    color: "white",
    alignContent: "center",
    textAlign: "center",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  btn1Txt: {
    color: "#07877D",
    fontSize: 18,
  },
  Modal: {
    flex: 1,
    backgroundColor: "white",
    top: 20,
  },

  centeredView: {
    width: "100%",
    top: 80,
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  closeModalBtn: {
    position: "absolute",
    right: 30,
    top: 20,
  },
  closeBtn: {
    fontSize: 35,
    transform: [{ rotate: "45deg" }],
  },
  modalBody: {
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    top: 50,
  },
  modalHeader: {
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
    top: 26,
  },
  headerText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    top: 90,
    borderColor: "black",
    borderWidth: 1,
    width: 300,
    height: 40,
    borderRadius: 4,
    padding: 5,
    fontSize: 18,
  },
});
