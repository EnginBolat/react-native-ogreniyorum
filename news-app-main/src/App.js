import React from 'react';
import NewsCard from './components/card/index';
import news_data from './news_data.json';
import news_banner_data from './news_banner_data.json';
import { Dimensions, Image, FlatList, StyleSheet, SafeAreaView, Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heroTitle}>News</Text>



      <FlatList
        ListHeaderComponent={() => <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {news_banner_data.map(bannerData => (
            <Image
              style={styles.imageContainer}
              source={{ uri: bannerData.imageUrl }}
            />
          ))}
        </ScrollView>}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={({ item }) => <NewsCard item={item}></NewsCard>}
      >
      </FlatList>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  heroTitle: {
    fontSize: 46,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 12,
  },
  imageContainer: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width / 3,
  },
});
