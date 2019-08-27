import React, {Component} from 'react';
import { Home } from './app/views/Home.js';
import { Contact } from './app/views/Contact.js';
import {StackNavigator} from 'react-navigation';
import { Video } from './app/views/Video.js';
import { VideoDetail } from './app/views/VideoDetail.js';
import { Register } from './app/views/Register.js';


// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
// });

const MyRoutes = StackNavigator({
  HomeRT: {
    screen: Home
  },

  ContactRT: {
    screen: Contact
  },

  LessonsRT: {
    screen: Video
  }, 

  VideoDetailRT: {
    screen: VideoDetail
  },

  RegisterRT: {
    screen: Register
  }
},
  {initialRouteName: 'HomeRT'
  }
)

export default class App extends Component {
  render() {
    return (
      <MyRoutes />
    );
  }
}


