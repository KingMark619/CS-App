
import React, {useState, useRef} from 'react'
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity} from 'react-native';
import { 
  getAuth,
  PhoneAuthProvider, 
  signInWithCredential } from 'firebase/auth';
import { FirebaseRecaptchaVerifierModal, FirebaseRecaptchaBanner } from 'expo-firebase-recaptcha';
import { initializeApp, getApp } from 'firebase/app';
import {app, db} from '../firebase'
// problem , i get verification code but it wont work. 
try {
  initializeApp({
    apiKey: "AIzaSyBYcuO-bQQuYXaZErQEjbjjdvdeJmSjOqM",
    authDomain: "congo-sante-cf770.firebaseapp.com",
    projectId: "congo-sante-cf770",
    storageBucket: "congo-sante-cf770.appspot.com",
    messagingSenderId: "362296323167",
    appId: "1:362296323167:web:1bc77121249591b1e6ffea",
    measurementId: "G-Q9S8CBDKHR"
  });
} catch (err) {
  // ignore app already initialized error in snack
}

export default function Log() {
    // Ref or state management hooks
  const recaptchaVerifier = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [verificationId, setVerificationId] = useState();
  const [verificationCode, setVerificationCode] = useState();
  const firebaseConfig = app ? app.options : undefined;
  const [message, showMessage] = useState();
  const attemptInvisibleVerification = false;
  const app = getApp();
const auth = getAuth();

  return (
    <View style={{
            padding: 20,
            marginTop: 50
          }}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
        // attemptInvisibleVerification
      />
      <Text style={{ marginTop: 20 }}>Enter phone number</Text>
      <TextInput
        style={{ 
          marginVertical: 10, 
          fontSize: 17 
        }}
        placeholder="+1 999 999 9999"
        autoFocus
        autoCompleteType="tel"
        keyboardType="phone-pad"
        textContentType="telephoneNumber"
        onChangeText={ phoneNumber => setPhoneNumber(phoneNumber) }
      />
      <Button
        title="Send Verification Code"
        disabled={!phoneNumber}
        onPress={async () => {
          // The FirebaseRecaptchaVerifierModal ref implements the
          // FirebaseAuthApplicationVerifier interface and can be
          // passed directly to `verifyPhoneNumber`.
          try {
            const phoneProvider = new PhoneAuthProvider(auth);
            // const verificationId = await phoneProvider.verifyPhoneNumber(
            //   phoneNumber,
            //   recaptchaVerifier.current
            // );
            const verificationId = phoneProvider.verifyPhoneNumber('+8615927507484', recaptchaVerifier.current)
            console.log(`${recaptchaVerifier.current}`)
            setVerificationId(verificationId);
            showMessage({
              text: 'Verification code has been sent to your phone.',
            });
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
          }
        }}
      />
      <Text style={{ marginTop: 20 }}>Enter Verification code</Text>
      <TextInput
        style={{ 
          marginVertical: 10, 
          fontSize: 17 
        }}
        editable={!!verificationId}
        placeholder="123456"
        onChangeText={setVerificationCode}
      />
      <Button
        title="Confirm Verification Code"
        disabled={!verificationId}
        onPress={async () => {
          try {
            const credential = PhoneAuthProvider.credential(
              verificationId,
              verificationCode
            );
            await signInWithCredential(auth, credential);
            showMessage({ text: 'Phone authentication successful 👍' });
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: 'red' });
          }
        }}
      />
      {message ? (
        <TouchableOpacity
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 0xffffffee, justifyContent: 'center' },
          ]}
          onPress={() => showMessage(undefined)}>
          <Text
            style={{
              color: message.color || 'blue',
              fontSize: 17,
              textAlign: 'center',
              margin: 20,
            }}>
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : (
        undefined
      )}
      {attemptInvisibleVerification && <FirebaseRecaptchaBanner />}
    </View>
  )
}