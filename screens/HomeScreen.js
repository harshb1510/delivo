import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  SafeAreaViewComponent,
  TextInput,
  ScrollView,
} from "react-native";
import {
  ChevronDownIcon,
  UserIcon,
  CheckIcon ,
  AdjustmentsVerticalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/categories";
import FeaturedRow from "../components/FeaturedRow";


function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-12">
        {/* {Header} */}
        <View className="flex-row pb-3  items-center mx-4 space-x-2 ">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">
              Deliver Now!
            </Text>
            <Text className="font-bold text-xs">
              Current Location!
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={34} color="#00CCBB"/>
        </View>
        {/* SearchBox */}
        <View className='flex-row items-center space-x-2 pb-2 mx-4'>
          <View className='flex-row flex-1 items-center space-x-2 bg-gray-200 p-2'>
          <CheckIcon color="gray" size={20}/>
          <TextInput placeholder="Resturants and Cuisines"
          />
          </View>
            <AdjustmentsVerticalIcon color='#00CCBB'/>
        </View>
        {/* Body */}
            <ScrollView className='bg-gray-100 '
            contentContainerStyle={{
               paddingBottom:100
            }}
            >
              {/* Categories */}
              <Categories/>
              {/* Featured */}
<FeaturedRow
id="1"
  title='Featured'
  description='Paid placements from our partners'
  featuredCategory='featured'
/>
<FeaturedRow
id="2"
  title='Tasty Discounts'
  description="Everyones's been enjoying these juicy discounts!"
  featuredCategory='discounts'
/>
<FeaturedRow
id="3"
  title='Offers near you!'
  description='Why not support your local resturant tonight!'
  featuredCategory='offers'
/>
            </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
