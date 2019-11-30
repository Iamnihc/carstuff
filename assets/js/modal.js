// Get the modal
var infomodal = document.getElementById("carinfomodal");

// Get the button that opens the modal
var btn = document.getElementById("infobutton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  console.log("button")
  infomodal.style.display = "block";
  setStarters();
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  infomodal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == infomodal) {
    infomodal.style.display = "none";
  }
}
