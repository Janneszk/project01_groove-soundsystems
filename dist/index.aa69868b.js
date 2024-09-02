"use strict";
// Wird beim Laden des DOMs ausgeführt
document.addEventListener("DOMContentLoaded", function() {
    // Code zum Initialisieren von DOM-Elementen
    const navbar = document.querySelector(".navbar");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    // navbar background mit debounce
    let debounceTimer;
    function updateNavbarBackground() {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function() {
            if (window.scrollY > navbar.getBoundingClientRect().height || navbarToggler.getAttribute("aria-expanded") === "true") navbar.classList.add("bg--dark");
            else navbar.classList.remove("bg--dark");
        }, 50); // 100ms Verzögerung
    }
    window.addEventListener("scroll", updateNavbarBackground);
    // Hintergrundfarbe der Navbar ändert sich beim Klick auf den Toggler
    navbarToggler.addEventListener("click", updateNavbarBackground);
    // Click-Event für das Schließen des Menüs beim Klick außerhalb
    document.addEventListener("click", function(event) {
        const isClickInsideNavbar = navbar.contains(event.target);
        if (!isClickInsideNavbar && navbarToggler.getAttribute("aria-expanded") === "true") navbarToggler.click();
    });
    //Click-Event für Links im Menü
    const menuLinks = document.querySelectorAll("#navbarSupportedContent .nav-link");
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        });
    });
});

//# sourceMappingURL=index.aa69868b.js.map
