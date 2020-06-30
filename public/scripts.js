const modalOverlay = document.querySelector('.modalOverlay');
const cards = document.querySelectorAll('.card');

for (let card of cards) {    
    card.addEventListener('click', function() {
        const index = card.getAttribute("id");
        window.location.href = `/recipes/${index}`;
    });
}

// document.querySelector('.close-modal').addEventListener('click', function() {
//     modalOverlay.classList.remove('active');
// });



