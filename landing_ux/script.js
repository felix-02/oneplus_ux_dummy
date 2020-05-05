let menuBtn = document.querySelector(".fa-grip-horizontal");
let sideNav = document.querySelector("#side-nav");

menuBtn.addEventListener("click", () => {
  if (sideNav.style.right === "-250px") {
    sideNav.style.right = "0";
    menuBtn.classList.add('white');
    menuBtn.style.transform='rotate(90deg)';
  } else {
    sideNav.style.right = "-250px";
    menuBtn.classList.remove('white');
    menuBtn.style.transform = 'rotate(180deg)';
  }

});
var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 2000;	// Time Between Switch

// Image List
images[0] = "./img/oneplus_mac.jpeg";
images[1] = "./img/oneplus7t.jpg";
images[2] = "./img/oneplus7.jpg";
images[3] = "./img/oneplus 6t.jpg";

// Change Image
function changeImg() {
  document.slide.src = images[i];

  // Check If Index Is Under Max
  if (i < images.length -1) {
    // Add 1 to Index
    i++;
  } else {
    // Reset Back To O
    i = 0;
  }

  // Run function every x seconds
  setTimeout("changeImg()", time);
}
changeImg();