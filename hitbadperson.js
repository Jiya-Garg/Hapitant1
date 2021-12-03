var img;

var send_img = function (event){
    console.log("erufgruf");
    img = URL.createObjectURL(event.target.files[0]);
    console.log(img);
}

function showpic() {
    console.log(img);
    var image = document.getElementById("pic");
    image.src = img;
}
function shoot() {
    var img = document.getElementById('ballpic');
    img.style.visibility = 'hidden';
    var img = document.getElementById('shootedball');
    img.style.visibility = 'hidden';
    var img = document.getElementById('stainpic');
    img.style.visibility = 'visible';
    document.getElementById("spoilt").style.visibility = "visible"
}