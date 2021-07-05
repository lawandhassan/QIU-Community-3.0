var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyAJjvlFmv4zdnCPSyu7QE1THcHezbkosME",
    authDomain: "qiu-database.firebaseapp.com",
    databaseURL: "https://qiu-database.firebaseio.com",
    projectId: "qiu-database",
    storageBucket: "qiu-database.appspot.com",
    messagingSenderId: "467537428588"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


