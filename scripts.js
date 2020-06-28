const modalOverlay = document.querySelector('.modalOverlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {    
    card.addEventListener('click', function() {
        const modal = document.querySelector('.modal');
        const image = card.querySelector('img').getAttribute('src');
        const titleRecipe = card.querySelector('h2').innerHTML;
        const authorRecipe = card.querySelector('p').innerHTML;

        document.querySelector('.modal img').setAttribute('src', image);
        document.querySelector('.modal h2').innerHTML = titleRecipe;
        document.querySelector('.modal p').innerHTML = authorRecipe;

        modalOverlay.classList.add('active');
    });
}

document.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active');
});



