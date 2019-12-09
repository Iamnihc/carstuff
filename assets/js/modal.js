// Get the modal
var infomodal = document.getElementById("carinfomodal");

// Get the button that opens the modal
var btn = document.getElementById("infobutton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// 0 is no info
// 1 is car info
// 2 is app info
var currentInfoScreen = 0;

// When the user clicks the button, open the modal
btn.onclick = function() {
        document.getElementById("vinfo").classList.remove("touch");
        console.log("button")
        infomodal.style.display = "block";
        document.getElementById("ainfo").style.display = "none";
        document.getElementById("vinfo").style.display = "inline";
        currentInfoScreen = 1;
        setStarters();
    }
    // When the user clicks on <span> (x), close the modal
span.onclick = function() {
        infomodal.style.display = "none";
        currentInfoScreen = 0;
    }
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == infomodal) {
        infomodal.style.display = "none";
        currentInfoScreen = 0;
    }

}

appswitch = document.getElementsByClassName("modal-head")[0];

appswitch.onclick = function() {
    // console.log("YES");
    currentInfoScreen++;
    console.log(currentInfoScreen)
    if (currentInfoScreen == 3) {
        currentInfoScreen = 1;
    }
    if (currentInfoScreen == 1) {
        document.getElementById("vinfo").style.display = "inline";
        document.getElementById("ainfo").style.display = "none";
    } else if (currentInfoScreen == 2) {
        document.getElementById("vinfo").style.display = "none";
        document.getElementById("ainfo").style.display = "inline";
        console.log(document.getElementById("vinfo"));

    }
}