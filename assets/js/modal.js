// Get the modal
var modal = document.getElementById("carinfomodal");

// Get the button that opens the modal
var btn = document.getElementById("infobutton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  console.log("button")
  modal.style.display = "block";
}

function pop(){
  console.log("button")
  modal.style.display = "block";
}
function closeit(){
    modal.style.display = "none";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
