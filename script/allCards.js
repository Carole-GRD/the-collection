
// ======================================
//             ALL CARDS
// ======================================


// grid container for arranging all cards
let gridContainerTag = document.createElement('div'); 

// for (let papillon of collectionOfButterflies) {
for (let i = 0; i < collectionOfButterflies.length; i++) {
    // contents of a card
    let cardTag = document.createElement('div');
    
    // image
    let imageTag = document.createElement('img');
    // imageTag.setAttribute('src', papillon.image);
    imageTag.setAttribute('src', collectionOfButterflies[i].image);

    // ARTICLE CONTAINER
    let articleTag = document.createElement('article');

    // ARTICLE : region + color
    let colorAndRegionContainerTag = document.createElement('div');
    
    let colorTag = document.createElement('p');
    let color = document.createTextNode(colorArr[i]);
    colorTag.appendChild(color);

    let distributionRegionTag = document.createElement('p');
    let distributionRegion = document.createTextNode('Région : ' + collectionOfButterflies[i].distributionRegion)
    distributionRegionTag.appendChild(distributionRegion);

    colorAndRegionContainerTag.appendChild(colorTag);
    colorAndRegionContainerTag.appendChild(distributionRegionTag);

    // ARTICLE : commonName + scientificName
    let nameContainerTag = document.createElement('div');

    let commonNameTag = document.createElement('h2');
    let commonName = document.createTextNode(collectionOfButterflies[i].commonName)
    commonNameTag.appendChild(commonName);

    let scientificNameTag = document.createElement('h3');
    let scientificName = document.createTextNode(collectionOfButterflies[i].scientificName)
    scientificNameTag.appendChild(scientificName);

    nameContainerTag.appendChild(commonNameTag);
    nameContainerTag.appendChild(scientificNameTag);

    
    // ARTICLE : description
    let descriptionTag = document.createElement('p');
    let description = document.createTextNode(collectionOfButterflies[i].description)
    descriptionTag.appendChild(description);

    // ARTICLE : external link
    let externalLinkTag = document.createElement('a');
    externalLinkTag.setAttribute('href', collectionOfButterflies[i].externalLink);
    let imgLink = document.createElement('img');
    imgLink.setAttribute('src', '../image/youtube.png');
    externalLinkTag.appendChild(imgLink);

    // -----------------------------------
    // Add to article
    articleTag.appendChild(colorAndRegionContainerTag);
    articleTag.appendChild(nameContainerTag);
    articleTag.appendChild(descriptionTag);

    // -----------------------------------
    // Add to card
    cardTag.appendChild(imageTag);
    cardTag.appendChild(articleTag);
    cardTag.appendChild(externalLinkTag);
    
    
    // -----------------------------------
    // Add to grid
    gridContainerTag.appendChild(cardTag);
}


// Add gridContainer to global container
containerTag.appendChild(gridContainerTag);
