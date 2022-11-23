// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyBy4PMFegSxhhzIleXmbSV9ibZoYHYN5Hw",
    authDomain: "lets-chat-bruh.firebaseapp.com",
    databaseURL: "https://lets-chat-bruh-default-rtdb.firebaseio.com",
    projectId: "lets-chat-bruh",
    storageBucket: "lets-chat-bruh.appspot.com",
    messagingSenderId: "414818429787",
    appId: "1:414818429787:web:3d274c85cab7e597b6887e"
  };
  const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



