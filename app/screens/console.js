import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Dimensions, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import * as Animatable from 'react-native-animatable';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height

export default function Console({ tokenSet, setConsoleVisiblity,sendRequest }) {

    let [consoleText, SetConsoleText] = useState("")
    let handleButtonPress = ()=>{
                setConsoleVisiblity((prev) => {
                    if (prev == false) sendRequest();
                    return !prev
        })
    }
    useEffect(() => {
        let temp = ""
        let str;
        if (Array.isArray(tokenSet)) {
            for (let i = 0; i < tokenSet.length; i++) {
                str = tokenSet[i].join(' , ');
                temp += "( " + str + " ) ";
            }
            SetConsoleText(temp)
            temp = ""
        }
    }, [tokenSet])

    return (
        <View style={{ width: screenWidth ,flex:1}}>
            <Button block onPress={handleButtonPress}
                style={style.consoleButton}
            ><Animatable.Text animation="pulse" iterationCount={15}
             style={{fontSize:20,color:"white"}}>Terminal</Animatable.Text></Button>

            <TextInput multiline={true} numberOfLines={100} style={style.consoleInput}
                editable={false} placeholder={consoleText} placeholderTextColor="white" />
        </View>
    )
}

let consoleHeight = screenHeight -70;
let style = StyleSheet.create(
    {
        consoleButton: {
            height:50,
            backgroundColor:"#161a1d",
            color:"white",
            
        },
        consoleInput: {
            fontSize: 15,
            backgroundColor: "#343a40",
            width: screenWidth,
            // flex: 10,
            textAlignVertical: 'top',
            height:consoleHeight
        }
    }
)