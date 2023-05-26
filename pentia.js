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
/*Julie JavaScript slut*/
/*Michelle JavaScript start*/
/*Michelle JavaScript slut*/