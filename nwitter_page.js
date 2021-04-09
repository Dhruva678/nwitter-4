var firebaseConfig = {
    apiKey: "AIzaSyAYxyoHExYjHd9CEiXLT2nHuzZQR9yHCOU",
    authDomain: "nwitter-a8856.firebaseapp.com",
    databaseURL: "https://nwitter-a8856.firebaseio.com",
    projectId: "nwitter-a8856",
    storageBucket: "nwitter-a8856.appspot.com",
    messagingSenderId: "387772725307",
    appId: "1:387772725307:web:9f23871632c7a0bb05c41e",
    measurementId: "G-7HZSJVBGHE"
  };
firebase.initializeApp(firebaseConfig);
  firebase.analytics();
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push
      ({
                name:user_name,
                message:msg,
                like:0
       });
      document.getElementById("msg").value="" ;
    }