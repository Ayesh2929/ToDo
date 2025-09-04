import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function App() {

  const [text, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Welcome Back</Text>
      <Text style={styles.subTitle}>Sign in to continue to your account</Text>

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
        <TouchableOpacity style={styles.socialButtonText}>
                <Image 
                  source={{ uri: 'https://cdn-icons-png.flaticon.com/512/300/300221.png' }} 
                  
                  style={styles.socialIcon}
                />
          <Text style={styles.socialButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
                  <View style={styles.divider}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>OR</Text>
              <View style={styles.dividerLine} />
            </View>

                        <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.signUpLink}>Sign Up</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  subTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,

  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    borderRadius: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 20,
    width: 300,
  },
  socialButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000ff',
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',

  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: 300,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#666',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signUpText: {
    color: '#666',
  },
  signUpLink: {
    color: '#9dd327',
    fontWeight: 'bold',
  },


});
