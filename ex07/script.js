function displayErrorMessage(text) {
  let errorMessage = document.getElementById('error');
  errorMessage.innerText = text;
  errorMessage.hidden = false;

  setTimeout(() => {
    errorMessage.hidden = true;
  }, 3000);
}

function remHashtag() {
  document.getElementById('remTagButton').addEventListener('click', () => {
    let hashtagSelect = document.getElementById('hashtagSelect').selectedOptions;

    let remHashtagArray = [];
    for (let i = 0; i < hashtagSelect.length; i++) {
      remHashtagArray.push(hashtagSelect[i].id);
      // TODO remover de hashtagArray
    }

    for (let i = 0; i < remHashtagArray.length; i++) {
      let remHashtagOpt = document.getElementById(remHashtagArray[i]);

      let hashtagOpt = document.getElementById('hashtagOpt');
      hashtagOpt.removeChild(remHashtagOpt);
    }
  });
}

function addHashtag() {
  document.getElementById('addTagButton').addEventListener('click', () => {
    let hashtagInput = document.getElementById('hashtagInput').value.trim();

    if (hashtagInput && !(hashtagArray.includes(hashtagInput)) && hashtagInput.length > 2 && hashtagArray.length < 5) {
      hashtagArray.push(hashtagInput);

      let newHashtagOpt = document.createElement('option');
      newHashtagOpt.innerText = hashtagInput;
      newHashtagOpt.id = hashtagInput;
      newHashtagOpt.value = hashtagInput;

      let hashtagOpt = document.getElementById('hashtagOpt');
      hashtagOpt.appendChild(newHashtagOpt);
    } else {
      displayErrorMessage('Hashtag inválida!');
    }
  });
}

let hashtagArray = [];

addHashtag();
remHashtag();
