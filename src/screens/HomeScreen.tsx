import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { articlesData } from '../utils/data';
// import { Article } from '../utils/types'; 

const HomeScreen = ({ navigation }: any) => {  

 

  const [articles, setArticles] = useState<Article[]>([]);

  const renderArticle = ({ item }: { item: Article }) => ( 
    <View style={styles.articleContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.content}</Text>
      <Text>Category: {item.category}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Add Article"
          onPress={() => navigation.navigate('AddArticle')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  articleContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default HomeScreen;
