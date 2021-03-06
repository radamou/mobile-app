import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Button  from '../components/Button';
import { styles } from './LinksScreenStyle';
import { createTwoButtonAlert } from '../components/actions/SimpleAlert';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Button
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => createTwoButtonAlert(
          () => WebBrowser.openBrowserAsync('https://docs.expo.io')
        )}
      />

      <Button
        icon="md-compass"
        label="Read the React Navigation documentation"
        onPress={() => createTwoButtonAlert(
          () => WebBrowser.openBrowserAsync('https://reactnavigation.org')
        )}
      />

      <Button
        icon="ios-chatboxes"
        label="Ask a question on the forums"
        onPress={() => createTwoButtonAlert(
          () => WebBrowser.openBrowserAsync('https://forums.expo.io')
        )}
        isLastOption
      />
    </ScrollView>
  );
}