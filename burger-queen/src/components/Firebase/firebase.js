import React from "react";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLlk-GkqfTdbwuMkN4fjBpfSeHdh8MymI",
  authDomain: "pan-d-monium.firebaseapp.com",
  databaseURL: "https://pan-d-monium.firebaseio.com",
  projectId: "pan-d-monium",
  storageBucket: "pan-d-monium.appspot.com",
  messagingSenderId: "695733133789",
  appId: "1:695733133789:web:db492bc86f14044da91634"
};

// Initialize Firebase
class configFirebase extends React.Component {
  constructor() {
    super();
    firebase.initializeApp(firebaseConfig);
    firebase
      .database()
      .ref("users/" + 123)
      .set(
        {
          username: 'Tania',
          email: 'pamel@gmail.com'
        },
        function(error) {
          if (error) {
            // The write failed...
          } else {
            // Data saved successfully!
          }
        }
      );
  }
}

export default configFirebase;
