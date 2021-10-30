document.addEventListener("DOMContentLoaded", function () {

    let nbrRow = 2
    let nbrCol = 3;

    let pix = new Array("./img/koala.jpg", "./img/agneau.jpg", "./img/rinho.jpg");

    play(nbrRow, nbrCol, pix);
    createColRow(nbrRow, nbrCol);
    // choosePix(pix)


});

let table = document.getElementById('memoryTable');

// let table = document.querySelector('memoryTable');


function createColRow(nbrRow, nbrCol) {

    for (let i = 0; i < nbrRow; i++) {
        // create table row
        let row = document.createElement('tr');

        for (let j = 0; j < nbrCol; j++) {
            let col = document.createElement('td');
            col.setAttribute('class', 'col-td');
            col.classList.add('col-td');
            // let img = document.createElement('img');
            // col.innerHTML = `<img src="./img/fleche.png" alt="img">`
            row.appendChild(col);

        }
        table.appendChild(row);
    }
}

function chekInArray(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (item === array[i]) {
            return true;
        }
    }
    return false;
}

function deleteItem(imgRand, imgArray) {
    for (var i = imgArray.length - 1; i >= 0; i--) {
        if (imgArray[i] === ingRand) {
            imgArray.splice(i, 1);
        }
    }
}

function choosePix(imgArray) {
    let arraySave = [];
    document.querySelectorAll('.col-td').forEach(td => {
            let imgRand = imgArray[Number(Math.floor(Math.random() * imgArray.length))];
        td.innerHTML = `<img src="${imgRand}" alt="img">` ;
        !chekInArray(imgRand, arraySave) ? arraySave.push(imgRand) : deleteItem(imgRand, imgArray);
    })
}
function showImg(img) {

}

function checkSameItem(img) {
    img.forEach()
}

function play(nbrRow, nbrCol, img) {
    // createColRow(nbrRow, nbrCol);

    document.querySelector('.btnPlay').addEventListener("click", function (e){
        choosePix(img)
            e.preventDefault();
        })

    // cont >= 1 ? choosePix(img) : img.style.display = 'none' ;
    // img.style.display = 'none'

    // document.querySelector('.col-td').addEventListener("click", function (e){
    //     console.log("click")
    //     e.preventDefault();
    // })


}