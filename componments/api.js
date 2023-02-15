import React, { useEffect, useState } from 'react';
import { Alert, Pressable, Text, StyleSheet, View, Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import * as Battery from 'expo-battery';
import { Camera, CameraType } from 'expo-camera';

export default function ButtonEx() {
    const showModel = () => {
        Alert.alert(
            "Hello Bear🐻", "This is a test",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
                { text: "Delete", onPress: () => console.log("delete"), styles: "destructive" },
            ],
            { cancelable: false }
        );
    }
    return (
        <View>
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
        </View>
    )
}
export function Imgex() {
    return (
        <View>
            <Text >a real picture</Text>
            <Image
                objectFit='cover'
                style={styles.image}
                source={{ uri: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', }}
            />
        </View>
    )
}
export function InformationEx() {
    return (<View><Text >Name</Text>
        <TextInput style={styles.input} />
        <Text >Email Ardress</Text>
        <TextInput keyboardType='email-address' style={styles.input} /></View>)
}
export function MapEx() {
    return (
        <View>
            <MapView style={styles.map}></MapView>
        </View>
    )
}
export function BatteryEx() {
    const [batteryLevel, setBatteryLevel] = useState(0);
    const getBatteryLevel = async () => {
        try {

            const batteryLevel = await Battery.getBatteryLevelAsync();
            setBatteryLevel(batteryLevel);
        } catch (e) {
            console.log("Err batt", e)
        }
    }
    const lissenToBatterychange = () => {
        console.log("watch")
        Battery.addBatteryLevelListener(event => {
            console.log("event", event)
        })
    }
    useEffect(() => {
        getBatteryLevel();
        lissenToBatterychange();
    }, [])
    return (
        <>
            <Text >Battery Level: {Math.round(batteryLevel * 100, 2)}%</Text>

        </>
    )
}
export function CameraEx() {
    const [type, setType] = useState(CameraType.back);
    // const [permission, requestPermission] = Camera.useCameraPermissions();
    useEffect(() => {
        Camera.requestCameraPermissionsAsync().then(Permissions => { console.log("Permissions", Permissions) })
        // if (!permission) ...
    }, []);
    // if (!permission.granted) ...

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.Button} onPress={toggleCameraType}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}
const styles = StyleSheet.create({
    input: {
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 16,
        marginTop: 8,
    },
    image: {
        width: Dimensions.get('window').width - 48,
        height: 300,
        marginTop: 16,
        marginBottom: 32,
        // marginLeft:-24,
    },
    header: {
        fontSize: 24,
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
    map: {
        width: Dimensions.get('window').width - 48,
        height: 500,
        // backgroundColor: '#ccc',
    },
    camera: {
        width: Dimensions.get('window').width - 48,
        height: 500,
    }
});