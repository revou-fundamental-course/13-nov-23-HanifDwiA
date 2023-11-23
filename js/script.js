window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});
// Sticky Navbar


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName("img-slideshow");

    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) { 
        imgList[i].style.display = "none";
    }

    imgList[slideIndex - 1].style.display = "block";
}

setInterval(() => {
    plusDivs(1);
}, 4000);

// Auto Slide img

function validateForm(event) {
    event.preventDefault(); 

    var nameInput = document.getElementById("name-input").value;
    var emailInput = document.getElementById("email-input").value;
    var countryInput = document.getElementById("country").value;

    
    document.getElementById("name-error").innerHTML = "";
    document.getElementById("email-error").innerHTML = "";
    document.getElementById("country-error").innerHTML = "";
    document.getElementById("success-message").innerHTML = "";

    
    if (nameInput === "") {
        document.getElementById("name-error").innerHTML = "Please enter your name";
        return;
    }

    
    if (emailInput === "") {
        document.getElementById("email-error").innerHTML = "Please enter your email";
        return;
    }

    
    if (countryInput === "") {
        document.getElementById("country-error").innerHTML = "Please select your country";
        return;
    }

    
    document.getElementById("success-message").innerHTML = "Form submitted successfully";
}

// Valid Form