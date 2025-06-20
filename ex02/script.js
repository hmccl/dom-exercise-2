function displayErrorMessage(text) {
  let errorMessage = document.getElementById('error');
  errorMessage.innerText = text;
  errorMessage.hidden = false;

  setTimeout(() => {
    errorMessage.hidden = true;
  }, 3000);
}

function cleanById(id) {
  document.getElementById(id).innerHTML = '';
}

function displayMessage() {
  document.getElementById('msgButton').addEventListener('click', () => {
    let messageInput = document.getElementById('messageInput').value.trim();

    if (messageInput) {
      let message = document.getElementById('message');
      message.innerText = messageInput;
      message.hidden = false;
    } else {
      cleanById('message');
      displayErrorMessage('Mensagem vazia!');
    }
  });
}

displayMessage();
