import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ImageSlider from "react-native-image-slider";

export default class PictureApp extends Component {
  constructor() {
    super()
    this.state = {
      question: 'Guess the book name',
      titleText: 'Guess the book name',
      slidingImages: [
        require('./assets/nosey.png'),
        require('./assets/Cinderella.png'),
        require('./assets/strong.png'),
        require('./assets/tickles.png'),
        require('./assets/gruffalo.png'),
        require('./assets/goldilocks.png'),
        require('./assets/redridinghood.png'),
        require('./assets/jack.png'),
      ],
      bookTitle: [
        'Mr Nosey',
        'Cinderella',
        'Mr Strong',
        'Mr. Tickles',
        'Gruffalo',
        'Goldilocks and the three bears',
        'Redridinghood',
        'Jack and the bean stock',
      ]
    }
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, flexDirection: 'column', backgroundColor: 'white'}}>
        <View style={{height: 150, backgroundColor: 'pink', justifyContent: 'center'}}>
          <Text style={{padding: 10, fontSize: 42, textAlign: 'center'}}>{this.state.titleText}</Text>
        </View>
        <ImageSlider
          images={this.state.slidingImages}
          onPress={ ({ image, index }) =>
                  this.setState({
                    titleText: this.state.bookTitle[index]    
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
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
});
