$(document).ready(function () { // Select all links with hashes
    $("h2")
        .wrapInner("<span>")

    $("h2 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");


    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});

$(document).scroll(function () {
   if ($(this).scrollTop() > ($(window).height()-500)){
        $('#support-animation').addClass('animate');
   }else{
        $('#support-animation').removeClass('animate');
   }

    if ($(this).scrollTop()+ $(window).height() > ($(document).height()-300)){
        $('#support-animation').removeClass('animate');
    }
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById('id01')) {
        $('#id01').toggleClass('active');
    }
}

document.onready = function () {
  document.querySelectorAll("input[data-required]").forEach(function (e) {
     e.required = true;
  });
};