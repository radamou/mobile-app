import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { showActionSheet } from '../components/actions/ShowActionSheet';

export default ActionSheet = () => {
    const [result, setResult] = useState("🔮");

    return (
        <View style={styles.container}>
          <Text style={styles.result}>{result}</Text>
          <Button onPress={showActionSheet} title="Show Action Sheet" />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    result: {
      fontSize: 64,
      textAlign: "center"
    }
  });