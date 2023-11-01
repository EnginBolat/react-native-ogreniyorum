import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './Card.style'

const Card = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageContainer} source={{ uri: props.item.imageUrl }}></Image>
            <View>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{props.item.description}</Text>
                <Text style={styles.author} numberOfLines={2}>{props.item.author}</Text>
            </View>
        </View>
    );
}

export default Card;
