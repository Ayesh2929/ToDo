import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, StatusBar, TextInput, TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";

export default function SignUp() {
    const [text, onChangeText] = React.useState('');
    const [text1, onChangeText1] = React.useState('');
    const [text2, onChangeText2] = React.useState('');
return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Create Account</Text>
        <Text style={styles.subTitle}>Sign up to get started!</Text>
      </View>
        <SafeAreaView style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder='Enter your username'
            placeholderTextColor="#999"
            value={text}
            />
        </View>
        
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText1}    
            placeholder='Enter your email'
            placeholderTextColor="#999"
            value={text1}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText2}
            placeholder='Enter your password'
            placeholderTextColor="#999"
            secureTextEntry={true}
            value={text2}
          />
        </View>
      </SafeAreaView>
        <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.signInButton}>
          <Image 
            source={require('./assets/img/register.png')}
            style={styles.socialIcon}
            />
            <Text style={styles.signInButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
        </View>
        <View style={styles.signUpContainer}></View>
        <Text style={styles.signUpText}>Already have an account? </Text>
        <Link href='/SignIn.tsx' style={styles.signUpLink}>Sign In</Link>

        <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
    mainTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    },
    subTitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    },
    formContainer: {
    width: '100%',
    marginBottom: 30,
    },
    inputContainer: {
    marginBottom: 20,
    },
    inputLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
    },
    input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    backgroundColor: '#f9f9f9',
    },
    btnsContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
    },
    signInButton: {
    backgroundColor: '#9dd327',
    borderRadius: 16,
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#9dd327',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    },
    signInButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginLeft: 8,
    },
    socialIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
    },
    divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
    },
    dividerLine: {
    flex: 1,
    height: 1.5,
    backgroundColor: '#e0e0e0',
    },
    dividerText: {
    marginHorizontal: 15,
    color: '#636e72',
    fontWeight: '600',
    },
    signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    },
    signUpText: {
    color: '#555',
    },
    signUpLink: {
    color: '#4CAF50',
    fontWeight: 'bold',
    marginLeft: 5,
    },
});

