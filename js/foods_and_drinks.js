
    //Modal box
    function updateCheckoutModal() {
        const modalSelectedItemsList = document.getElementById('modal-selected-items');
        const modalTotal = document.getElementById('modal-total');

       
        modalSelectedItemsList.innerHTML = '';

       
        selectedItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            modalSelectedItemsList.appendChild(listItem);
        });

        
        const total = selectedItems.reduce((sum, item) => sum + item.price, 0);
        modalTotal.textContent = total.toFixed(2);
    }


    
    document.getElementById('proceedToCheckoutButton').addEventListener('click', function () {
        
        updateCheckoutModal();

      
        const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
        checkoutModal.show();
    });



    const selectedItems = [];

    function addToCart(name, price) {
        
        const newItem = { name, price };


        selectedItems.push(newItem);

      
        updateSelectedItems();
    }

    
    function updateSelectedItems() {
        const selectedItemsList = document.getElementById('selected-items');

       
        selectedItemsList.innerHTML = '';

        
        selectedItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            selectedItemsList.appendChild(listItem);
        });
    }

    function proceedToCheckout() {
    
    const selectedItemsString = encodeURIComponent(JSON.stringify(selectedItems));
    window.location.href = `foodpurchase.html?selectedItems=${selectedItemsString}`;
}
