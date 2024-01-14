const primaryNav = document.querySelector(".navLinks");
const navToggle = document.querySelector(".mobileMenu");
const titleDel = document.querySelector(".title");

navToggle.addEventListener("click", () =>{
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
        titleDel.setAttribute("aria-deleted", true);
    } else if(visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
        titleDel.setAttribute("aria-deleted", false);
    }
});

