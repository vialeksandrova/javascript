var george = { //обект със свойства
    firstName: "George",
    lastName: "Ivanov",
    phoneNumber: "(650) 777-7777",
    email: "george.ivanov@example.com"
};

var elena = {
    firstName: "Elena",
    lastName: "Petrova",
    phoneNumber: "(650) 888-8888",
    email: "elena.petrova@example.com"
};

var contacts = [george, elena];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() { //принтира всички елементи на масива contacts
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

function search(lastName){ //търсене по фамилия
var length = contacts.length; 
  for (var i = 0; i < length; i++) {
  if(contacts.lastName===lastName){
  printPerson(contacts[i]);
	}
}
}
search("Ivanov");

function add(firstName,lastName,email,phoneNumber){ //добавяне на нов обект към масива contacts
contacts[contacts.length]={
    firstName:firstName,
    lastName:lastName,
    email:email, 
    phoneNumber:phoneNumber
};
}
add("vi","popova","vi@gmail.com","08889888888");
list();
