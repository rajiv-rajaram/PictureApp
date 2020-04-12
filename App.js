import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ImageSlider from "react-native-image-slider";

const allBooks = [
  { image: require('./assets/nosey.png'), title: 'Mr Nosey' },
  { image: require('./assets/Cinderella.png'), title: 'Cinderella'},
  { image: require('./assets/strong.png'), title: 'Mr Strong'},
  { image: require('./assets/tickles.png'),title: 'Mr Tickles'},
  { image: require('./assets/gruffalo.png'),title: 'Gruffalo'},
  { image: require('./assets/goldilocks.png'),title: 'Goldilocks and the Three Bears'},
  { image: require('./assets/redridinghood.png'),title: 'Red Ridinghood'},
  { image: require('./assets/jack.png'),title:  'Jack and the Beans stock'}
];

export default class PictureApp extends Component {
  constructor() {
    super()
    this.shuffleArray(allBooks);
    this.state = {
      question: 'Guess the book name',
      titleText: 'Guess the book name',
      books: allBooks,
    }
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
        <View style={{height: 150, backgroundColor: 'pink', justifyContent: 'center'}}>
          <Text style={{padding: 10, fontSize: 42, textAlign: 'center'}}>{this.state.titleText}</Text>
        </View>
        <ImageSlider
          images={ this.getImages(this.state.books) }
          style={styles.container}
          onPress={ ({ image, index }) =>
                  this.setState({
                    titleText: this.state.books[index].title    
                })}
          onPositionChanged={ index => 
                  this.setState({
                          titleText: this.state.question
                })
              }
        />
        <View style={styles.content2}>
          <Text style={styles.contentText}>yes and no buttons</Text>
        </View>
      </SafeAreaView>
    );
  }
  getImages(books) {
    var bookImages = [];
    for (var i = 0; i < books.length; i++)
      bookImages[i] = books[i].image;

    return bookImages;
  }
  shuffleArray(array) {
    console.debug("text");
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
});
