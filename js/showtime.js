 //seat selection
 // Function to handle seat selection
 function selectSeat(seatNumber, row, price) {
    // Create list item for selected seat
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center selected';
    listItem.textContent = `Seat ${seatNumber} - Row: ${row}, Price: $${price}`;

    // Append selected seat to the list of selected seats
    document.getElementById('selected-seats').appendChild(listItem);

    // Store selected seats in local storage
    saveSelectedSeats();

    
}

// Function to handle seat deselection
function deselectSeat(seatNumber, row, price) {
    // Find and remove the selected seat from the list
    const selectedSeats = document.getElementById('selected-seats');
    const selectedSeat = Array.from(selectedSeats.children).find(
        (seat) =>
            seat.textContent.includes(`Seat ${seatNumber} - Row: ${row}, Price: $${price}`)
    );

    if (selectedSeat) {
        selectedSeats.removeChild(selectedSeat);

        // Store selected seats in local storage after deselection
        saveSelectedSeats();
    }
}

// Function to save selected seats in local storage
function saveSelectedSeats() {
    const selectedSeats = Array.from(document.querySelectorAll('.selected')).map(seat => {
        const seatNumber = seat.textContent.trim().split(' ')[1];
        const row = seat.querySelector('.seat-info').textContent.split(' ')[1];
        const price = seat.querySelector('.seat-info').textContent.split('$')[1];
        return { seatNumber, row, price };
    });

    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
}

// Function to load selected seats from local storage
function loadSelectedSeats() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats')) || [];

    selectedSeats.forEach(seat => {
        selectSeat(seat.seatNumber, seat.row, seat.price);
    });
}

// Function to proceed to checkout
function proceedToCheckout() {
    // Implement logic to navigate to the checkout page
    window.location.href = 'purchase.html';
}

// Example: Add event listeners for seat selection and deselection
document.addEventListener('DOMContentLoaded', function () {
    // Load selected seats from local storage on page load
    loadSelectedSeats();

    const seats = document.querySelectorAll('.list-group-item');

    seats.forEach((seat) => {
        seat.addEventListener('click', function (event) {
            event.preventDefault();

            // Extract seat information from the selected seat
            const seatNumber = seat.textContent.trim().split(' ')[1];
            const row = seat.querySelector('.seat-info').textContent.split(' ')[1];
            const price = seat.querySelector('.seat-info').textContent.split('$')[1];

            // Toggle seat selection status
            seat.classList.toggle('selected');

            // Check if the seat is selected or deselected
            if (seat.classList.contains('selected')) {
                selectSeat(seatNumber, row, price);
            } else {
                deselectSeat(seatNumber, row, price);
            }
        });
    });
});