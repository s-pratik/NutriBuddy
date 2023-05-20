import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const handleCalculateBmi = () => {
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height);
    const bmiValue = weightInKg / (heightInM * heightInM);
    setBmi(bmiValue.toFixed(2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Contact"
        onChangeText={setContact}
        value={contact}
        keyboardType='phone-pad'
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        onChangeText={setAge}
        value={age}
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        onChangeText={setWeight}
        value={weight}
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        placeholder="Height (m)"
        onChangeText={setHeight}
        value={height}
        keyboardType='numeric'
      />
      <TouchableOpacity style={styles.button} onPress={handleCalculateBmi}>
        <Text style={styles.buttonText}>Calculate BMI</Text>
      </TouchableOpacity>
      {bmi && (
        <Text style={styles.bmiText}>BMI: {bmi}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bmiText: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default RegistrationForm;