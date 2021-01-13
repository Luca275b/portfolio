function myFunction() {
    console.log("myLinks");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        console.log("display none");
        x.style.display = "none";
    } else {
        console.log("display block");
        x.style.display = "block";
    }
}

var x = document.getElementById("myLinks");

function myFunction2(y) {
    if (y.matches) { // If media query matches
        console.log("display block");
        x.style.display = "block";
    } else {
        console.log("display none");
        x.style.display = "none";
    }
}

var y = window.matchMedia("(min-width: 800px)")
myFunction2(y) // Call listener function at run time
y.addListener(myFunction2) // Attach listener function on state changes


