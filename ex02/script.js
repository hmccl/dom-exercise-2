function displayErrorMessage(text) {
  let errorMessage = document.getElementById('error');
  errorMessage.innerText = text;
  errorMessage.classList.remove('hidden');

  setTimeout(() => {
    errorMessage.classList.add('hidden');
  }, 3000);
}

function displayMessage() {
  document.getElementById('msgButton').addEventListener('click', () => {
    let messageInput = document.getElementById('messageInput').value.trim();
  
    if (messageInput) {
      let message = document.getElementById('message');
      message.innerText = messageInput;
      message.classList.remove('hidden');
    } else {
      displayErrorMessage('Mensagem vazia!');
    }
  });
}

displayMessage();
