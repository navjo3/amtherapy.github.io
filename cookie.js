window.addEventListener("load", function(){
  setTimeout(
      function open(event){
          document.querySelector(".popup").style.display = "block";
      },
      1000
  )
});


document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});

document.querySelector("#okay").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
});



let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


//the loading animation-----------------
const showObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const showElements = document.querySelectorAll('.hidden');
showElements.forEach((el) => showObserver.observe(el));

//blur
const blurObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('unblur');
    } else {
      entry.target.classList.remove('unblur');
    }
  });
});

const blurElements = document.querySelectorAll('.blur');
blurElements.forEach((el) => blurObserver.observe(el));
  