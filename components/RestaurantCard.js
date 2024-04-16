import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import {MapPinIcon} from 'react-native-heroicons/outline'
export default function RestaurantCard({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat
}) {
  return (
    <TouchableOpacity
    style={{
        backgroundColor:"white",
        marginRight: 12,
        padding:0,
        //apply shadow 
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
            },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        elevation: 5,
    }}
    >
      <Image
      source={{
        uri: imgUrl
      }}
        style={{
            width: 200,
            height: 144,
            borderRadius: 2,
            objectFit: 'contain', 
        }}
        className='pt-3 text-green-500 text-xs '
      />
      <View style={{
        paddingHorizontal:12,
        paddingBottom: 16,
        marginHorizontal:4
      }}>
            <Text style={{fontWeight:700,fontSize: 18,lineHeight: 24,paddingTop: 8}}>{title}</Text>
            <View style={{
                flexDirection:"row",
                alignItems:'center'
            }}>
                <StarIcon color="green" opacity={0.5} size={22}/>
                <Text
                style={{
                    fontSize: 12,
                    lineHeight:16,
                    color:"gray",
                }}
                ><Text
                style={{
                    color:"rgb(34 197 94)",
                }}
                >{rating}</Text> . {genre}</Text>
            </View>
            <View style={{
                flexDirection:"row",
                alignItems:'center',
                paddingTop:4,
                marginHorizontal:4
            }}>
                <MapPinIcon size={22} opacity={0.5} color="gray"/>
                <Text
                style={{
                    fontSize: 12,
                    lineHeight:16,
                    color:"gray",
                }}
                >Nearby. {address}</Text>
            </View>
      </View>
     </TouchableOpacity>
  );
}
