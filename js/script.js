window.onload = () => {

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('service-worker.js')
            .then(function () {
                console.log("Service Worker Registered.")
            })
    }

    $(window).scroll(function () {

        let navOpacity = $(this).scrollTop();

//        if (navOpacity > 190) {
//            if (!$('body').hasClass('abrido'))
//                $('#header-main').addClass('arre');
//        } else {
//            $('#header-main').removeClass('arre');
//        }
    });

    $('#burger').on('click', function (e) {

        e.preventDefault();

        $('#nav-main, body, #burger').toggleClass('open');

        if ($('#header-main').hasClass('close')) {
            $('#header-main').removeClass('close').addClass('kick');
        } else if ($('#header-main').hasClass('kick')) {
            $('#header-main').removeClass('kick');
            setTimeout(() => {
                $('#header-main').addClass('close')
            }, 800);
        }

    });

    //    document.getElementById('homeLink').addEventListener('click', function () {
    //        document.querySelector('#home').scrollTop();
    //    })
    //    document.getElementById('chevronLink').addEventListener('click', function () {
    //        document.querySelector('#work').scrollTop();
    //    });
    //    document.getElementById('workLink').addEventListener('click', function () {
    //        document.querySelector('#work').scrollTop();
    //    })
    //    document.getElementById('bioLink').addEventListener('click', function () {
    //        document.querySelector('#bio').scrollTop();
    //    })
    //    document.getElementById('contactLink').addEventListener('click', function () {
    //        document.querySelector('#contact').scrollTop();
    //    })

    //    function scrollTo(element, to, duration) {
    //        var start = element.scrollTop,
    //            change = to - start,
    //            currentTime = 0,
    //            increment = 20;
    //
    //        var animateScroll = function () {
    //            currentTime += increment;
    //            var val = Math.easeInOutQuad(currentTime, start, change, duration);
    //            element.scrollTop = val;
    //            if (currentTime < duration) {
    //                setTimeout(animateScroll, increment);
    //            }
    //        };
    //        animateScroll();
    //    }
    //
    //    Math.easeInOutQuad = function (t, b, c, d) {
    //        t /= d / 2;
    //        if (t < 1) return c / 2 * t * t + b;
    //        t--;
    //        return -c / 2 * (t * (t - 2) - 1) + b;
    //    };


}

//By @nodws
