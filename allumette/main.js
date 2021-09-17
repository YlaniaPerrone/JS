document.addEventListener("DOMContentLoaded", function() {

    InsertImgAllumette("IdNbrAllumette", "ShowNbrAllumette");
});

function InsertImgAllumette(nbrAllumette, divAllum) {
    let input = document.getElementById("IdNbrAllumette");
    let div = document.getElementById("ShowNbrAllumette");


    input.addEventListener('input', (event) => {
        // this.value;
        // console.log( event.target)
       let  nbr = event.target.value;
       removeMatchStick(div)
        console.log(nbr)

        for (let i = 0; i <nbr ; i++) {
            // const addAllum =  document.getElementById("idNbre").innerHTML ="gd"
            const img = document.createElement('img');
            img.src = "img/matchstick.png";
            img.alt = "MatchStick_" + i;
            div.appendChild(img)
        }
    });
}
//reset
function removeMatchStick(div) {
    div.innerHTML = "";
}

function play() {

}

function createSelectBtn(){
    var select = document.createElement("select");
    select.name = "pets";
    select.id = "pets"
}

function deleteAlluumette(){

}