import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Журнал Pixel
      </Text>
      <Card style={styles.card}>
        <Text style={styles.blueText}>
          Новости
        </Text>
        <Image 
            source={require('./orc.png')} 
            style={styles.img} 
          />
        <Text style={styles.newsHeading}>
          Атака пиксельных орков!
        </Text>
        <Text style={styles.plainText}>
          В NFT проект Abyss Glider вторглись орки! Для противодействия выделена отдельная спец бригада. Подробнее на площадке OpenSea.
        </Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  card: {
    padding: 40,
  },
  blueText: {
    color: 'blue',
    fontSize: 16,
    marginBottom: 40,
  },
  newsHeading: {
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 45,
    marginBottom: 20,
  },
  img: {
    width: 200,
    height: 200,
    marginBottom: 20,
    marginLeft: 30,
  },
  plainText: {
    fontSize: 16,
    
  },
});
