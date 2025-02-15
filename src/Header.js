import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

function Header(props) {
  const { title } = props;
  const listItems = useSelector((state) => state.itemList);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.subTitle}>Left: {listItems.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2B7D98",
    height: 125,
    paddingTop: 20,
  },
  text: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "500",
  },
  subTitle: {
    paddingTop: 5,
    fontSize: 16,
    color: "#fff",
  },
});

export default Header;
