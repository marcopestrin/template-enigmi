import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyANX4cFnzJ4rfmt--XZrSiTLXkhck43y98",
    authDomain: "enigmi-c84be.firebaseapp.com",
    databaseURL: "https://enigmi-c84be.firebaseio.com",
    projectId: "enigmi-c84be",
    storageBucket: "enigmi-c84be.appspot.com",
    messagingSenderId: "268937406447"
};

const fire = firebase.initializeApp(config);
export default fire;