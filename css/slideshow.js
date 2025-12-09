let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow img");


function hideAll() {
    slides.forEach(img => img.style.display = "none");
}


hideAll();
slides[0].style.display = "block";


function slideshow() {
    hideAll();                
    slideIndex++;            
    if (slideIndex >= slides.length) slideIndex = 0;  
    slides[slideIndex].style.display = "block";       
    setTimeout(slideshow, 5000); 
}


slideshow();









