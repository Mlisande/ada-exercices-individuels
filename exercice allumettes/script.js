let allumettes = 50;
let players = [];

//players.push("Joueur 1","Joueur 2")




function player(){
     let monNom = prompt("Joueur 1 \nQuel est ton nom ?");
     let text = " 🤝Bonjour " + monNom + ". " + " " + " A toi de jouer, joueur 1 ! ";
     text = document.body.innerHTML+= "<h3> " + text + "</h3>";
     console.log(text)
     

}


function matchToRemove(){
     while (allumettes > 0){
     let askNumber = parseInt(prompt("Choisir un nombre ? Joueur 1\nNombre d'allumettes restantes: " + allumettes))
     console.log(askNumber)
    

           if (askNumber < 1 || askNumber > 6){
          alert ("Choisis un nombre entre 1 et 6")
          
           
           } if (allumettes < askNumber){
               let smallNumber = alert("Choisir un nombre plus petit")
              

          }

     allumettes = allumettes - askNumber
     console.log(allumettes)
     secondMatchToRemove()
     }



     if (allumettes == 0){
          let victoire = alert("Bravo, tu as gagné !")
          allumettes = 50
          matchToRemove()
     }

}

function secondMatchToRemove(){
     while (allumettes > 0){
     let askNumber = parseInt(prompt("Choisir un nombre ? Joueur 2\nNombre d'allumettes restantes: " + allumettes))
     console.log(askNumber)
     

           if (askNumber < 1 || askNumber > 6){
          alert ("Choisis un nombre entre 1 et 6")
          
           
           } if (allumettes < askNumber){
               let smallNumber = alert("Choisir un nombre plus petit")
               matchToRemove()

          }

     allumettes = allumettes - askNumber
     console.log(allumettes)
     matchToRemove()
     }

     if (allumettes == 0){
          let victoire = alert("Bravo, tu as gagné !")
          allumettes = 50
          matchToRemove()
     }

}



player();
matchToRemove();
secondMatchToRemove();