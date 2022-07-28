var picture = document.getElementById("movieImage");

function changeImage(image){
  picture.src = image;
  picture.style.height="100%";
  var interactions = document.getElementById("players");
  var beginText = document.getElementById("beginText");
  beginText.style.display="none";
  interactions.style.display="block";
}

var barsActive = false;


function Side(){
  if (barsActive==false){
    sidebarActive();
  }
  else {
    sidebarDeactive();
  }
}

function sidebarActive(){
  var sidebar = document.getElementById("sidebar");
  var bars = document.getElementById("bars");
  bars.style.transform="rotate(90deg)";
  sidebar.style.left="50%";
  if (barsActive === false){
    barsActive=true;
  }
}

function sidebarDeactive(){
  var sidebar = document.getElementById("sidebar");
  var bars = document.getElementById("bars");
  bars.style.transform="rotate(0deg)";
  sidebar.style.left="100%";
  if(barsActive===true){
    barsActive=false;
  }
}