/*Идеята на играта е да убиеш дракона с поредица от удари.*/
var slaying=true;
var hit=Math.floor(Math.random() * 2);
var damage=Math.floor(Math.random()*5 + 1);
var totalDamage=0;
while(slaying){
    if(hit===1){
    console.log("Good work. You hit the dragon.");
    totalDamage+=damage;
    if(totalDamage>=4){
       console.log("Glorious victory!"); 
       slaying=false; 
    }
    else{
     hit=Math.floor(Math.random() * 2);   
    }
    }
    
    else{
        console.log("The dragon defeated you.");
   slaying=false; 
}
}
