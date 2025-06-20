function displayImageOnChange() {
  let select = document.querySelector('#select');
  let figure = document.querySelector('#result');

  select.addEventListener('change', (event) => {
    figure.innerHTML = '';

    let img = document.createElement('img');
    img.src = event.target.value;
    img.alt = event.target.options[event.target.selectedIndex].text;

    let figcaption = document.createElement('figcaption');
    figcaption.innerText = event.target.options[event.target.selectedIndex].text;

    figure.appendChild(img);
    figure.appendChild(figcaption);
  });
}

displayImageOnChange();
