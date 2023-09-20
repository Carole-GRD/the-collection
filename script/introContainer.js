

// ======================================
//            INTRODUCTION   
// ======================================

// Global container for introduction
let introContainerTag = document.createElement('div');


// Image for introduction
let introImgTag = document.createElement('img');
introImgTag.setAttribute('src', IntroData.logo)
introImgTag.style.height = '200px';
// Text for introduction
let introContentTag = document.createElement('section');

let titleTag = document.createElement('h1');
let title = document.createTextNode(IntroData.title);
titleTag.appendChild(title);

let text1Tag = document.createElement('p');
let text1 = document.createTextNode(IntroData.text1);
text1Tag.appendChild(text1);

let text2Tag = document.createElement('p');
let text2 = document.createTextNode(IntroData.text2);
text2Tag.appendChild(text2);


introContentTag.appendChild(titleTag);
introContentTag.appendChild(text1Tag);
introContentTag.appendChild(text2Tag);

// Add image and text to introContainer
introContainerTag.appendChild(introImgTag);
introContainerTag.appendChild(introContentTag);

// Add introContainer to global container
containerTag.appendChild(introContainerTag);