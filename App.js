import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  TouchableHighlight,
  Image,
  Modal 
} from 'react-native';

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
      index: 0,
      modalVisible: false
    }
  }
  render() {
    return (
      <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 2, backgroundColor: 'pink', justifyContent: 'center'}}>
          <Text style={styles.titleText}>{this.state.titleText}</Text>
        </View>
        <View style={{flex: 7, flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source ={this.state.books[this.state.index].image}
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.modalCenteredView}>
              <View style={styles.modalView}>
                <TouchableHighlight
                  style={{ ...styles.modalButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    this.setState({
                      modalVisible: false
                    })
                  }}
                >
                  <Text style={styles.modalTextStyle}>Correct</Text>
                </TouchableHighlight>
              </View>
              <View style={styles.modalView}>
                <TouchableHighlight
                  style={{ ...styles.modalButton, backgroundColor: "#2196F3" }}
                  onPress={() => {
                    this.setState({
                      modalVisible: false
                    })
                  }}
                >
                  <Text style={styles.modalTextStyle}>Wrong</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
        <View style={{flex: 1, backgroundColor: 'pink', justifyContent: "center"}}> 
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              {
                this.setState({
                  titleText: this.state.books[this.state.index].title,  
                  modalVisible: true
                })
              }
            }
          >
            <Text style={styles.titleText}>Answer</Text>
          </TouchableOpacity>
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
  image: {
    resizeMode: 'stretch'
  },
  button: {
    flex: 1,
    alignItems: "center"
  },
  titleText: {
    padding: 10, 
    fontSize: 42, 
    textAlign: 'center'
  },
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  modalTextStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});
