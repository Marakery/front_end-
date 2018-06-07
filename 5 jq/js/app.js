$(window).on('load', function() {
    hamburger();
    scrollTop();
    anchor();
    form();
});


function hamburger() {
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
        $("#panel").slideToggle('slow');
    });
}


function scrollTop() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
}


function anchor() {
    $('#menu').on('click', 'a', function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 300);
    });
}


function form() {

    $("#onclick").click(function() {
        $("#contactdiv").css("display", "block");
        $('body').css('overflowY', 'hidden');
    });

    $("#contact #cancel").click(function() {
        $(this).parent().parent().hide();
        $('body').css('overflowY', 'auto');
    });

    $(window).on('click', function(e) {
        if ($(e.target).hasClass('modal')) {
            $("#contactdiv").css("display", "none");
            $('body').css('overflowY', 'auto');
        }
    });

    $("#send").click(function validateForm() {
        event.preventDefault();
        var name = $("#film_name");
        var message = $("#subject");
        var image = $("#image");
        $("#subject, #image, #film_name").on('click', function() { $("#subject, #image, #film_name").removeClass('empty'); });

        var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
        if (name.val() == "" || message.val() == "" || !regex.test(image.val())) {
            if (name.val() == "") { name.addClass('empty'); }
            if (message.val() == "") { message.addClass('empty'); }
            if (!regex.test(image.val())) { image.addClass('empty'); }
        } else {
            $("#contactdiv").css("display", "none");
            $('div.displayed').append('<div class="column">' + '<img class="new_img" src="' + image.val() + '"alt="Hello Image" />' + '<h2>' + name.val() + '</h2>' + '<p>' + message.val() + '</p>' + '</div>');
            $('body').css('overflowY', 'auto');
        }
    });
}
