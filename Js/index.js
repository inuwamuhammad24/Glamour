$(document).ready(function() {
    $('#menu').on('click', function() {
        $('nav').slideToggle(400, function() {
            $(this).toggleClass('nav-expanded').css('display', '')
        })
    })
})