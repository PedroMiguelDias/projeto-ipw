let button = document.querySelector(".fa-bars");
let menuLinks = document.querySelectorAll("#menu-link");

for (let i=0; i < menuLinks.length; i++) {
    button.addEventListener("click", function() {
        menuLinks[i].style.display = 'inline';
    })
}
