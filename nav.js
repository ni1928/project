const nav = document.querySelector('nav');
const toggle_btn = document.getElementById('toggle-btn');
const content = document.querySelector('section');
const footer = document.querySelector('.mobile-button');

toggle_btn.onclick = function(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    nav.classList.toggle('hide');
    content.classList.toggle('expand');
    footer.classList.toggle('hide');
};

// Close the sidebar when clicking anywhere outside the sidebar
document.addEventListener('click', function(event) {
    if (!nav.contains(event.target) && !toggle_btn.contains(event.target)) {
        // Check if the clicked element is not inside the sidebar or the toggle button
        nav.classList.add('hide');
        content.classList.remove('expand');
        footer.classList.remove('hide');
    }
});


