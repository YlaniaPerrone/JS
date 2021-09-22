document.addEventListener("DOMContentLoaded", function() {

let nbrRow = 2
let nbrCol = 3;
    createColRow(nbrRow, nbrCol);
});


let table = document.getElementById('memoryTable');
// let table = document.querySelector('memoryTable');


function createColRow(nbrRow, nbrCol) {

    for (let i = 0; i < nbrRow; i++) {
        // create table row
        let row = document.createElement('tr');

        for (let j = 0; j < nbrCol; j++) {
            let col = document.createElement('td');
            row.appendChild(col);
        }
        table.appendChild(row);
    }
}

function showImg() {
    int img = ((int)(Math.random() * 4) + 1);
}
