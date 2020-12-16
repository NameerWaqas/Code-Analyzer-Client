/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  TextInput,
  Header
} from 'react-native';

import { WebView } from 'react-native-webview';

const App: () => React$Node = () => {
  let screenWidth = Dimensions.get('window').width;

  let [screenText, setScreenText] = useState("")
  let [tokenSet, setTokenSet] = useState("here token set will be overwriiten")

  let splittedText = screenText.split('');
  let jsonText = JSON.stringify(splittedText)

  let fetchOptions = {
    method: "POST",
    body: jsonText,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  }
  let sendRequest = () => {
    fetch("https://code-analyzer.herokuapp.com/tokenset", fetchOptions)
      .then((res) => res.json())
      .then(jsonText => setTokenSet(jsonText))
  }

  return (
    <>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        onScrollEndDrag={() => sendRequest()}
      >

        <View style={{ width: screenWidth, flex: 1 }}>
          <Text style={{ flex: 1, backgroundColor: "#1d3557", color: "white", width: screenWidth, textAlign: 'center', fontSize: 30 }}>
            Editor
          </Text>
          <TextInput multiline={true} numberOfLines={50} style={{ backgroundColor: "#e5e5e5", flex: 12, textAlignVertical: "top" }}
            placeholder="Enter here" onChangeText={(text) => setScreenText(text)} />
        </View>

        <Console screenWidth={screenWidth} tokenSet={tokenSet} />

        <View style={{ display: "flex", flexDirection: "column", width: screenWidth }}>
          <WebView style={{ flex: 1, width: screenWidth }} source={{ uri: 'https://github.com/NameerWaqas/CodeAnalyzer' }} />
        </View>

      </ScrollView>
    </>
  );
};

function Console({ screenWidth, tokenSet }) {
  let [consoleText, SetConsoleText] = useState("")
  useEffect(() => {
    let temp = ""
    let str;
    if (Array.isArray(tokenSet)) {
      for (let i = 0; i < tokenSet.length; i++) {
        // temp += "( " + tokenSet[i][0].toString() + "," + tokenSet[i][1].toString() + "," + tokenSet[i][2].toString() + " )";
        str = tokenSet[i].join(' , ');
        temp += "( "+ str+ " ) "
      }
      SetConsoleText(temp)
      temp = ""
    }
  }, [tokenSet])

  return (
    <View style={{ width: screenWidth }}>
      <Text style={{ flex: 1, backgroundColor: "#1d3557", color: "white", width: screenWidth, textAlign: 'center', fontSize: 30 }}>
        Console
  </Text>
      <TextInput multiline={true} numberOfLines={100} style={{fontSize:15, backgroundColor: "#d3d3d3", width: screenWidth, flex: 12, textAlignVertical: 'top' }}
        editable={false} placeholder={consoleText} placeholderTextColor="black"/>
    </View>
  )
}

export default App;
