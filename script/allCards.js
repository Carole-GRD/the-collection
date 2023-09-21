
// ======================================
//             ALL CARDS
// ======================================


// grid container for arranging all cards
let gridContainerTag = document.createElement('div'); 
gridContainerTag.className = 'allCards';

// for (let papillon of collectionOfButterflies) {
for (let i = 0; i < collectionOfButterflies.length; i++) {
    // contents of a card
    let cardTag = document.createElement('div');
    
    // image
    let imageTag = document.createElement('img');
    imageTag.setAttribute('src', collectionOfButterflies[i].image);

    // ARTICLE CONTAINER
    let articleTag = document.createElement('article');

    // ARTICLE : region + colors
    let colorAndRegionContainerTag = document.createElement('div');
    // region
    let distributionRegionTag = document.createElement('p');
    let distributionRegion = document.createTextNode(collectionOfButterflies[i].distributionRegion)
    distributionRegionTag.appendChild(distributionRegion);
    // colors
    let colorTag = document.createElement('p');
    let color = document.createTextNode(colorArr[i]);
    colorTag.appendChild(color);

    colorAndRegionContainerTag.appendChild(distributionRegionTag);
    colorAndRegionContainerTag.appendChild(colorTag);

    // ARTICLE : commonName + scientificName
    let nameContainerTag = document.createElement('div');
    // commonName
    let commonNameTag = document.createElement('h2');
    let commonName = document.createTextNode(collectionOfButterflies[i].commonName)
    commonNameTag.appendChild(commonName);
    // scientificName
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
    let borderTag = document.createElement('div');
    borderTag.className = 'container-link';
    let externalLinkTag = document.createElement('a');
    externalLinkTag.setAttribute('href', collectionOfButterflies[i].externalLink);
    externalLinkTag.setAttribute('target', '_blank');
    let divTag = document.createElement('div');
    externalLinkTag.appendChild(divTag);
    borderTag.appendChild(externalLinkTag);
    // let imgTag = document.createElement('img');
    // imgTag.setAttribute('src', '../image/youtube.png');
    // let imgTag = document.createElement('ion-icon');
    // imgTag.setAttribute('name', 'logo-youtube');
    // externalLinkTag.appendChild(imgTag);
    // externalLinkTag.appendChild(divTag);

    // -----------------------------------
    // Add to article
    articleTag.appendChild(colorAndRegionContainerTag);
    articleTag.appendChild(nameContainerTag);
    articleTag.appendChild(descriptionTag);
    // articleTag.appendChild(externalLinkTag);
    articleTag.appendChild(borderTag);

    // -----------------------------------
    // Add to card
    cardTag.appendChild(imageTag);
    cardTag.appendChild(articleTag);
    // cardTag.appendChild(divTag);
    
    
    // -----------------------------------
    // Add to grid
    gridContainerTag.appendChild(cardTag);
}


// Add gridContainer to global container
containerTag.appendChild(gridContainerTag);
