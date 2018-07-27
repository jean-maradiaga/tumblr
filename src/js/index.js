var modal = document.getElementById('myModal');

// Get the link that opens the modal
var btn = document.getElementById("cta_photo");

// Get the element that closes the modal
var close = document.getElementById("close");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on close, close the modal
close.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}