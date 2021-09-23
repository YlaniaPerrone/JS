document.addEventListener("DOMContentLoaded", function () {

    // let container_grid = document.getElementById('container_grid');

    let table = document.getElementById('tableForGrid');
    let nbrOfCheckerboard = parseInt(prompt('Number of Checkerboard '));
    // GetGrid(table, nbrOfCheckerboard)

    // CreateGrid(container_grid, nbrOfCheckerboard)

    createGrid(table, nbrOfCheckerboard)

});

// function CreateGrid(ContainerGridID, nbrOfCheckerboard) {
//
//     // recupere taille de l'écran
//     const gridSize = ContainerGridID.offsetWidth;
//
//     //divise par nbr de div
//     let squareSize = gridSize / nbrOfCheckerboard;
//
//     let nbrSquare = nbrOfCheckerboard * nbrOfCheckerboard;
//
//     for (let i = 0; i < nbrSquare; i++) {
//
//         const div = document.createElement('div');
//         div.setAttribute('class', 'grid');
//         div.style.height = squareSize + 'px';
//         div.style.width = squareSize + 'px';
//
//         if (i % 2 === 0) {
//             div.style.backgroundColor = 'red';
//         } else {
//             div.style.backgroundColor = 'black';
//         }
//
//         ContainerGridID.appendChild(div)
//         // container_grid.style.display = 'flex';
//         // container_grid.style.flexWrap = 'wrap';
//         // container_grid.style.justifyContent = 'center';
//
//     }
//
// }
//
// function GetGrid(grid, nbrOfCheckerboard) {
//
//     let nbrSquare = nbrOfCheckerboard * nbrOfCheckerboard
//
//
//
//     for(let i=0; i<nbrOfCheckerboard; i++)
//     {
//         const tr = document.createElement('tr');
//
//         for(let j=0; j<nbrOfCheckerboard; j++)
//         {
//             const div = document.createElement('td');
//
//
//         if ((i + j) % 2 === 0) {
//             tr.style.backgroundColor = 'red';
//         } else {
//             tr.style.backgroundColor = 'black';
//         }
//
//         grid.appendChild(tr)
//
//         // const trend = document.createElement('</tr>');
//     }}
//
//
//
//
//
// }

function createGrid(table, nbr) {
    const nbrGrid = nbr * nbr;
    console.warn(nbrGrid);

    for(let i=0; i<nbr; i++)
    {
        const tr = document.createElement('tr');

        for(let j=0; j<nbr; j++)
        {
            const td = document.createElement('td');
            td.setAttribute('class', 'grid');

            // table.innerHTML = `<td class="grid"></td>`;

            if ((i + j) % 2) {
            td.style.backgroundColor = 'red';
            } else {
                td.style.backgroundColor = 'black';
            }
            tr.appendChild(td)
        }
        table.appendChild(tr);
    }


}