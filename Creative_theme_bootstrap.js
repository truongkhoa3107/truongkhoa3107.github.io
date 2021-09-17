$(document).ready(function () {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
    $(window).scroll(function () { 
        // console.log($('.menutop').offset().top);
        if ($('.menutop').offset().top > 0) {
            $('.menutop').addClass('biendoi');
        } else {
            $('.menutop').removeClass('biendoi');
        }
    });
    $('.logo').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1000) 
        $('._1khoi a').parent().removeClass('active');
    })
    $('._1khoi a').click(function (e) {
        e.preventDefault();
        $('._1khoi a').parent().removeClass('active');
        $('html, body').animate({scrollTop: $($(this).data('id')).offset().top - 72}, 1000);
        $(this).parent().addClass('active');
    })

});