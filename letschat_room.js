user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = { apiKey: "AIzaSyAWHne-uVQeled6XauXPfiK8TzON6BGUGw", authDomain: "social-media-381bd.firebaseapp.com", databaseURL: "https://social-media-381bd.firebaseio.com", projectId: "social-media-381bd", storageBucket: "social-media-381bd.appspot.com", messagingSenderId: "930946668527", appId: "1:930946668527:web:80dadf81cb283ac305081a", measurementId: "G-89M0H9BFCP" };
 firebase.initializeApp(firebaseConfig);
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name -" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
                  //End code
            });
      });
}
getData();
function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "letschat_page.html";
}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "letschat_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}