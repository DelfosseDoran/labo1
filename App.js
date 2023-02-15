//framework: react-native || expo

import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Image, Pressable, Alert, ScrollView, ActivityIndicator, StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { imgex } from './componments/api';

//egen component
import ButtonEx, { Imgex, InformationEx, MapEx ,BatteryEx,CameraEx } from './componments/api';

export default function App() {

  const testPress = () => {
    console.log("🌈");
  }
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.content}
      // behavior={Platform.OS === 'ios' ? 'posittion' : 'padding'}
      // keyboardVerticalOffset='30'
      >
        <ScrollView >
          <Text style={styles.header}>If this is loading!</Text>
          <ActivityIndicator style={styles.loader} size='large' color={'#00f'} />
          <ButtonEx />
          {/* <Modal></Modal> */}
          <Imgex />
          {/* <StatusBar style="auto" /> */}
          <Text style={styles.header}>all my information</Text>
          <Text >wow this keybord dus't clip away</Text>
          <InformationEx/>
          <MapEx/>
          <BatteryEx/>
          <CameraEx/>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    //elke view is flex
    //elke view staat op flex direction: column 
    flex: 1,//voledige ruimte
    backgroundColor: '#eee',
    // paddingHorizontal: 32,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 24,
    paddingtop: 32,
    paddingBottom: 32,
    color: '#fff',
  }
});
