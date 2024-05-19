document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    console.log('Email:', email);
    console.log('Objet:', subject);
    console.log('Récapitulatif:', message);
});