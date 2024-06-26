// Add any additional interactivity or animations here if needed.
document.addEventListener('DOMContentLoaded', function () {
    // For example, you could add a scroll effect for smooth scrolling.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
