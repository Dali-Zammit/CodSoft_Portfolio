// Smooth scrolling for navigation links
document.querySelectorAll('.navlist a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Download CV functionality
document.querySelector('.top-btn').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'CV-Mohamed-Ali-V2.pdf'; 
    link.download = 'CV-Mohamed-Ali-V2.pdf'; 
    link.click();
});

// Scroll to top on page reload
window.onload = function() {
    window.scrollTo(0, 0);
}