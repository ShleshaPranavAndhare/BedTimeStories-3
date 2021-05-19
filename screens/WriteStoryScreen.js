import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView,ToastAndroid} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import db from '../config';
//import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            author: '',
            storyText: '',
        }
    }

    submitStory = ()=>{
      console.log(db.collection("stories"))
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
            //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()

        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        });
        ToastAndroid.show('Story Submitted' , ToastAndroid.SHORT)
    }


    render(){
        return(
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
              <View>  
            <Image
                source={require("../assets/abc.jpg")}
                style={{width:200, height: 200, margin: 20, marginTop: 60, marginRight: 90, marginLeft: 90}}/>
                <Text style={{fontSize: 20, marginLeft: 140, fontWeight: 'bold'}}>Story Hub-3</Text>
            </View>
                <TextInput 
                    placeholder="Story Title"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
                    style={styles.title}/>
                <TextInput
                    placeholder="Author"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
                    style={styles.author} />
                <TextInput 
                    placeholder="Write your story"
                    placeholderTextColor='black'
                    onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    style={styles.storyText}
                    multiline={true}/>
                
                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={this.submitStory}
                   >
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title:{
      height: 40,
      borderWidth: 2,
      marginTop: 5,
      margin: 65,
      marginBottom: 30,
      color:'black',
      padding: 6,
      width: 300

  },
  author: {
      height: 40,
      borderWidth: 2,
      marginTop: 1,
      marginBottom: 30,
      margin: 65,
      padding: 6,
      width: 300
  },
  storyText: {
      height: 250,
      borderWidth: 2,
      marginTop: 5, 
      margin: 65,
      padding: 6,
      width: 300
  },
  submitButton:{
      justifyContent: 'center',
      alignSelf: 'center',
      backgroundColor: 'pink',
      width: 80,
      height: 40,color:'black',
  },
  buttonText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      color:'black',
  }
});