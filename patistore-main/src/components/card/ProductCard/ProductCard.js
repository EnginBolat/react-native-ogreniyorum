import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native'
import styles from './ProductCard.style'

const ProductCard = (props) => {
    var isLastItem = props.isLastItem
    return (
        <View style={[styles.container, isLastItem && { width: Dimensions.get('window').width, height: Dimensions.get('window').height / 2.5, }]}>
            <Image
                style={[styles.imageContainer, isLastItem && { width: Dimensions.get('window').width * 0.85, margin: 8 }]}
                source={{ uri: props.item.imgURL }} />
            <View style={[styles.textRow, isLastItem && { width: Dimensions.get('window').width * 0.85, margin: 8 }]}>
                <Text style={styles.imageContainerTitle}>{props.item.title}</Text>
                <Text style={styles.imageContainerPrice}>{props.item.price}</Text>
            </View>
            <Text style={styles.imageContainerInStock}>{!props.item.inStock && 'STOKTA YOK'}</Text>
        </View>
    );
}

export default ProductCard;