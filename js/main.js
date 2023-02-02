$(document).ready(function() {

    // Menu
    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $(".header__nav").toggleClass("header__nav--active")
        $("body").toggleClass("fixed-body")
    })

})