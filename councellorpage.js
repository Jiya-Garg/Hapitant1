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

  
 
function submit() {
    age = document.getElementById("age").value;
    exp = document.getElementById("experience").value;
    phone_number = document.getElementById("phone_number").value;
    email_id = document.getElementById("email_id").value;
    councellor_names = document.getElementById("name").value;
    firebase.database().ref("/").child(councellor_names).update({
        Age: age,
        Experience : exp,
        PhoneNumber : phone_number,
        Email_ID : email_id
    });
    localStorage.setItem("councellor_names",councellor_names)
    document.getElementById("details").innerHTML = "";
window.alert("You details have been submitted! You shall recieve clients soon!")

}   


function go_back() {
    window.location = "Screen1.html"
}