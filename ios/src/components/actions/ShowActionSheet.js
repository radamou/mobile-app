import { ActionSheetIOS } from "react-native";

export const showActionSheet = () =>
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: ["Cancel", "Save", "Reset"],
        destructiveButtonIndex: 2,
        cancelButtonIndex: 0
      },
      buttonIndex => {
        if (buttonIndex === 0) {
          // cancel action
        } else if (buttonIndex === 1) {
          setResult(Math.floor(Math.random() * 100) + 1);
        } else if (buttonIndex === 2) {
          setResult("🔮");
        }
      }
    );