document.addEventListener("DOMContentLoaded", function() {

    InsertImgAllumette("IdNbrAllumette", "ShowNbrAllumette");
});

let divNbrAllumette =  document.querySelector(".choiceNbrAllumette");
let divShowStick = document.getElementById("ShowNbrAllumette");

function InsertImgAllumette(nbrAllumette, divAllum) {
    let input = document.getElementById("IdNbrAllumette");


    input.addEventListener('input', (event) => {
        // this.value;
        // console.log( event.target)
        let  nbr = event.target.value;
        clear(divShowStick)
        console.log(nbr)

       if ((nbr >= 5 ) && (nbr <= 20)){
           for (let i = 0; i <nbr ; i++) {
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

function createSelectBtn(){
    var select = document.createElement("select");
    select.name = "pets";
    select.id = "pets"
}

function removeMatchStick(){
    // input.addEventListener('input', (event) => {
    //     // this.value;
    //     // console.log( event.target)
    //     let  nbrStickDelete = event.target.value;
    //     clear(divShowStick)
    //     console.log(nbr)
    //
    //     if (nbrStickDelete >=1 && nbr <=3){
    //     div.}
    // }

}