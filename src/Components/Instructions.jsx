import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";

const HEADER_HEIGHT = 350;

const Instructions = ({ navigation, route }) => {
  const [instructions, setInstructions] = useState([]);
  const scrollY = useRef(new Animated.Value(0)).current;

  const getDetails = async (id) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=2789908aa7c14057a83c92fcadf0428e`
    );

    const response = await api.json();
    setInstructions(response.analyzedInstructions);
  };

  useEffect(() => {
    getDetails(route.params.itemId);
  }, []);

  function renderRecipeCardHeader() {
    return (
      <View
        style={{
          marginTop: -1000,
          paddingTop: 1000,
          overflow: "hidden",
          alignItems: "center",
        }}
      >
        <Animated.Image
          source={{ uri: route.params.itemImage }}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: "200%",
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />
      </View>
    );
  }

  function renderHeaderBar() {
    return (
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 90,
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "space-between",
          paddingHorizontal: SIZES.padding,
          paddingBottom: 10,
        }}
      >
        {/* back Button  */}
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 35,
            width: 35,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            backgroundColor: COLORS.transparentBlack5,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../images/left-arrow.png")}
            style={{
              width: 15,
              height: 15,
              tintColor: COLORS.lightGray,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderRecipeInfo() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 130,
          width: SIZES.width,
          paddingHorizontal: 30,
          paddingVertical: 20,
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1.5,
            justifyContent: "center",
          }}
        >
          <Text
          style={{
            fontWeight:'bold',
            fontSize:20
          //   ...FONTS.h2
           }}
          >
            {route.params.itemTitle}
          </Text>
          <Text
            style={{
              marginTop: 5,
              color: COLORS.lightGray2,
              // ...FONTS.body4
            }}
          >
            {route.params.itemMins} mins| {route.params.itemServing} serving
          </Text>
        </View>
      </View>
    );
  }

  function renderIngredientsHeader() {
    return (
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 30,
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
        }}
      >
        <Text
          style={{
            flex: 1,
            fontWeight:'bold'
            // ...FONTS.h3
          }}
        >
          Instructions
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <Animated.FlatList
        data={instructions}
        keyExtractor={(item) => `${item.id}`}
        showVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {renderRecipeCardHeader()}

            {renderRecipeInfo()}

            {renderIngredientsHeader()}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        ListFooterComponent={<View style={{ marginBottom: 100 }} />}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 30,
              marginVertical: 5,
            }}
          >
            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: "center",
              }}
            >
              {item.steps.map((items, i) => (
                <Text
                  style={{
                    padding: 6,
                     //...FONTS.h3
                  }}
                  key={i}
                >{`\u2022 ${items.step}`}</Text>
              ))}
            </View>
          </View>
        )}
      />

      {renderHeaderBar()}
    </View>
  );
};

export default Instructions;
