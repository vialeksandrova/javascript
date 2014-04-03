var user=prompt("You're walking through the forest, and you run into a dragon! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(user){
    case 'FIGHT':
    var strong=prompt("Are you strong - YES or NO?").toUpperCase();
    var smart=prompt("Are you smart - YES or NO?").toUpperCase();
     if(strong===true && smart===true){
        console.log("Victory is yours!")
     }
     else{
        console.log("You're not strong and smart? You lose!");   
     }
     break;
     
    case 'PAY':
    var money=prompt("Do you have money - YES or NO?").toUpperCase();
    if(money===true){
        console.log("Great work, you win!");
    }
    else{
        console.log("You have a big problem and no money. You lose!");
    }
     break;
     
    case 'RUN':
    var fast=prompt("Are you fast - YES or NO?").toUpperCase();
    var fearful=prompt("Are you fearful - YES or NO?").toUpperCase();
    if(fast===true || fearful===true){
       console.log("Bravo! You runaway from the dragon!"); 
    }
    else{
     console.log("You never had a chance! The dragon eats you.");   
    }
     break; 
     
    default:
    console.log("I didn't understand your choice. Try again!");
}
