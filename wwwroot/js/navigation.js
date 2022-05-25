function mobileMenu() {
    $("#btn-toggle-nav").toggleClass("open");

    if (document.getElementById("btn-toggle-nav").classList.contains("open")) {
        $("#navbar-list-mobile").animate({ top: "66px" }, 1000);
    } else {
        $("#navbar-list-mobile").animate({ top: "-134px" }, 1000);
    }
    
}