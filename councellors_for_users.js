var firebaseConfig = {
  apiKey: "AIzaSyBEu1KMUxWqw3vdQtslKkn_pgPbbTfMjIw",
  authDomain: "hapitant-bf8bc.firebaseapp.com",
  databaseURL: "https://hapitant-bf8bc-default-rtdb.firebaseio.com",
  projectId: "hapitant-bf8bc",
  storageBucket: "hapitant-bf8bc.appspot.com",
  messagingSenderId: "1064775604743",
  appId: "1:1064775604743:web:af61d045ca3212c0d168a2",
  measurementId: "G-KQG6ELFN2B"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
    childKey  = childSnapshot.key;
    councellor_names = childKey;
    row = "<div class='output' id='"+councellor_names+"' onclick='redirectToCouncellorDetails(this.id)' >"+ councellor_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
});});}
getData();
function redirectToCouncellorDetails(name)
{
  console.log(name);
  localStorage.setItem("counsellor_name", name);
    window.location = "councellordetails.html";
}
function go_back() {
  window.location = "Screen1.html"
}