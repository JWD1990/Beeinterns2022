// уже доавил в тестовом только не много изменил
let accordion = document.getElementsByClassName("navbar__accordion");
let arrow = document.querySelectorAll(".navbar__arrow")[1]
let i;
for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        arrow.classList.toggle('navbar__arrow-transform')

        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}



