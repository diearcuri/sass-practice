// Smooth Scrolling
$('.btn').on('click', function (evt) {
    if (this.hash !== '') {
        evt.preventDefault();
        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800);
    }
    console.log(this.hash);
});