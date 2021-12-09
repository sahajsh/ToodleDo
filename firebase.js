var firebaseConfig = {
  apiKey: "AIzaSyAbaGzPtVKcvfuKrqglTZgZECqGvrcbSfM",
  authDomain: "todo-live-a07ee.firebaseapp.com",
  databaseURL: "https://todo-live-a07ee-default-rtdb.firebaseio.com",
  projectId: "todo-live-a07ee",
  storageBucket: "todo-live-a07ee.appspot.com",
  messagingSenderId: "795680046147",
  appId: "1:795680046147:web:a831054351c6d2c864a8f6",
  measurementId: "${config.measurementId}"
};


  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

    

