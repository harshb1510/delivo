import { View, Text, ScrollView } from 'react-native'
import React from 'react'

import {ArrowRightIcon} from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({id,title,description}) {
  return (
    <View>
    <View style={{marginTop:16,flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:16}}>
        <Text  style={{fontWeight:'bold',fontSize:18}}>{title}</Text>
        <ArrowRightIcon size={20} color="#00CCBB"/>
    </View>
    <Text style={{fontSize:10,color:"gray",paddingHorizontal:16}} >
{description}
    </Text>
    <ScrollView
    horizontal
    contentContainerStyle={{
        paddingHorizontal:15,
    }}
    showsHorizontalScrollIndicator={false}
    style={{paddingTop:4}}
    >
{/* Resturant Cards */}
    <RestaurantCard
    id="1"
    imgUrl="https://links.papareact.com/gn7"
    title="Restaurant 1"
    rating={5}
    genre="Modern European"
    address="123 Main St"
    short_description="Quick Bites, Cafe"
    dishes="Pizza, Burger, Pasta"
    long="123.123"
    lat="123.123" 
    />
    <RestaurantCard
    id="1"
    imgUrl="https://links.papareact.com/gn7"
    title="Restaurant 1"
    rating={5}
    genre="Modern European"
    address="123 Main St"
    short_description="Quick Bites, Cafe"
    dishes="Pizza, Burger, Pasta"
    long="123.123"
    lat="123.123" 
    />
    <RestaurantCard
    id="1"
    imgUrl="https://links.papareact.com/gn7"
    title="Restaurant 1"
    rating={5}
    genre="Modern European"
    address="123 Main St"
    short_description="Quick Bites, Cafe"
    dishes="Pizza, Burger, Pasta"
    long="123.123"
    lat="123.123" 
    />
    <RestaurantCard
    id="1"
    imgUrl="https://links.papareact.com/gn7"
    title="Restaurant 1"
    rating={5}
    genre="Modern European"
    address="123 Main St"
    short_description="Quick Bites, Cafe"
    dishes="Pizza, Burger, Pasta"
    long="123.123"
    lat="123.123" 
    />
    <RestaurantCard
    id="1"
    imgUrl="https://links.papareact.com/gn7"
    title="Restaurant 1"
    rating={5}
    genre="Modern European"
    address="123 Main St"
    short_description="Quick Bites, Cafe"
    dishes="Pizza, Burger, Pasta"
    long="123.123"
    lat="123.123" 
    />
    </ScrollView>
    </View>
  )
}