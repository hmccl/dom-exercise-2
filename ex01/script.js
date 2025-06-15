document.getElementById('errButton').addEventListener('click', () => {
  let messageInput = document.getElementById('messageInput').value;
  let idInput = document.getElementById('idInput').value;

  let errorMessage = document.getElementById(idInput);
  errorMessage.innerText = messageInput;
  errorMessage.classList.remove('hidden');

  setTimeout(() => {
    errorMessage.classList.add('hidden');
  }, 3000);
});
