import { View, Text, textColor, StyleSheet, Image, Button, onPress, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useEffect, useState } from 'react';
import mystyle from '../Styles/homeStyles';
import { useNavigation } from '@react-navigation/native';
import { onAuthStateChanged, signOut, getAuth } from 'firebase/auth';
import { firebase } from '../../firebase';
import { FlatList } from 'react-native-gesture-handler';
import { useWindowDimensions } from 'react-native';
 import { auth } from '../../firebase';

import Btn from '../utils/Btn';
import { COLORS, SIZES, FONTS } from "../constants";


const Home = () => {

  const { height, width, scale, fontScale } = useWindowDimensions();
  const auth = getAuth();
  const Logout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('firstHomeScreen');
      })
      .catch((error) => {
        alert("Something went wrong");
      });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigation.replace('firstHomeScreen');
      }
    });
  }, []);

  const [users, setUsers] = useState([]);
  const fetchedInfo = firebase.firestore().collection('userDetails');

  useEffect(() => {
    fetchedInfo
      .onSnapshot(
        querySnapshot => {
          const users = []
          querySnapshot.forEach((doc) => {
            const { firstName, lastName, email, contactNumber, age, weight, height, bmi } = doc.data()
            users.push({
              id: doc.id,
              firstName,
              lastName,
              email,
              contactNumber,
              age,
              weight,
              height,
              bmi,
            })
          })
          setUsers(users)
        }
      )
  }, [])
  const Fetch = () => {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ height: '100%', padding: 20 }}
          data={users}
          numColumns={2}
          renderItem={({ item }) => (
            <View>

              <Text style=
                {{
                  textAlign: 'center',
                  padding: 10,
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: '#5F8D4E'

                }}>Hello {item.firstName}</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 5,
                  marginTop: 5,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.gray2,
                  marginHorizontal: 15,
                }}
              >
                <Text style={{
                  padding: 5, fontSize: 20, color: '#82CD47'
                }}>
                  Your current weight is : {item.weight}</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 5,
                  marginTop: 5,
                  borderRadius: SIZES.radius,
                  backgroundColor: COLORS.gray2,
                  marginHorizontal: 10,
                }}
              ><Text style={{ padding: 5, fontSize: 20, color: '#82CD47' }}>Your current BMI is : {item.bmi}</Text></View>

            </View>
          )}
        ></FlatList>
      </View>
    )
  };

  const Header = () => {

    return (
      <View style={mystyle.header}>
        <Text style={mystyle.firstText}>Nutri</Text>
        <Text style={mystyle.secondText}>Buddy</Text>
        <TouchableOpacity onPress={() => Logout()} style={{ marginright: 100 }}>
          <Image source={require('../images/switch.png')} style={{ width: 30, height: 30, marginLeft: 20, }}></Image>
        </TouchableOpacity>
      </View>

    );
  };



  const navigation = useNavigation();

  const navNutrition = () => {
    navigation.navigate('Nutrition');
  }
  const navRecipie = () => {
    navigation.navigate('Recipie');
  }
  const navReminder = () => {
    navigation.navigate('Reminder');
  }
  const navDietplan = () => {
    navigation.navigate('Dietplan');
  }


  const navfirstHomeScreen = () => {
    navigation.navigate('firstHomeScreen');
  }


  const Boxes = () => {
    return (
      <View style={mystyle.boxContainer}>

        <TouchableOpacity onPress={navNutrition}>
          <View style={mystyle.box}>
            <View style={mystyle.inner}>
              <Image source={require('../images/nutrition.png')} style={mystyle.imageView}></Image>
              <Text style={mystyle.Options}>Nutrition</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navRecipie}>
          <View style={mystyle.box}>
            <View style={mystyle.inner}>
              <Image source={require('../images/recipie.png')} style={mystyle.imageView}></Image>
              <Text style={mystyle.Options}>Recipie</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={navDietplan}>
          <View style={mystyle.box}>
            <View style={mystyle.inner}>
              <Image source={require('../images/dietplan.png')} style={mystyle.imageView}></Image>
              <Text style={mystyle.Options}>Dietplan</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={navReminder}>
          <View style={mystyle.box}>
            <View style={mystyle.inner}>
              <Image source={require('../images/reminders.png')} style={mystyle.imageView}></Image>
              <Text style={mystyle.Options}>Reminder</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (

    <View style={mystyle.container}>

      <Header />
      <View style={mystyle.profileView} >
        <Fetch />

        {/*<Btn bgColor="black" textColor="white" btnLabel="Login" onPress={navnewLogin}/>*/}
        {/*<Btn bgColor="black" textColor="white" btnLabel="Register" onPress={navnewRegister}/>*/}

      </View>
      <Boxes />
    </View>

  );
};

export default Home;


