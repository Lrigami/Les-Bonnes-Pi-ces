const reponse = await fetch("pieces-autos.json")
const pieces = await reponse.json()

for (let i = 0 ; i < pieces.length ; i++) {
    const article = pieces[i]
    const sectionFiches = document.querySelector(".fiches")
    const pieceElement = document.createElement("article")

    const imageElement = document.createElement("img")
    imageElement.src = article.image
    const nomElement = document.createElement("h2")
    nomElement.innerText = article.nom 
    const prixElement = document.createElement("p")
    prixElement.innerText = `Prix : ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`
    const categorieElement = document.createElement("p")
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)"
    const descriptionElement = document.createElement("p")
    descriptionElement.innerText = article.description ?? "(Pas de description pour le moment."
    const disponibiliteElement = document.createElement("p")
    disponibiliteElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock"

    sectionFiches.appendChild(pieceElement)
    pieceElement.appendChild(imageElement)
    pieceElement.appendChild(nomElement)
    pieceElement.appendChild(prixElement)
    pieceElement.appendChild(categorieElement)
    pieceElement.appendChild(descriptionElement)
    pieceElement.appendChild(disponibiliteElement)
}


const boutonTrier = document.querySelector(".btn-trier")
boutonTrier.addEventListener("click", function () {
    pieces.sort(function(a, b) {
        return a.prix - b.prix
    })
    console.log(pieces)
}) 