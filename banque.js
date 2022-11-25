// variable
const compte = document.querySelector("#compte");
const somme = document.querySelector("#somme");
let result="";
const boutton = document.querySelector("#boutton")

//evenement du boutton

boutton.removeEventListener('click',verifier)


function verifier(){
    console.log(somme)
    console.log(compte)

}

//on vérifie les infos du compte en banque 

if (compte.length == 16) {
    result = 'valide';
  } else {
    result = 'non valide';
    
    
}

if(somme !=0){
    result = 'valide'
}else{
    result ='non valide'
}
