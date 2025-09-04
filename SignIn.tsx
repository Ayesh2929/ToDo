
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Pressable } from 'react-native';
import {Link} from 'expo-router';

export default function SignIn() {

  const [text, onChangeText] = React.useState('');
  const [text1, onChangeText1] = React.useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mainTitle}>Welcome Back</Text>
        <Text style={styles.subTitle}>Sign in to continue to your account</Text>
      </View>

      <SafeAreaView style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder='Enter your email'
            placeholderTextColor="#999"
            value={text}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText1}
            placeholder='Enter your password'
            placeholderTextColor="#999"
            secureTextEntry={true}
            value={text1}
          />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot?</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <View style={styles.btnsContainer}>
        <TouchableOpacity style={styles.signInButton}>
          <Image 
            source={require('./assets/img/register.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Don't have an account? </Text>
        
<Link href='/SignIn.tsx' style={styles.signUpLink}>Sign Up</Link>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    marginBottom: 40,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 10,
    color: '#2d3436',
  },
  subTitle: {
    fontSize: 16,
    color: '#636e72',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    position: 'relative',
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#2d3436',
  },
  input: {
    height: 56,
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    paddingHorizontal: 20,
    borderRadius: 16,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 3,
  },
  forgotPassword: {
    position: 'absolute',
    right: 15,
    top: 45,
  },
  forgotPasswordText: {
    color: '#9dd327',
    fontWeight: '600',
    fontSize: 14,
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
    color: '#636e72',
  },
  signUpLink: {
    color: '#9dd327',
    fontWeight: '700',
  },
});