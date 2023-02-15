import { Alert, Pressable, Text, StyleSheet, View, Dimensions, Image ,TextInput} from 'react-native';


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
});