let price = Math.floor(Math.random()* (1000 - 300 +1)) + 300;
alert(price)

let nbrInput = null;

while ( nbrInput != price){
    nbrInput = parseInt(prompt("Enter a value between 300 & 1000"));

    if (nbrInput < price ){
        alert("It's more")
    }
    else if (nbrInput > price){
        alert("It's less")
    }
}

if (nbrInput == price){
    alert("You win !!!")
}