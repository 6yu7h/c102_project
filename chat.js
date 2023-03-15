// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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

// Initialize Firebase
firebase.intializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
	localStorage.setItem("user_name", user_name);
	window.location = "chat_room.html";
}



