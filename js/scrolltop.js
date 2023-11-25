//Scroll

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('backToTopButton');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});


document.getElementById('backToTopButton').addEventListener('click', scrollToTop);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Home') {
        scrollToTop();
    }
});

//Mouseover

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
// Add mouseover event
card.addEventListener('mouseover', () => {

card.classList.add('mouseover-effect');
});

card.addEventListener('mouseout', () => {

card.classList.remove('mouseover-effect');
});
});



