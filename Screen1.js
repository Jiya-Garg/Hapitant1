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
function go_to_councellorpage() {
    window.location = "councellorpage.html";
}
function go_to_userpage() {
    window.location = "userpage.html";
}
function go_back() {
    window.location = "Screen1.html"
}
