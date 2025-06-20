function displayImage() {
  document.getElementById('imgButton').addEventListener('click', () => {
    let selectedImage = document.getElementById('imageInput').files[0];
    if (selectedImage) {
      let figure = document.getElementById('result');
      figure.innerHTML = '';

      let img = document.createElement('img');
      img.src = URL.createObjectURL(selectedImage);
      img.alt = 'Imagem carregada pelo usuário';

      let figcaption = document.createElement('figcaption');
      figcaption.innerText = 'Imagem carregada pelo usuário.';

      figure.appendChild(img);
      figure.appendChild(figcaption);
    }
  });
}

displayImage();
