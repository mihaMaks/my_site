document.getElementById('explore-btn').addEventListener('click', function() {
    const hero = document.getElementById('hero');
    const mainContent = document.getElementById('main-content');

    // Trigger the explosion animation
    hero.classList.add('explode');

    // Wait for animation to finish, then swap content
    setTimeout(() => {
        hero.style.display = 'none';
        mainContent.classList.remove('hidden');
        window.scrollTo(0, 0);
    }, 800); // Matches the CSS transition time
});