import React from 'react'
import { WebView } from 'react-native-webview';


const NewWebView = () => {
  return (
    <WebView
      source={{ uri: 'https://reactnative.dev' }}
    />
  )
}

export default NewWebView