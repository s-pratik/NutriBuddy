import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { COLORS, SIZES, FONTS } from "../constants";
import { useNavigation } from "@react-navigation/native";


function Recipie() {
  const [popular, setPopular] = useState([]);
  const [input, setInput] = useState("");
  const navigation = useNavigation();

  const getPopular = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=c5fd5cc449c24d7ab0ae7331720ba9f6&number=10&query=${name}&addRecipeInformation=true&addRecipeNutrition=true`
    );

    const data = await api.json();
    setPopular(data.results);
  };

  useEffect(() => {
    getPopular(input);
  }, [input]);

  const renderRecipes = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Rdetails", { itemId: item.id , itemImage: item.image , itemTitle : item.title , itemMins : item.readyInMinutes , itemServing : item.servings , itemInstrut : item.analyzedInstructions});
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 10,
          marginTop: 10,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.gray2,
          marginHorizontal: 15,
        }}
      >
        <Image
          source={{ uri: item.image }}
          resizeMode="cover"
          style={{
            width: 120,
            height: 120,
            borderRadius: SIZES.radius,
          }}
        />
        <View
          style={{
            width: "65%",
            paddingHorizontal: 20,
          }}
        >
          <Text
            numberOfLines={2}
            style={{
              flex: 1,
              // ...FONTS.h2,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              // ...FONTS.body4,
              marginBottom: 15,
            }}
          >
            {item.readyInMinutes} mins | servings : {item.servings} |{" "}
            {item.vegetarian ? (
              <Text style={{ color: "#82CD47" }}>Veg</Text>
            ) : (
              <Text style={{ color: "red" }}>Non Veg</Text>
            )}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: 50,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}
      >
        <Image
          source={require("../images/search.png")}
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
        />
        <TextInput
          style={{
            marginLeft: SIZES.radius,
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Recipies"
          onChangeText={setInput}
          value={input}
        />
      </View>
      <FlatList
        data={popular}
        renderItem={renderRecipes}
        keyExtractor={(item) => item.id}
      />
      
    </View>
  );
}

export default Recipie;
