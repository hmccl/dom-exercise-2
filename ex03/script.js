function rate(likes, comments, shares, views) {
  return (((likes + comments + shares) / views) * 100).toString();
}

function displayErrorMessage(text) {
  let errorMessage = document.getElementById('error');
  errorMessage.innerText = text;
  errorMessage.classList.remove('hidden');

  setTimeout(() => {
    errorMessage.classList.add('hidden');
  }, 3000);
}

function displayMessage() {
  document.getElementById('resButton').addEventListener('click', () => {
    let likes = Number(document.getElementById('likes').value);
    let comments = Number(document.getElementById('comments').value);
    let shares = Number(document.getElementById('shares').value);
    let views = Number(document.getElementById('views').value);

    // não é necessário utilizar isNaN
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/number
    if (likes && comments && shares && views && views !== 0) {
      let message = document.getElementById('result');
      message.innerText = 'Taxa de Engajamento: ' + rate(likes, comments, shares, views);
      message.classList.remove('hidden');
    } else {
      displayErrorMessage('Dados não numéricos!');
    }
  });
}

displayMessage();
