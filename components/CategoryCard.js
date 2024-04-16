import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

// create a component
const CategoryCard = ({imgUrl, title}) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                source={{
                    uri: imgUrl,
                }}
                style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 2,
        position: 'relative',
    },
    image: {
        height: 100, // Adjust as needed
        width: 100, // Adjust as needed
        borderRadius: 2, // Adjust as needed
    },
    title: {
        position: 'absolute',
        bottom: 1, // Adjust as needed
        left: 1, // Adjust as needed
        color: 'white',
        fontWeight: 'bold',
    },
});

export default CategoryCard;
