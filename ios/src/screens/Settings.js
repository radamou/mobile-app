import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList
} from "react-native";
import { data } from '../data/settings';
import Colors from "../constants/Colors";

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Settings = () => (
  <SafeAreaView style={styles.container}>
    <SectionList style={styles.section}
      sections={data}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
    />
  </SafeAreaView>
);

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: Colors.white,
  },
  section: {
    marginTop: 15
  },
  item: {
    backgroundColor: Colors.white,
    padding: 15,
    marginVertical: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: Colors.gray
  },

  title: {
    fontSize: 15
  }
});
