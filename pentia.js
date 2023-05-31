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

function myFunction(x) {
  x.classList.toggle("change");
}

const menu = document.querySelector(".menu");
const burger = document.querySelector(".burger");

function Menu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
}
burger.addEventListener("click", Menu);

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
// Debugging
console.log("Start of the script");

// Variables
let contactForm = document.getElementById('contactForm');
let nameInput = document.getElementById('name');
let phoneInput = document.getElementById('Phone');
let companyInput = document.getElementById('virksomhed');
let titleInput = document.getElementById('titel');
let messageInput = document.getElementById('besked');
let checkboxInput = document.getElementById('check');

// Arrays
let inputFields = [nameInput, phoneInput, companyInput, titleInput, messageInput];

// Loops
for (let i = 0; i < inputFields.length; i++) {
  let input = inputFields[i];
  console.log("Input ID:", input.id);
}

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  if (nameInput.value === '' || phoneInput.value === '' || companyInput.value === '' ||
      titleInput.value === '' || messageInput.value === '' || !checkboxInput.checked) {
    alert('Felterne skal udfyldes');
  } else {
    alert('Tak for henvendelsen, du hører fra os!');
  }
});

// Debugging
console.log("End of the script");
/*Michelle JavaScript slut*/