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

document.querySelector('button').addEventListener('click', changeCat)