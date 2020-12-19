import React,{useState} from 'react';
import {
  ScrollView,
  Dimensions,
} from 'react-native';


// ==== Componet Imports 
import WebViewScreen from './screens/webView';
import Editor from './screens/editor';
import SyntaxManual from "./screens/syntaxManual"

export default function App(){


  return (
    <>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
      >
        <Editor />
        <SyntaxManual />
        <WebViewScreen />
      </ScrollView>
    </>
  );
};
