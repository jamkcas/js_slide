var right = document.getElementsByClassName('arrows')[0];
var left = document.getElementsByClassName('arrows')[1];
var pictures = document.getElementsByClassName('pictures');

var picIndex = pictures.length - 1;
var index2 = pictures.length;

var slide, restart;

var slideShow = function() {
    pictures[picIndex].style.right = "-300px"; // moves picture to the right
    pictures[picIndex].style.zIndex = 0;  // resets the z-index

    // resets each picture and puts it to the back
    if(pictures[index2] && index2 >= 0) {
      pictures[index2].style.right = 0;
      pictures[index2].style.zIndex -= 10;
    }

    // resets or updates the picture index
    if(picIndex == 0) {
      picIndex = pictures.length - 1;
    } else {
      picIndex -= 1;
    }

    // resets or updates the picture reset index
    if(index2 == 0) {
        index2 = pictures.length;
    } else {
      index2 -= 1;
    }
};

// starts the slideshow
var init = function () {
  slide = setInterval(slideShow, 3000);
};

// toggles pictures to the right
right.addEventListener('click', function(){
  clearInterval(slide);
  clearInterval(restart);
  if(picIndex > 0) {
    pictures[picIndex].style.right = "-300px";
    pictures[picIndex].style.zIndex = 0;
    picIndex -= 1;
  }
  restart = setInterval(slideShow, 3000);
});

// toggles pictures to the left
left.addEventListener('click', function(){
  clearInterval(slide);
  clearInterval(restart);
  if(picIndex < pictures.length - 1) {
    pictures[picIndex + 1].style.right = 0;
    pictures[picIndex].style.zIndex = 0;
    picIndex += 1;
  }
  restart = setInterval(slideShow, 3000);
});




window.onload = function() {
  init();
}