// array picture
// let imgArray = new Array("./img/koala.jpg", "./img/agneau.jpg", "./img/rinho.jpg");
let imgArray = ["./img/koala.jpg", "./img/agneau.jpg", "./img/rinho.jpg", "./img/monkey.jpg", "./img/tiger.jpg"];
let arraySave = [];

// let btnPlay = document.querySelector('.btnPlay');
// btnPlay.addEventListener("click", function (){
//     choosePix(imgArray)
// })

const nbrRow = 2
const nbrCol = 3;

//create grid
let table = document.getElementById('memoryTable');

function createColRow(nbrRow, nbrCol) {

    for (let i = 0; i < nbrRow; i++) {
        // create table row
        let row = document.createElement('tr');

        for (let j = 0; j < nbrCol; j++) {
            let col = document.createElement('td');
            col.setAttribute('class', 'col-td');
            col.classList.add('col-td');
            row.appendChild(col);
        }
        table.appendChild(row);
    }
}

createColRow(nbrRow, nbrCol)

// choose picture
function choosePix(imgArray, arraySave) {
    while (arraySave.length < 3) {
        let imgRand = imgArray[Number(Math.floor(Math.random() * imgArray.length))];

        if (!arraySave.includes(imgRand)) {
            arraySave.push(imgRand);
        }
    }
    return arraySave;
}

console.warn("save :", arraySave)
let img = choosePix(imgArray, arraySave)

//delete if exist
function removeItemOnce(arr, item) {
    let index = arr.indexOf(item);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

//show pix
function showPix(arraySave) {
    let listCopy = [];
    let listImg = arraySave;

    document.querySelectorAll('.col-td').forEach(td => {

        let numberRandom = Number(Math.floor(Math.random() * listImg.length));
        let img = listImg[numberRandom];
        let alt = img.split('/');
        //.at() methode qui permet de recupérer un element d'un tableau en fonction de son indice
        td.innerHTML = `<img src="${img}" alt="${alt.at(-1)}">`;

        if (listCopy.includes(img)) {
            removeItemOnce(listImg, img);
            listImg = removeItemOnce(listImg, img);
        } else {
            listCopy.push(img);
        }
    })
}
showPix(arraySave)