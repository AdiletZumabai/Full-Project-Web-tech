//pop-up chat window
document.addEventListener('DOMContentLoaded', function () {
    // Create and append the chat modal
    var chatModal = document.createElement('div');
    chatModal.className = 'modal fade';
    chatModal.id = 'chatModal';
    chatModal.tabIndex = '-1';
    chatModal.setAttribute('aria-labelledby', 'chatModalLabel');
    chatModal.setAttribute('aria-hidden', 'true');

    var modalDialog = document.createElement('div');
    modalDialog.className = 'modal-dialog modal-dialog-centered';

    var modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    var modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    var modalTitle = document.createElement('h5');
    modalTitle.className = 'modal-title';
    modalTitle.id = 'chatModalLabel';
    modalTitle.innerText = 'Chat Window';

    var closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'btn-close';
    closeButton.setAttribute('data-bs-dismiss', 'modal');
    closeButton.setAttribute('aria-label', 'Close');

    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);

    var modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

   
    var messageContainer = document.createElement('div');
    messageContainer.id = 'messageContainer';
    modalBody.appendChild(messageContainer);

    
    var messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.className = 'form-control mb-2';
    messageInput.placeholder = 'Type your message...';

    var sendButton = document.createElement('button');
    sendButton.type = 'button';
    sendButton.className = 'btn btn-primary';
    sendButton.innerText = 'Send';
    sendButton.addEventListener('click', function () {
        sendMessage(messageInput.value);
        messageInput.value = ''; 
    });

    modalBody.appendChild(messageInput);
    modalBody.appendChild(sendButton);

    var modalFooter = document.createElement('div');
    modalFooter.className = 'modal-footer';

    var closeChatButton = document.createElement('button');
    closeChatButton.type = 'button';
    closeChatButton.className = 'btn btn-secondary';
    closeChatButton.setAttribute('data-bs-dismiss', 'modal');
    closeChatButton.innerText = 'Close';

    modalFooter.appendChild(closeChatButton);

    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    modalDialog.appendChild(modalContent);
    chatModal.appendChild(modalDialog);

    document.body.appendChild(chatModal);

    
    function sendMessage(message) {
        var messageElement = document.createElement('p');
        messageElement.innerText = 'User: ' + message;
        messageContainer.appendChild(messageElement);
    }
});