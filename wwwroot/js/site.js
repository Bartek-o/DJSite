// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).on('click', '.gallery-img', function () {
    var background = $("#gallery-mode");
    background.css({
        height: $(document).height()
    });
    background.show();
    
});
