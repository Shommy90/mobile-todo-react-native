import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/reducer";

function ModalScreen({ navigation }) {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const onSaveNote = (value) => {
    dispatch(addItem(value));
    navigation.navigate("List");
  };

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="ios-close" color="#101010" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.modalContainer}>
          <Text style={{ color: "#444", fontSize: 18 }}>
            What do you want to do?
          </Text>
          <TextInput
            style={styles.textInput}
            numberOfLines={1}
            onChangeText={(value) => setValue(value)}
            value={value}
            clearButtonMode="while-editing"
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => onSaveNote(value)}
          >
            <Ionicons
              name="ios-arrow-dropright-circle"
              size={36}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "35%",
    width: "100%",
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
  },
  closeButtonContainer: {
    position: "absolute",
    alignItems: "flex-end",
    right: 10,
    top: 5,
  },
  closeButton: {
    backgroundColor: "#d3d3d3",
    borderRadius: 20,
    width: 30,
    height: 30,
    top: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    height: 50,
    width: 240,
    borderColor: "gray",
    borderBottomWidth: 1,
  },
  submitButton: {
    marginTop: 20,
    backgroundColor: "#2B7D98",
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
});

export default ModalScreen;
