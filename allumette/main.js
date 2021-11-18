document.addEventListener("DOMContentLoaded", function () {

    InsertImgAllumette("IdNbrAllumette", "ShowNbrAllumette");
    removeMatchStick();
});

let divNbrAllumette = document.querySelector(".choiceNbrAllumette");
let divShowStick = document.getElementById("ShowNbrAllumette");
const divNbrRestant = document.querySelector('.nbrAllumetteDeleted');

function InsertImgAllumette(nbrAllumette, divAllum) {
    let input = document.getElementById("IdNbrAllumette");


    input.addEventListener('input', (event) => {
        // this.value;
        // console.log( event.target)
        let nbr = event.target.value;
        clear(divShowStick)
        console.log(nbr)

        if ((nbr >= 5) && (nbr <= 20)) {
            for (let i = 0; i < nbr; i++) {
                // const addAllum =  document.getElementById("idNbre").innerHTML ="gd"
                const img = document.createElement('img');
                img.src = "img/matchstick.png";
                img.alt = "MatchStick_" + i;
                divShowStick.appendChild(img)
            }
        }


    });
}

//reset
function clear(divShowStick) {
    divShowStick.innerHTML = "";
}

function play() {


}

function createSelectBtn() {
    var select = document.createElement("select");
    select.name = "pets";
    select.id = "pets"
}

function removeMatchStick() {

    let inpuToNbrDelete = document.querySelector('.nbrToDelete');

    inpuToNbrDelete.addEventListener('input', (event) => {

        let nbrStickDelete = event.target.value;
        console.log(nbrStickDelete)


        // // clear(divShowStick)
        //
        if (nbrStickDelete >= 1 && nbrStickDelete <= 3) {
            for (let i = 0; i < nbrStickDelete; i++) {
                divShowStick.removeChild(divShowStick.childNodes[i]);
            }


        }


    })

}

