function mobileMenu() {
    $("#btn-toggle-nav").toggleClass("open");

    if (document.getElementById("btn-toggle-nav").classList.contains("open")) {
        $("#navbar-container-mobile").animate({ top: "56px" }, 1000);
    } else {
        $("#navbar-container-mobile").animate({ top: "-144px" }, 1000);
    }
    
}