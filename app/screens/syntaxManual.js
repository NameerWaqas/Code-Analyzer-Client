import React from 'react';
import { Table, Row, Rows, Col, Cols } from 'react-native-table-component';
import { ScrollView, View, Dimensions, StyleSheet, Text } from 'react-native';
import { Container } from 'native-base'

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
        ["likho", "print"],
        ["parho", "input"],
        ["agar", "if"],
        ["warna", "else"],
        ["jabtak", "while"],
        ["karo", "do"],
        ["+", "+"],
        ["-", "-"],
        ["*", "*"],
        ["/", "/"],
        ["=", "="],
        ["!=", "!="],
        ["<", "<"],
        [">", ">"],
        [">=", ">="],
        [">=", ">="],
        ["+o", "++"],
        ["-o", "--"],
        ["#", "comment"],
        ["#~", "Multi comment"],
        // ["", ""],
    ]

    return (
        <ScrollView style={style.container} contentContainerStyle={{ justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Text style={style.header}> Syntax Manual </Text>
            <Table style={style.table} borderStyle={{ borderWidth: 0 }}>
                <Row data={tableHead} style={style.head} textStyle={style.text} />
                <Rows data={tableData} style={style.rows} textStyle={style.text} />
            </Table>
        </ScrollView>
    )
}

let style = StyleSheet.create({
    container: {
        width: screenWidth,
        // backgroundColor:"#212f45",               
        backgroundColor: "#edf2fb"
    },
    table: {
        width: screenWidth - screenWidth / 12,
        marginTop: 5,
        borderRadius: 20,
    },
    head: {
        // backgroundColor:"#212f45",
        backgroundColor: "#212f45",
        height: 70,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    text: {
        backgroundColor: "red",
        margin: 6,
        fontSize: 20,
        color: "white"
    },
    rows: {
        backgroundColor: "#284b63",
        borderTopWidth: 0,
        borderBottomWidth:2,
        borderBottomColor:"#212f45"
    },
    header: {
        height: 51,
        backgroundColor: "#212f45",
        color: "white",
        width: screenWidth,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 5
    },
})