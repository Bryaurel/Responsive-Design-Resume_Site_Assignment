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

window.addEventListener('scroll', function () {
    const card = document.querySelector('.card');
    const aboutSection = document.getElementById('about');

    
    const aboutSectionTop = aboutSection.offsetTop;
    const aboutSectionHeight = aboutSection.clientHeight;
    const scrollPosition = window.scrollY;

    
    if (scrollPosition > aboutSectionTop + aboutSectionHeight * 0.7) {
        card.classList.remove('hidden');
    } else {
        card.classList.add('hidden');
    }
});
