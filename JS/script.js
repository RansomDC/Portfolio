
//FORM VALIDATION
const myForm = document.getElementById('myForm');
function validateField(formValue) {
    let formInput = document.forms['contactForm'][formValue].value;
    if (formInput == "") {
        return false;
    } else {
        return true;
    }
}
function validateForm() {
    if(validateField("Name") && validateField("Email") && validateField("Message")) {
        myForm.setAttribute("action", "https://formspree.io/f/xknyqqqj");
        return true;
    } else {
        alert("All fields must be filled out!")
        return false;
    }
}
// END FORM VALIDATION


//SLIDESHOW

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
//END SLIDESHOW


//POPUP FORM
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
//END POPUP FORM