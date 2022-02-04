//Buscar os links salvos 
export async function getLinkSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}


// Salvar um link no storage
export async function saveLink(key, newLink){
    let linksStored = await getLinkSave(key);

    //se ja tiver um link salvo com algum id eu nao vou deixar duplicar
    const hasLink = linksStored.some(Link => Link.id === newLink.id)

    if(hasLink){
        console.log('esse link ja existe na sua lista')
        return;
    }

    //ADD LINK NA LISTA 
    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    console.log('link salvo com sucesso')
}


//Delete algum link ja salvo
export function deleteLink(links, id){
    let myLinks = links.filter( item => {
        return(item.id !== id)
    })

    localStorage.setItem('@encurtaLink', JSON.stringify(myLinks))
    return myLinks;
}