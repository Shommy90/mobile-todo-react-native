import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/reducer";
import { Ionicons } from "@expo/vector-icons";
import Header from "../Header";

function ListView() {
  const listItems = useSelector((state) => state.itemList);

  const dispatch = useDispatch();

  return (
    <View style={styles.listView}>
      {listItems.length !== 0 ? (
        <FlatList
          data={listItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <Text style={styles.itemTitle} numberOfLines={1}>
                {item.name}
              </Text>
              <TouchableOpacity
                onPress={() => dispatch(removeItem(item.id))}
                style={styles.buttonRemove}
              >
                <Ionicons name="ios-trash" color="#fff" size={20} />
              </TouchableOpacity>
            </View>
          )}
        />
      ) : (
        <Text style={{ fontSize: 30, color: "#999" }}>
          Your list is empty :(
        </Text>
      )}
    </View>
  );
}

function ListScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Header title={"Todo List"} />
        <ListView />
        <View style={styles.fabContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Modal")}
            style={styles.fabButton}
          >
            <Ionicons name="ios-add" color="#fff" size={70} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B7D98",
  },
  fabContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    right: 15,
    bottom: 20,
  },
  fabButton: {
    backgroundColor: "#2B7D98",
    borderRadius: 35,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  listView: {
    backgroundColor: "white",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 5,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 0.25,
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: "400",
  },
  buttonRemove: {
    borderRadius: 8,
    backgroundColor: "#ff333390",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

export default ListScreen;
