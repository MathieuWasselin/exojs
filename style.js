
function listechiffre(){


const test = 5;

for (let i = 0; i < test; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

document.getElementById("p").addEventListener("click");

 }
 

 //function listeChiffre() {
// Donne la valeur de l'input à la variable numero
let numero=document.getElementById("id1").value;
// boucle for, variable i va de 0 à la valeur de l'input, incrémentation ++ = + 1
for (let i = 0; i<=document.getElementById("id1").value; i++)
{
    // instruction pour que la boucle s'affiche sur l'html dans le paragraphe texte
    document.getElementById("texte").innerHTML += i ;
}
}
/*on prend l'élément bouton et on lui donne l'évenement click qui affichera la fonction où
est contenue la boucle */
document.getElementById("valider").addEventListener("click", listeChiffre);