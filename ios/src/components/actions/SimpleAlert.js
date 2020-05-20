import { StyleSheet, Alert } from "react-native";

function createTwoButtonAlert(callBack) {
    Alert.alert(
    "Confirmation",
    "Etes-vous sur de vouloir faire cette action ?",
    [
        {
            text: "Cancel",
            onPress: () => console.log('cancel action'),
            style: "cancel"
        },
        { 
            text: "OK", 
            onPress: () => callBack()
        }
    ],
    {cancelable: false}
    )
};

function createThreeButtonAlert() {
    Alert.alert(
    "Confirmer",
    "Etes-vous sur de vouloir réaliser cette action ?",
    [
        {
            text: "Demandez moi plus tard",
            onPress: () => console.log("Ask me later pressed")
        },
        {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
        },
        { 
            text: "OK", 
            onPress: () => console.log("OK Pressed") 
        }
    ],
    { cancelable: false }
)};
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center"
    }
  });

  export {
      createTwoButtonAlert,
      createThreeButtonAlert
  }
  