//hover
document.addEventListener('DOMContentLoaded', function () {
        const movieImages = document.querySelectorAll('.carousel-item img');

        movieImages.forEach((img) => {
            img.addEventListener('mouseover', function () {
                this.style.transform = 'scale(1.1)';
            });

            img.addEventListener('mouseout', function () {
                this.style.transform = 'scale(1)';
            });
        });
    });


// Pop-up tooltip
 
 $(document).ready(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();
});


