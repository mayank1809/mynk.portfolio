// // add class navbarDark on navbar scroll
// const header = document.querySelector('.navbar');

// window.onscroll = function() {
//     var top = window.scrollY;
//     if(top >=100) {
//         header.classList.add('navbarDark');
//     }
//     else {
//         header.classList.remove('navbarDark');
//     }
// }

// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the navbar element
    var navbar = document.querySelector('.navbar');

    // Add an event listener for the scroll event
    window.addEventListener('scroll', function() {
        // Check the scroll position
        if (window.scrollY > 50) {
            navbar.classList.add('dark-bg');
        } else {
            navbar.classList.remove('dark-bg');
        }
    });
});
