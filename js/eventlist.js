//click and keypress and modal box
document.getElementById('completePurchaseBtn').addEventListener('click', completePurchase);

document.getElementById('name').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        completePurchase();
    }
});

document.getElementById('email').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        completePurchase();
    }
});

document.getElementById('paymentMethod').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        completePurchase();
    }
});

function completePurchase() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var paymentMethod = document.getElementById('paymentMethod').value;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !paymentMethod) {
        displayModal('Please fill out all required fields.');
        return;
    }

    if (!emailRegex.test(email)) {
        displayModal('Please enter a valid email address.');
        return;
    }

    displayModal('Purchase approved!');
}

function handleModalClose() {
    window.location.href = 'index.html';
}

function displayModal(message) {
    var modalBody = document.getElementById('purchaseModalBody');
    modalBody.textContent = message;

    var purchaseModal = new bootstrap.Modal(document.getElementById('purchaseModal'));

    purchaseModal._element.addEventListener('hidden.bs.modal', handleModalClose);

    purchaseModal.show();
}


//Modal box
function validateAndCompletePurchase() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;

    if (username === '' || email === '') {
        alert('Please fill in all the required fields.');
    } else {
        openModal();
    }
}

function openModal() {
    var modal = document.getElementById('purchaseModal');
    modal.style.display = 'flex';
}

function closeModal() {
    var modal = document.getElementById('purchaseModal');
    modal.style.display = 'none';
    

    window.location.href = 'index.html';
}

