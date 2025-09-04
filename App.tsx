import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {

  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Sign In to</Text>

      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder='Pleace Enter Email'
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder='Pleace Enter Password'
          value={text}
        />
      </SafeAreaView>

      <View style={styles.btns} >
        <Button title="SignIn" color="#fff" onPress={() => alert('Button pressed!')} />
      </View>
                  <View style={styles.socialButtonsContainer}>

                  
                    <TouchableOpacity style={styles.socialButtonText}>
                <Image 
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/733/733547.png' }} 
                  style={styles.socialIcon}
                />
                <Text style={styles.socialButtonText}>Facebook</Text>
              </TouchableOpacity>
</View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btns: {
    marginTop: 20,
    backgroundColor: '#9dd327',
    borderRadius: 10,
    overflow: 'hidden',
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 10,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3b5998',
    marginLeft: 10,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3b5998',
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
