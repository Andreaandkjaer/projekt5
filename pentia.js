/*Andrea JavaScript start*/
let button = document.getElementsByClassName("dropdown_btn");
let i;

for (i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
/*Andrea JavaScript slut*/
/*Julie JavaScript start*/
let slideIndex = 0; 
showSlides(); 
function showSlides() { 
let i; 
let slides = document.getElementsByClassName("mySlides"); 
let dots = document.getElementsByClassName("dot"); 

  let slidesArray = Array.from(slides); // Opretter et array baseret på objekterne i slides
  let dotsArray = Array.from(dots); // Opretter et array baseret på objekterne i dots

for (i = 0; i < slidesArray.length; i++) { 
slidesArray[i].style.display = "none"; 
} 
slideIndex++; 
if (slideIndex > slidesArray.length) {slideIndex = 1} 

for (i = 0; i < dotsArray.length; i++) { 
dotsArray[i].className = dotsArray[i].className.replace(" active", ""); 
}
 slidesArray[slideIndex-1].style.display = "block"; 
dotsArray[slideIndex-1].className += " active"; 
setTimeout(showSlides, 3000);//Spiller med 3 sekunders mellemrum
}
/*Julie JavaScript slut*/
/*Michelle JavaScript start*/
/*Michelle JavaScript slut*/