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
councellor_name = localStorage.getItem("councellor_names");
function getData() { 
   firebase.database().ref("/"+councellor_name).on('value', 
   function(snapshot) { 
     document.getElementById("details").innerHTML = ""; 
     snapshot.forEach(function(childSnapshot) {
        childKey  = childSnapshot.key + " : ";
        childData = childSnapshot.val() ; 
        all_details = "<h4 style = 'font-size:25px; text-align:center;margin-top:50px;'>"+childKey+childData+"</h4>";
        if(childKey != "purpose") {
        details = all_details;
   
  
        document.getElementById("details").innerHTML += details;

        console.log(details);
        }
 
});
});

}
getData();
function go_back() {
    window.location = "Screen1.html"
}
