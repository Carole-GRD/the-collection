
let colorArr = [];

for (let i = 0; i < collectionOfButterflies.length; i++) {

    let colorDisplay = '';

    for (let j = 0; j < collectionOfButterflies[i].colors.length; j++) {
        
        if (collectionOfButterflies[i].colors.length === 1) {
            colorDisplay = collectionOfButterflies[i].colors[j];
        }
        else if (j < (collectionOfButterflies[i].colors.length - 1)  ) {
            colorDisplay = `${collectionOfButterflies[i].colors[j]} - `;
        }
        else {
            colorDisplay += collectionOfButterflies[i].colors[j];
        }

    }
    
    colorArr = [...colorArr, colorDisplay];
}