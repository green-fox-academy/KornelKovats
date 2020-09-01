function reqListener() {
  const data = JSON.parse(this.responseText);
  const main = document.querySelector('.main');
  main.setAttribute('style', 'display: flex');
  main.setAttribute('style', 'flex-direction: column');

  data.data.forEach((element, index) => {
    const newImg = document.createElement('img');
    const newdiv = document.createElement('div');
    newdiv.setAttribute('style', 'height: 100%');
    newdiv.setAttribute('style', 'width: 100%');
    newImg.setAttribute('src', element.images.original_still.url);
    newImg.setAttribute('id', index + 1);
    newImg.addEventListener('click', () => {

      newImg.setAttribute('src', element.images.original.url);
    });
    console.log(element);
    main.appendChild(newdiv);
    newdiv.appendChild(newImg);
  });

  console.log(data);
}

const xhr = new XMLHttpRequest();
xhr.addEventListener('load', reqListener);
xhr.open('GET', 'http://api.giphy.com/v1/gifs/search?q=cheesburger&api_key=mmJhVUskUXrJH7PodceT04vJXIGixRpF&limit=16');
xhr.send();
