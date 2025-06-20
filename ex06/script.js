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

function displayCheckbox() {
  document.getElementById('resButton').addEventListener('click', () => {
    let checkboxSocials = document.getElementsByName('checkboxSocials');

    let checkedSocials = [];
    checkboxSocials.forEach((ele) => {
      if (ele.checked) {
        checkedSocials.push(ele.id);
      }
    });

    if (checkedSocials.length) {
      let result = document.getElementById('result');
      result.innerText = checkedSocials.join(' - ');
      result.hidden = false;
    } else {
      cleanById('result');
      displayErrorMessage('Seleção vazia!');
    }
  });
}

displayCheckbox();
