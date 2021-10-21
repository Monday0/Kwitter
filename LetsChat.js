var firebaseConfig = {
      apiKey: "AIzaSyAzHd_HSiYoLQNvjjE0PoK8XoEFFkBskDQ",
      authDomain: "kwitter-18da2.firebaseapp.com",
      databaseURL: "https://kwitter-18da2-default-rtdb.firebaseio.com",
      projectId: "kwitter-18da2",
      storageBucket: "kwitter-18da2.appspot.com",
      messagingSenderId: "808489302709",
      appId: "1:808489302709:web:45fd42d3225748a65c1cfc"
    };
    
    
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+ user_name + "!";

function addRoom(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" 
});
localStorage.setItem("room_name",room_name);
window.location="Chat.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
       document.getElementById("output").innerHTML += row;

      });
});
}
getData();

function redirectToRoomName(name) {
 console.log(name); 
localStorage.setItem("room_name", name);
  window.location = "Chat.html"; 
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "login.html"; 
}

      
