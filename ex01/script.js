function createErrorMessage() {
  document.getElementById('errButton').addEventListener('click', () => {
    let messageInput = document.getElementById('messageInput').value;
    let idInput = document.getElementById('idInput').value;
  
    let errorMessage = document.getElementById(idInput);
    errorMessage.innerText = messageInput;
    // sem utilizar display: none
    // https://html.spec.whatwg.org/multipage/interaction.html#the-hidden-attribute
    errorMessage.hidden = false;
  
    setTimeout(() => {
      errorMessage.hidden = true;
    }, 3000);
  });
}

createErrorMessage();
