import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>Home Screen</Text>
            <StatusBar/>
            
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',

    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },



});