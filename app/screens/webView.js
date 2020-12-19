import React from 'react'
import { View,Dimensions} from 'react-native';
import { WebView } from 'react-native-webview';

export default function WebViewScreen() {
    let  screenWidth  = Dimensions.get('window').width

    return (
        <View style={{ display: "flex", flexDirection: "column", width: screenWidth }}>
            <WebView style={{ flex: 1, width: screenWidth }} source={{ uri: 'https://github.com/NameerWaqas/CodeAnalyzer' }} />
        </View>
    )
}