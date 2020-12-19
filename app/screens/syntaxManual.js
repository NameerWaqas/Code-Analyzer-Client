import React from 'react';
import { Table, Row, Rows, Col, Cols } from 'react-native-table-component';
import { ScrollView,View, Dimensions, StyleSheet,Text } from 'react-native';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export default function SyntaxManual() {
    let tableHead = ["Keyword", "Class part"];
    let tableData = [
        ["int", "Data type"],
        ["float", "Data type"],
        ["char", "Data type"],
        ["string", "Data type"],
        ["bool", "Data type"],
        ["likho","print"],
        ["parho","input"],
        ["agar", "if"],
        ["warna", "else"],
        ["jabtak", "while"],
        ["karo","do"],
        ["+","+"],
        ["-","-"],
        ["*","*"],
        ["/","/"],
        ["=","="],
        ["!=","!="],
        ["<","<"],
        [">",">"],
        [">=",">="],
        [">=",">="],
        ["+o","++"],
        ["-o","--"],
        ["#","comment"],
        ["#~","Multi comment"]
    ]

    return (
        <ScrollView style={style.container}>
            <Text style={style.header}> Syntax Manual </Text>
            <Table style={style.table} borderStyle={{borderWidth: 2, borderColor: '#014f86'}}>
                <Row data={tableHead} style={style.head} textStyle={style.text}/>
                <Rows data={tableData} textStyle={style.text}/>
            </Table>
        </ScrollView>
    )
}

let style = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
        overflow: "scroll",
        backgroundColor:"#212f45"
    },
    table: {
        width: screenWidth,
        overflow:"scroll"
    },
    head:{
        backgroundColor:"#212f45",
        height:70
    },
    text:{
        margin:6,
        fontSize:20,
        color:"white"
    },
    header: {
        height: 51,
        backgroundColor: "#5c677d",
        color: "white",
        width: screenWidth,
        textAlign: 'center',
        fontSize: 30,
        marginBottom:5
    }
})