
let images = [
"images/restaurant1.jpg" ,
"images/restaurant2.jpg" ,
"images/restaurant3.jpg"];
let index=0;
function changeImage( )  {
index = (index = 1) % images.length;
  document.getElementById("slideshow").src = images[index];
}
setInterval(changeImage,  3000);

window.onload = function ( )  {
alert( "Welcome to The Cozy Bistro! ");
};

function submitForm(event) {
event.preventDefault( );
alert(" Thank you for your message! We will contact you soon. ");
}
