function initMap() {
    
    const loc = { lat: 40.400349, lng: -3.673591 };

    const map = new google.maps.Map(document.querySelector(".contact__map")
    , {
        zoom: 14,
        center: loc
    });

    const marker = new google.maps.Marker({ position: loc, map: map});
}


// Smooth scrolling
function smoothScroll () {
    $('.navbar-main__list a, .btn').on('click', function(evt) {
        if (this.hash !== '') {
            evt.preventDefault();

            const hash = this.hash;

            $('html, body').animate({
                    scrollTop: $(hash).offset().top - 62
                }, 800);
        }
    });
}

// header scroll hidden
function verticalScroll () {
    let navBar = document.querySelector('.navbar-main');
    const firstDiv = document.querySelector('.intro').offsetTop;
    let navOffsetTop = 500;

    window.addEventListener('scroll', function() {

        if ( navBar.offsetTop > navOffsetTop ) {

            navBar.classList.add('hidden-nav');
            navOffsetTop = navBar.offsetTop;

        } else if ( navBar.offsetTop < navOffsetTop && navBar.offsetTop > firstDiv ) {

            navBar.classList.remove('hidden-nav');
            navOffsetTop = navBar.offsetTop;
        
        }
        
    })
}

$(document).ready(function() {

    // Scrolling effect
    smoothScroll();

    // header scroll hidden
    verticalScroll();

});