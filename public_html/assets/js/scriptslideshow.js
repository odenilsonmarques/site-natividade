$(document).ready(function () {
    $('#slide').css("overflow", "hidden").cycle({
        fx: 'scrollLeft',
        prev: '#prev',
        next: '#next',
        speed: 2000
    });
});


