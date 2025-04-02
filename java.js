// Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Contact Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();

    if (name === ''  email === ''  message === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert('Message sent successfully!');
    this.reset();
});