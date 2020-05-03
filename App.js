import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Image } from 'react-native';
//import ImageSlider from "react-native-image-slider";

const allBooks = [
  { image: require('./assets/nosey.png'), title: 'Mr Nosey' },
  { image: require('./assets/Cinderella.png'), title: 'Cinderella' },
  { image: require('./assets/strong.png'), title: 'Mr Strong' },
  { image: require('./assets/tickles.png'), title: 'Mr Tickles' },
  { image: require('./assets/gruffalo.png'), title: 'Gruffalo' },
  { image: require('./assets/goldilocks.png'), title: 'Goldilocks and the Three Bears' },
  { image: require('./assets/redridinghood.png'), title: 'Red Ridinghood' },
  { image: require('./assets/jack.png'), title:  'Jack and the Beans stock' }
];

export default class PictureApp extends Component {
  constructor() {
    super()
    this.shuffleArray(allBooks);
    this.state = {
      question: 'Guess the book name',
      titleText: 'Guess the book name',
      books: allBooks,
      index: 0
    }
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ height: 150, backgroundColor: 'pink', justifyContent: 'center' }}>
          <Text style={{ padding: 10, fontSize: 42, textAlign: 'center' }}>{ this.state.titleText }</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source ={ this.state.books[this.state.index].image }
          />
        </View>
        {/* <ImageSlider
          images={ this.getImages(this.state.books) }
          style={ styles.imageContainer }
          onPress={ ({ image, index }) =>
                  this.setState({
                    titleText: this.state.books[index].title    
                })}
          onPositionChanged={ index => 
                  this.setState({
                          titleText: this.state.question
                })
              }
        /> */}
        <Button
          color = 'pink'
          onPress={ () =>
            this.setState({
              titleText: this.state.books[this.state.index].title    
          })}
          title ="Answer"
        />
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
  image: {
    resizeMode: 'contain'
    // width: 66,
    // height: 58,
  },
  // buttonContainer: { 
  //   height: 150, 
  //   justifyContent: 'center' 
  // }
});
