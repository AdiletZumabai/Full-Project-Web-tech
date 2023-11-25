//GAME
document.addEventListener("DOMContentLoaded", function() {
    const captchaPassed = sessionStorage.getItem('captchaPassed');
    if (captchaPassed === 'true') {
    } else {
        window.location.href = "game.html";
    }
});