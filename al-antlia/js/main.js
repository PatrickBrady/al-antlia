/*================================================================*/
/* DOM READY
/*================================================================*/
$(document).ready(function(){

    // Disable href="#" only. Does not disable use of anchor/hashtag links.
    $('a[href="#"]').click(function(e) {
        e.preventDefault();
    });

    // Remove focus after mouseup event
    $(".btn").mouseup(function(){
            $(this).blur();
    });

    // Active Menu Class
    (function () {
        var path = window.location.href;

        if (path) {
            $('#TopNav_1 li a[href$="' + path + '"]').parents('li').addClass('active');
        }
    })();

    // Hide related content section if empty
    (function () {
        var $related = $('.related'),
            $relatedRow = $('.related .row-fluid');

        if ($related.length > 0) {
            if ($relatedRow.children().length === 0) {
                $related.hide();
            }
        }
    })();


    // Initialize: Superfish Navigation (desktop)
    $('.sf-menu').superfish({
        delay:       0,
        animation: { height: 'show'},
        animationOut: { height: 'hide'},
        speed:       'fast',
        cssArrows:  false
    });

    // Initialize: slicknav (mobile)
    $('#menu .sf-menu').slicknav({
        label: ''
    });


});

/*================================================================*/
/* WINDOW.LOAD
/*================================================================*/
$(window).load(function() {

    if ($(window).width() > 768) {
        // DO Somthing
    }

});