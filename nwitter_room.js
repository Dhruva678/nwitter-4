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
function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem("room_name",room_name);
      window.location="nwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}