  fetch('https://catfact.ninja/fact')
  .then(response => response.json())
  .then(results => {
    console.log(results.fact)
    document.querySelector('p').innerText = results.fact
  })
  .catch(error => console.error('error', error))

function getCat(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(result => {
        console.log(result)
        console.log(result.url)
        localStorage.setItem('kitties', JSON.stringify(result.symbols))
    })
    .catch(error => console.error('error', error))
}

fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(result => {
        console.log(result[0].url)
        document.querySelector('#catMeme').src = result[0].url
    })
    .catch(error => console.error('error', error))

function changeCat(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(result => {
        console.log(result[0].url)
        document.querySelector('#catMeme').src = result[0].url
    })
    .catch(error => console.error('error', error))
}

function changeCatPicture(){
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(results => {
      console.log(results.fact)
      document.querySelector('p').innerText = results.fact
    })
    .catch(error => console.error('error', error))
}

function clickButton(){
    changeCat()
    changeCatPicture()
}

document.querySelector('button').addEventListener('click', clickButton)