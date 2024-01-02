document.addEventListener('DOMContentLoaded', function() {
    var background = document.getElementById('horizontal-background');

    window.addEventListener('scroll', function() {
        var scrolledHeight = window.pageYOffset;
        var maxScrollHeight = document.body.scrollHeight - window.innerHeight;
        var scrollFraction = scrolledHeight / maxScrollHeight;
        var backgroundScrollWidth = background.scrollWidth - window.innerWidth;

        background.style.transform = 'translateX(-' + scrollFraction * backgroundScrollWidth + 'px)';
    });
});