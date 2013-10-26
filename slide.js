// Preload image sources
var image = new Array();
image[0] = new Image();
image[0].src= 'ronin2.jpg';
image[1] = new Image();
image[1].src= 'kk.jpg';
image[2] = new Image();
image[2].src= 'kk2.jpg'
image[3] = new Image();
image[3].src= 'kk3.png';
image[4] = new Image();
image[4].src= 'pup.jpg';


var left = document.getElementsByClassName('arrows')[1];
var right = document.getElementsByClassName('arrows')[0];
var pic1 = document.getElementById('pic1');
var pic2 = document.getElementById('pic2');

pic1.src = image[0].src;
pic2.src = image[1].src;

var slide, index = 2, counter = 1;

var slideShow = function() {

  if (counter === 1 ) {
    pic1.style.right = '-300px';

  } else if (counter === 2){
    pic2.style.zIndex = 1;
    pic1.style.zIndex = -1;
    pic1.src = image[index].src;
    if (index < image.length - 1) {
      index += 1;
    } else {
      index = 0;
    }

  } else if (counter === 3){
    pic1.style.right = 0;

  } else if (counter === 4){
    pic2.style.right = '-300px';

  } else if (counter === 5){
    pic1.style.zIndex = 1;
    pic2.style.zIndex = -1;
    pic2.src = image[index].src;
    if (index < image.length - 1) {
      index += 1;
    } else {
      index = 0;
    }

  } else if (counter === 6) {
    pic2.style.right = 0;
  }

  if (counter === 6) {
    counter = 1;
  } else {
    counter += 1;
  }

};

// starts the slideshow
var init = function () {
  slide = setInterval(slideShow, 1000);
};

// // toggles originals to the right
// right.addEventListener('click', function(){
//   if (pic2.style.right === 0) {
//     pic1.style.right = 0;
//     pic2.style.right = '-300px';
//     pic1.style.zIndex = 1;
//     counter = 4;
//   } else {
//     pic2.style.right = 0
//     pic1.style.right = '-300px';
//     pic2.style.zIndex = 1;
//     counter = 1;
//   }
// });

// // toggles originals to the left
left.addEventListener('click', function(){
  if (pic2.style.right === '-300px') {
    clearInterval(slide);
    pic2.style.right = 0;
    pic2.style.zIndex = 1;
    counter = 4;
    slide = setInterval(slideShow, 1000);
  } else {
    clearInterval(slide);
    pic1.style.right = 0;
    pic1.style.zIndex = 1;
    counter = 1;
    slide = setInterval(slideShow, 1000);
  }
});




window.onload = function() {
  init();
}