var firebaseConfig = {
    apiKey: "AIzaSyAzHd_HSiYoLQNvjjE0PoK8XoEFFkBskDQ",
    authDomain: "kwitter-18da2.firebaseapp.com",
    databaseURL: "https://kwitter-18da2-default-rtdb.firebaseio.com",
    projectId: "kwitter-18da2",
    storageBucket: "kwitter-18da2.appspot.com",
    messagingSenderId: "808489302709",
    appId: "1:808489302709:web:45fd42d3225748a65c1cfc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
  
    document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="login.html";
}
