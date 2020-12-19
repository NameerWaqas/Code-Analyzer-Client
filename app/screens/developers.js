import React from "react";
import { View, StyleSheet, Dimensions } from 'react-native';
import { Card, Container, CardItem, Text, Body } from 'native-base';
import * as Animatable from 'react-native-animatable';

let screenWidth = Dimensions.get('window').width
let screenHeight = Dimensions.get('window').height


export default function Developers() {
    return (
        <Container style={style.container}>
            <Text style={style.text}> Developers </Text>
            <Animatable.View style={style.view} animation="pulse" iterationCount="infinite">
                <Card>
                    <CardItem style={style.card}>
                        <Body>
                            <Text style={{width:"100%",textAlign:"center",color:"white"}}>
                                Nameer Waqas
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Animatable.View>
            <Animatable.View style={style.view} animation="pulse" iterationCount="infinite">
                <Card>
                    <CardItem style={style.card}>
                        <Body >
                            <Text style={{width:"100%",textAlign:"center",color:"white"}}>
                                Ammar Sohail
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Animatable.View>
            <Animatable.View style={style.view} animation="pulse" iterationCount="infinite">
                <Card >
                    <CardItem style={style.card}>
                        <Body>
                            <Text style={{width:"100%",textAlign:"center",color:"white"}}>
                                Zaid Hassan
                            </Text>
                        </Body>
                    </CardItem>
                </Card>
            </Animatable.View>
        </Container>
    )
}
let style = StyleSheet.create(
    {
        container: {
            width: screenWidth,
            height: screenHeight,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor:"#e9ecef"
        },
        view: {
            width: screenWidth - screenWidth / 4,
        },
        text: {
            backgroundColor: "#1d3557",
            color: "white",
            width: screenWidth,
            textAlign: 'center',
            fontSize: 30,
            height: 50,
            position: "absolute",
            top: 0
        },
        card:{
            backgroundColor:"#1d3557"
        }
    }
)