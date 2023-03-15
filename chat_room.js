var firebaseConfig = {
    apiKey: "AIzaSyA1e5HdCZBcxTuYgFbD3ejcf4uMtm4BteA",
    authDomain: "project-c101-ed83a.firebaseapp.com",
    databaseURL: "https://project-c101-ed83a-default-rtdb.firebaseio.com",
    projectId: "project-c101-ed83a",
    storageBucket: "project-c101-ed83a.appspot.com",
    messagingSenderId: "735902270584",
    appId: "1:735902270584:web:8ade9456f308e46f66998d",
    measurementId: "G-C8SPCWVPM0"
  };

  firebase.intializeApp(firebaseConfig);

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebaseConfig.databaseURL().ref("/").child(room_name).update({purpose : "adding room name"});
    localStorage.setItem("room_name", room_name);
    window.location = "chat_room.html";

  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "chat_room.html";
}