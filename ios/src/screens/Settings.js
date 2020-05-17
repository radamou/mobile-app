import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { ScrollView, Text , SectionList} from 'react-native';

export default function Settings() {
    return (
        <ScrollView>
            <SectionList>
                <OptionButton
                    icon="md-school"
                    label="Read the Expo documentation"
                    onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
                />
            </SectionList>

        </ScrollView>
    )
}