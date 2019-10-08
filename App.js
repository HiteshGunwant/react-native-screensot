/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  PermissionsAndroid,
  TouchableOpacity
} from 'react-native';
import ViewShot from "react-native-view-shot";
import CameraRoll from "@react-native-community/cameraroll";

const App = () => {
  async function requestCameraPermission(uri) {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App WRITE_EXTERNAL_STORAGE Permission',
          message:
            'Cool Photo App needs access to your WRITE_EXTERNAL_STORAGE ' +
            'so you can take awesome WRITE_EXTERNAL_STORAGE.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('WRITE_EXTERNAL_STORAGE permission granted', granted);
        console.log("callViewFunc ", uri);
        CameraRoll.saveToCameraRoll(uri, 'photo')
        // callViewFunc.viewShot.capture().then(uri => {
        //   console.log("do something with ", uri);
        // })
      } else {
        console.log('WRITE_EXTERNAL_STORAGE permission denied', granted);
      }
    } catch (err) {
      console.warn(err);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ViewShot ref={(takesot) => { viewshot = takesot; }}
        options={{ format: "jpg", quality: 1 }} >

        <View style={{ backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>

          <Text>asdasdasD</Text>
          <Image source={require('./download.png')} style={{ width: 200, height: 200, resizeMode: "contain" }} />
          <Text>asdasdasd</Text>
          <Text>asdasd</Text>
          <Text>asd</Text>
          <Text style={{
            color: 'blue',
            fontWeight: 'bold',
            fontSize: 30,
            marginTop: "20%"
          }}>SAVE TO CameraRoll </Text>
          <Text>asdasdasd</Text>
          <Text>asdasd</Text>
          <Text>asd</Text>
          <Text
            onPress={() => viewshot.capture().then(uri => {
              console.log("do something with ", uri);
              requestCameraPermission(uri)
              // CameraRoll.saveToCameraRoll(uri, 'photo')
            })

            }
            style={{
              fontWeight: 'bold',
              color: 'green',
              fontWeight: 'bold',
              fontSize: 30,
              marginTop: "20%"
            }}>SAVE TO CameraRoll </Text>

          <Text>asdasdasd</Text>
        </View>


      </ViewShot>

      <View style={{
        backgroundColor: "#fff", justifyContent: "center", alignItems: "center",
        position: "absolute", zIndex: 999, top: 0, bottom: 0, left: 0, right: 0, flex: 1
      }}>
        <TouchableOpacity
          onPress={() => {
            viewshot.capture().then(uri => {
              console.log("do something with ", uri);
              requestCameraPermission(uri)
              // CameraRoll.saveToCameraRoll(uri, 'photo')
            })
          }}
          style={{ height: 200, width: 200, boderRadius: 20, backgroundColor: "red", justifyContent: "center", alignItems: "center" }}>
          <Text style={{
            fontWeight: 'bold',
            color: 'black',
            fontWeight: 'bold',
            fontSize: 30,
            marginTop: "20%"
          }}>Save TO CameraRoll</Text>
        </TouchableOpacity>

      </View>



      {/* <View style={{ height: "100%", }} >
          <Text onPress={() => requestCameraPermission()} >...The Scroll View Content Goes Here...</Text>
        </View> */}
    </View>
  );
};



export default App;
