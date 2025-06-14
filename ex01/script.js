document.getElementById('errButton').addEventListener('click', () => {
  let errorMessage = document.getElementById('errMessage');
  errorMessage.classList.remove('hidden');

  setTimeout(() => {
    errorMessage.classList.add('hidden');
  }, 3000);
});
