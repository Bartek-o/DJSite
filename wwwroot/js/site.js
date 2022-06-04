// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

var imagesList = null;
var previousImage = null;
var actualImage = null;
var nextImage = null;

$(document).ready(function () {
    getImages().then(data => {
        var gallery = document.getElementById('container-gallery');
        var html = [];
        data.forEach(function (img) {
            html.push('<div class="col"><img class="gallery-img" src="/assets/gallery/' + img + '" alt="" /></div>');
        });
        gallery.innerHTML = html.join('\n');
    }, error => {
        console.log(error);
    });
});

$(document).on('click', '.gallery-img', function () {
    var background = document.getElementById('gallery-mode');
    background.style.height = $(document).height() + "px";
    var html = [];
    html.push('<button id="btn-close" type="button" style="top: ' +
        (($(window).height() / 10) + $(window).scrollTop() - 50) + 'px;"></button>' +
        '<img src="' + this.src + '" alt="" style="top: ' +
        (($(window).height() / 10) + $(window).scrollTop()) + 'px;"/>' +
        '<button id="btn-prev" type="button" style="top: ' +
        (($(window).height() / 10) * 9 + $(window).scrollTop() + 10) + 'px;"></button>' +
        '<button id="btn-next" type="button" style="top: ' +
        (($(window).height() / 10) * 9 + $(window).scrollTop() + 10) + 'px;"></button>');
    background.innerHTML = html.join('\n');
    background.style.display = "block";
    disableScrolling();

    actualImage = this.src.substring(this.src.lastIndexOf('/') + 1);

    getImages().then(data => {
        imagesList = data;
        setPrevActNextImages();
    }, error => {
        console.log(error);
    });  
});

//$(document).on('click', '#gallery-mode', function () {
//    this.style.display = "none";
//});

function setPrevActNextImages() {
    previousImage = null;
    nextImage = null;
    for (var i = 0; i < imagesList.length; i++) {
        if (i < imagesList.length - 1 && imagesList[i + 1] == actualImage) {
            previousImage = imagesList[i];
        }
        if (imagesList[i] == actualImage && i < imagesList.length - 1) {
            nextImage = imagesList[i + 1];
        }
    }
}

function change(isNext) {
    var background = document.getElementById('gallery-mode');
    var html = [];
    if (isNext) {
        html.push('<button id="btn-close" type="button" style="top: ' +
            (($(window).height() / 10) + $(window).scrollTop() - 50) + 'px;"></button>' +
            '<img src="/assets/gallery/' + nextImage + '" alt="" style="top: ' +
            (($(window).height() / 10) + $(window).scrollTop()) + 'px;"/>' +
            '<button id="btn-prev" type="button" style="top: ' +
            (($(window).height() / 10) * 9 + $(window).scrollTop() + 10) + 'px;"></button>' +
            '<button id="btn-next" type="button" style="top: ' +
            (($(window).height() / 10) * 9 + $(window).scrollTop() + 10) + 'px;"></button>');
    } else {
        html.push('<button id="btn-close" type="button" style="top: ' +
            (($(window).height() / 10) + $(window).scrollTop() - 50) + 'px;"></button>' +
            '<img src="/assets/gallery/' + previousImage + '" alt="" style="top: ' +
            (($(window).height() / 10) + $(window).scrollTop()) + 'px;"/>' +
            '<button id="btn-prev" type="button" style="top: ' +
            (($(window).height() / 10) * 9 + $(window).scrollTop() + 10) + 'px;"></button>' +
            '<button id="btn-next" type="button" style="top: ' +
            (($(window).height() / 10) * 9 + $(window).scrollTop() + 10) + 'px;"></button>');
    }
    background.innerHTML = html.join('\n');
    background.style.display = "block";
    disableScrolling();
}

function disableScrolling() {
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function () { window.scrollTo(x, y); };
}

function enableScrolling() {
    window.onscroll = function () { };
}

$(document).on('click', '#btn-prev', function () {
    if (previousImage != null) {
        change(false);
        actualImage = previousImage;
        setPrevActNextImages();
    }
});

$(document).on('click', '#btn-next', function () {
    if (nextImage != null) {
        change(true);
        actualImage = nextImage;
        setPrevActNextImages();
    }
});

$(document).on('click', '#btn-close', function () {
    enableScrolling();
    var background = document.getElementById('gallery-mode');
    background.style.display = "none";
});

$(document).on('click', '#btn-cookies', function () {
    document.getElementById('cookies').style.display = "none";
});