import React, { Component } from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const cardsList = [
  {
    id: 1,
    title: 'Data Scientist',
    description:
      'Data scientists gather and analyze large sets of structured and unstructured data',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
    className: 'card1',
  },
  {
    id: 2,
    title: 'IOT Developer',
    description:
      'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
    className: 'card2',
  },
  {
    id: 3,
    title: 'VR Developer',
    description:
      'A VR developer creates completely new digital environments that people can see.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/vr-developer-img.png',
    className: 'card3',
  },
  {
    id: 4,
    title: 'ML Engineer',
    description:
      'Machine learning engineers feed data into models defined by data scientists.',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png',
    className: 'card4',
  },
]

class TechCards extends Component {
  render(){
    return(
      cardsList.map(eachCard => (
        <View style={[styles.cardContainer]} key={eachCard.id}>
          <Text style={styles.cardTitle}>{eachCard.title}</Text>
          <Text style={styles.cardDescription}>{eachCard.description}</Text>
          <Image source={{uri:`${eachCard.imgUrl}`}} style={styles.cardImage} />
        </View>
      ))
    );
  }
}

export default TechCards

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#f4faff',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#171f46',
  },
  headerDescription: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 8,
    color: '#64748b',
    marginBottom: 10,
  },
  cardContainer: {
    backgroundColor: '#fff',
    width: '90%',
    marginVertical: 15,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 17,
    paddingVertical: 22,
    borderWidth: 4,
    borderLeftColor: 0,
    borderRightColor: 0,
    borderBottomColor: 0,
  },
  cardTitle: {
    fontSize: 21,
    color: ' #171f46',
    fontWeight: '700',
  },
  cardDescription: {
    fontSize: 14,
    marginTop: 7,
    color: '#64748b',
  },
  cardImage: {
    width: 75,
    height: 75,
    alignSelf: 'flex-end',
    marginTop: 12,
    borderRadius: 10,
  },
  card1: {
    borderTopColor: '#ff4f64',
  },
  card2: {
    borderTopColor: '#00a8e7',
  },
  card3: {
    borderTopColor: '#44c4a1',
  },
  card4: {
    borderTopColor: '#fcc200',
  }
  })