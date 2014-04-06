var friends={};
friends.bill={firstName:'George', lastName:'Nikolov', number:'0889065656', address:['Sofia','Bulgaria']};
friends.steve={firstName:'Martin', lastName:'Ivanov', number:'0997 343526', address:['Veliko Tarnovo','Bulgaria']};


var list=function(object){
    for(var key in object){
    console.log(key);    
    }
    };
    
    var search=function(name){
        for(var key in friends){
    if(friends[key].firstName===name){
        console.log(friends[key]);
      return friends[key];  
    }
    }
    };
  list(friends);
  search("Martin");
