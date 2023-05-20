import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Animated, Alert } from 'react-native';
import { COLORS, SIZES, FONTS } from "../constants";


const BMI = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [dietPlan, setDietPlan] = useState('');
  const [fadeAnim] = useState(new Animated.Value(0));

  const calculateBMI = () => {
    const h = parseFloat(height); // convert height to meters
    const w = parseFloat(weight);
    const bmi = w / (h * h);
    setBmi(bmi.toFixed(2)); // round to 2 decimal places
    Alert.alert('Your BMI IS 😊 ', bmi.toFixed(2));


    if (bmi < 18.5) {
      setDietPlan('You are underweight. Eat more protein, healthy fats, and complex carbohydrates. Aim to eat 5-6 small meals throughout the day and consume an additional 500 to 1000 calories per day.');
    } else if (bmi >= 18.5 && bmi < 25) {
      setDietPlan('You are at a healthy weight.Eat a variety of foods: Include fruits, vegetables, whole grains, lean proteins, and healthy fats in your diet..');
    } else if (bmi >= 25 && bmi < 30) {
      setDietPlan('You are overweight. Reduce calorie intake: Create a calorie deficit by reducing the number of calories you consume daily. Eat a variety of nutrient-dense foods: Include fruits, vegetables, whole grains, lean proteins, and healthy fats in your diet. Limit processed foods: Avoid sugary drinks and packaged foods that contain added sugars, salt, and unhealthy fats.Control portion sizes: Eat smaller portions and stop eating when you feel full.Stay hydrated: Drink plenty of water and limit alcohol intake.      .');
    } else if (bmi >= 30) {
      setDietPlan('You are obese. Reduce daily calorie intake by 500-1000 calories (not below 1200-1500 calories per day).Increase protein intake with lean sources such as fish, poultry, beans, and lentils.Include fiber-rich foods such as fruits, vegetables, whole grains, and legumes.Avoid high-calorie foods such as fried foods, processed snacks, sugary drinks, and desserts.Drink plenty of water to flush out toxins, boost metabolism, and reduce cravings.');
    }

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Details</Text>
      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          placeholder="Enter height in metres"
          keyboardType="numeric"
          value={height}
          onChangeText={setHeight}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter weight in kg"
          keyboardType="numeric"
          value={weight}
          onChangeText={setWeight}
        />
      </View>


      <Button title="Calculate BMI" onPress={calculateBMI}/>
      {bmi ? (
        <Animated.Text style={[styles.result, { opacity: fadeAnim }]}>
          Your BMI is: {bmi}
        </Animated.Text>
      ) : null}
      {dietPlan ? (
        <Animated.Text style={[styles.result, { opacity: fadeAnim }]}>
          Diet Plan: {dietPlan}
        </Animated.Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#c3f0a8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: COLORS.lightGray,
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    height: 50,
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 10,


    marginRight: 10,
  },
  result: {
    margin : 20,
    fontSize: 16,
    fontWeight: '500',
    textAlign:'justify',
  },
});

export default BMI;
