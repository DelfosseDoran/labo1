//framework: react-native || expo

import { StatusBar } from 'expo-status-bar';
import { Modal, Image, Pressable, Alert, Button, ActivityIndicator, StyleSheet, Text, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//egen component

export default function App() {
  const showModel = () => {
    Alert.alert(
      "Hello Bear🐻","This is a test",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") },
        { test: "delete", onPress: () => console.log("delete"), styles: "destructive" },
      ],
      { cancelable: false }
    );
  }
  const testPress = () => {
    console.log("🌈");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>If this is loading!</Text>
        <ActivityIndicator style={styles.loader} size='large' color={'#00f'} />
        <Text style={styles.header}>This is a button and tap it!</Text>
        {/*button goes hire*/}
        {/* <Button title="Press me" onPress={console.log("test")}/> */}
        <Pressable style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
          },
          styles.Button,]} onPress={showModel}>
          <Text style={styles.ButtonText}>Press me</Text>
        </Pressable>
        {/* <Modal></Modal> */}
        <Text style={styles.header}>Press me</Text>
        <Image
          objectFit='cover'
          style={styles.image}
          source={{ uri: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', }}
        />
        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  image: {
    width: Dimensions.get('window').width - 48,
    height: 300,
    marginTop: 16,
    marginBottom: 32,
    // marginLeft:-24,
  },
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
    paddingVertical: 32,
    color: '#fff',
  },
  header: {
    fontSize: 32,
  },
  loader: {
    marginTop: 16,
    marginBottom: 32,
  },
  Button: {
    backgroundColor: '#00f',
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 32,
  },
  ButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
