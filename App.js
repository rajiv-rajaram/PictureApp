import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SliderBox } from "react-native-image-slider-box";

export default class PictureApp extends Component {
  //const mrMenImgages;
  constructor() {
    super()
    this.state = {
      titleText: 'Find the name of the book',
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
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{height: 200, backgroundColor: 'pink', justifyContent: 'center'}}>
          <Text style={{padding: 10, fontSize: 42, textAlign: 'center'}}>{this.state.titleText}</Text>
        </View>
        <View style={styles.container}>
          <SliderBox 
          images={this.state.slidingImages}
          sliderBoxHeight={400} 
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE" 
          onCurrentImagePressed={index =>
            this.setState({
              titleText: this.state.bookTitle[index]      
          })}
          />
        </View>
      </View>
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
