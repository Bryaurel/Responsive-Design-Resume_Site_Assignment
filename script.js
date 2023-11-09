document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Détection du défilement vers le haut ou vers le bas
let currentIndex = 0;

document.addEventListener('scroll', function (e) {
    const aboutContent = document.querySelector('.about-content');
    const cards = document.querySelectorAll('.card');
    const cardText = document.querySelectorAll('.card p');

    if (window.scrollY < aboutContent.offsetTop) {
        currentIndex = 0; // Afficher l'introduction
    } else if (window.scrollY < cards[1].offsetTop) {
        currentIndex = 1; // Afficher les compétences
    } else {
        currentIndex = 2; // Afficher le dernier texte
    }

    // Mettre à jour l'opacité de l'introduction
    const aboutText = document.querySelector('.about-text');
    aboutText.style.opacity = currentIndex === 0 ? 1 : 0;

    // Appliquer la rotation aux cartes
    cards.forEach((card, index) => {
        if (index === currentIndex) {
            card.style.transform = 'rotateY(0deg)';
        } else {
            card.style.transform = 'rotateY(180deg)';
        }
    });

    // Afficher le paragraphe approprié
    cardText.forEach((text, index) => {
        text.style.display = index === currentIndex ? 'block' : 'none';
    });
});