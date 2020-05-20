import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Text } from 'react-native';
import { styles } from './DebugStyle';

export default function DevelopmentModeNotice() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );
  
      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled: your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } 
  
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
  
  function handleLearnMorePress() {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
  }
