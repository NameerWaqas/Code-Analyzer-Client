import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions} from 'react-native';
import {Container,Button} from 'native-base';
import Console from "./console"



let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default function Editor() {

    let [screenText, setScreenText] = useState("");
    let [tokenSet, setTokenSet] = useState("here token set will be overwritten");
  
    let splittedText = screenText.split('');
    
    let sendRequest = () => {
      let jsonText = JSON.stringify(splittedText)
      let fetchOptions = {
        method: "POST",
        body: jsonText,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        }
      }
      fetch("https://code-analyzer.herokuapp.com/tokenset", fetchOptions)
        .then((res) => res.json())
        .then(jsonText => setTokenSet(jsonText))
    }


    let [consoleVisiblity,setConsoleVisiblity] = useState(false)
    return (
        <View style={{ width: screenWidth, flex: 1, overflow:'hidden',flexDirection:'column'}}>
            <Text style={style.text}> Editor </Text>

            <TextInput multiline={true} numberOfLines={50} style={style.textInput}
                placeholder="Start coding here.." placeholderTextColor="black" onChangeText={(text) => setScreenText(text)} />

            <Container style={consoleVisiblity?style.conatinerShow:style.containerHide}>
                <Console setConsoleVisiblity={setConsoleVisiblity} tokenSet={tokenSet} sendRequest={sendRequest}/>
            </Container>
        </View>
    )
}


let containerPosition =screenHeight - 70;
const style = StyleSheet.create({
    text: {
        flex: 1,
        backgroundColor: "#1d3557",
        color: "white",
        width: screenWidth,
        textAlign: 'center',
        fontSize: 30,
        height:50
    },

    textInput: { backgroundColor: "#ced4da", flex: 13, textAlignVertical: "top" },

    containerHide: {
        position: 'absolute',
        top:containerPosition,
        height: screenHeight,
        backgroundColor:"red",
        overflow:'hidden',
        width:screenWidth,
    },
    conatinerShow:{
        position:"absolute",
        top:0,
        width:screenWidth
    }
})