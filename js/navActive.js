/*function to color nav element on the current section*/
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', function() {
        var currentScroll = window.scrollY;

        
        document.querySelectorAll('section').forEach(function(section) {
            var sectionId = section.getAttribute('id');
            var sectionTop = section.offsetTop;
            var sectionBottom = sectionTop + section.offsetHeight;

           
            if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
          
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                });

               
                var activeLink = document.querySelector('nav a[href="#' + sectionId + '"]');
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    });
});
