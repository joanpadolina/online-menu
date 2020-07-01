console.log('menu')

// fetch data
const url = 'https://gist.githubusercontent.com/joanpadolina/08113e017f5e114316e3e8742c3df237/raw/70d0d7d625ea05edb124c247c7bcad5ae9776d0a/gistfile1.json'

async function fetchMenu(url){
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
    return json
}

const product = document.querySelector('.product')
const productName = document.querySelector('.product-name')
const productPrice = document.querySelector('.product-price')
const productImg = document.querySelector('.product-img')

async function createDom(){
    const data = await fetchMenu(url)
    const renderData = data.forEach(item => {
        product.insertAdjacentHTML('beforeend', `
        <article>
        <h2 class="product-name">
        ${item.naam}
        </h2>
        <p class="product-price">
        ${item.prijs}</p>
        <img class="product-img" src="${item.afbeelding}" alt="">
        </article>
        `)
    })
    return renderData
}


console.log(createDom())