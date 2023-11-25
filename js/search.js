// search animated
function liveSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchResultsContainer = document.getElementById('searchResults');
    const movies = document.querySelectorAll('.card');

    const searchQuery = searchInput.value.toLowerCase();

  
    const matchingMovies = Array.from(movies).filter(movie => {
        const title = movie.querySelector('.card-title').textContent.toLowerCase();
        return title.includes(searchQuery);
    });

    
    displaySearchResults(searchResultsContainer, matchingMovies);
}

function displaySearchResults(container, results) {
    container.innerHTML = ''; 

    if (results.length === 0) {
        container.textContent = 'No results found';
    } else {
        results.forEach(result => {
            const clone = result.cloneNode(true);
            container.appendChild(clone);
        });
    }
}

function toggleSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.classList.toggle('search-active');

    if (searchInput.classList.contains('search-active')) {
        searchInput.focus();
    }
}