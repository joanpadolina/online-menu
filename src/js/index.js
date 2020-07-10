import fetchProducts from './modules/fetchData'

const dataFetch = async () => {
    const product = await fetchProducts()
    return product
}

// create articles for each product
async function createDom() {
    const product = document.querySelector('.product')
    const categorieProduct = document.querySelector('.categorie-product').childNodes[0].nodeValue
    const data = await dataFetch()
    const filteredData = data.filter(item => {
        if (categorieProduct == "Frisdranken") {
            return item.Submenu == "KOUDE DRANKEN"
        }
        if (categorieProduct == "Wijn") {
            return item.Submenu == "WIJNEN"
        }
        if (categorieProduct == "Snacks") {
            return item.Submenu == "SNACKS"
        }
        if (categorieProduct == "Bier") {
            return item.Submenu == "BIEREN"
        }
        if (categorieProduct == "Warme dranken") {
            return item.Submenu == "WARME DRANKEN"
        }

    })
    const renderData = filteredData.forEach(item => {
        product.insertAdjacentHTML('beforeend', `
        <article>
        <h2 class="product-name">
        ${item.Productnaam}
        </h2>
        <p class="product-price">
        ${item.Prijs}</p>
        <img class="product-img" src="${item.afbeelding}" alt="">
        </article>
        `)
    })
    return renderData
}

async function filterData(data) {
    const filteredData = data.filter(item => {
        if (categorieProduct.innerHTML == "Frisdranken") {
            console.log("yes")
            return item.categorie == "Frisdrank"
        }
        // return item
        // console.log(item)
    })
    console.log(filteredData)
}
filterData()
createDom()