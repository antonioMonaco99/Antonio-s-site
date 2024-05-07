/*function to make nav always on the top of the page*/
window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    var scrollTop = window.scrollY;

    if (scrollTop > 900) {
        nav.classList.add('nav-fixed');
        
    } else {
       nav.classList.remove('nav-fixed');
    }
});


