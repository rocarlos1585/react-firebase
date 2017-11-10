import * as firebase from 'firebase'


export var config = {
   apiKey: "AIzaSyARgjXosZzMxI3SmUrQRFYogZ4leo-q5Wg",
   authDomain: "tabla-238aa.firebaseapp.com",
   databaseURL: "https://tabla-238aa.firebaseio.com",
   projectId: "tabla-238aa",
   storageBucket: "tabla-238aa.appspot.com",
   messagingSenderId: "828526392226"
 };
 firebase.initializeApp(config);

 export const ref=firebase.database().ref();
 export const firebaseAuth=firebase.auth();
