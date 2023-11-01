import React from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, View, FlatList } from 'react-native';
import ProductCard from './components/card/ProductCard/index';
import SearchBar from './components/input/SearchBar/index';
import Title from './components/text/Title/index';
import product_data from './data.json'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <FlatList
          ListHeaderComponent={() =>
            <View>
              <Title></Title>
              <SearchBar></SearchBar>
            </View>
          }
          showsVerticalScrollIndicator={false}
          data={product_data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ index, item }) =>
            <ProductCard
              item={item}
              isLastItem={index === product_data.length - 1}
              inStock={item.inStock} />
          }
          numColumns={2}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  subContainer: {
    margin: 8,
  },
});
