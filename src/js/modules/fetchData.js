// fetch data

export default async function fetchMenu(){
    const url = 'https://gist.githubusercontent.com/joanpadolina/08113e017f5e114316e3e8742c3df237/raw/ab799d0cb4d602626567ede5c3ecf3dba8f21cba/menu.json'
    const response = await fetch(url)
    const json = await response.json()
    return json.Producten
}

