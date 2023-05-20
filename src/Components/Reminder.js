import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const ReminderScreen = () => {
  const [reminderText, setReminderText] = useState('');
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [reminderTime, setReminderTime] = useState(new Date());
  const [activityType, setActivityType] = useState('work');

  const handleConfirmDatePicker = (date) => {
    setIsDatePickerVisible(false);
    setReminderTime(date);
    Alert.alert('Time Set', 'Reminder time has been set successfully!');
  };

  const handleSetReminder = () => {
    const date = new Date(reminderTime);
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });

    setReminderText('');
    Alert.alert('Reminder Set', `Your reminder for "${reminderText}" at ${timeString} for "${activityType}" has been set.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Set a reminder:</Text>
      <View style={styles.activityButtons}>
        <Button title="BREAKFAST" onPress={() => setActivityType('work')} color={activityType === 'work' ? '#4CAF50' : '#E0E0E0'} />
        <Button title="LUNCH" onPress={() => setActivityType('exercise')} color={activityType === 'exercise' ? '#4CAF50' : '#E0E0E0'} />
        <Button title="DINNER" onPress={() => setActivityType('study')} color={activityType === 'study' ? '#4CAF50' : '#E0E0E0'} />
      </View>
      <TextInput
        style={styles.textInput}
        value={reminderText}
        onChangeText={text => setReminderText(text)}
        placeholder="Enter reminder text"
        placeholderTextColor="green"
      />
      <View
      
      >
        <Button style={styles.timeButton} title="Set Time" onPress={() => setIsDatePickerVisible(true)} />
      </View>
      
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="time"
        date={reminderTime}
        onConfirm={handleConfirmDatePicker}
        onCancel={() => setIsDatePickerVisible(false)}
      />
      <Button style={styles.setReminderButton} title="Set Reminder" onPress={handleSetReminder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c3f0a8',
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  activityButtons: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '80%',
  },
  textInput: {
    width: '80%',
    height: 40,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#BDBDBD',
    color: '#212121',
    marginBottom: 20,
  },
  timeButton: {
    marginBottom: 20,
    padding:15,
  },
  setReminderButton: {
    backgroundColor: '#4CAF50',
    color: '#FFFFFF',
    marginBottom: 10,
    padding: 15,
  },
});

export default ReminderScreen;
