//JSON data

var devs = [
  {
    firstName: 'Emily',
    lastName: 'Maskin',
    role: 'Front End Lead',
    email: 'emily@keep.com',
    phone: '607-437-7716'
  },
  {
    firstName: 'Gregg',
    lastName: 'Meluski',
    role: 'Senior Front End Engineer',
    email: 'gregg@keep.com'
  },
  {
    firstName: 'Ryan',
    lastName: 'Quigley',
    role: 'CTO',
    email: 'ryan@keep.com'
  }
]

//Store card display area

var cardArea = document.getElementById('card-area');

//Card object constructor

function Card(firstName,lastName,role,email,phone){
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.email = email;
    this.phone = phone;
};

//Method to print cards to card display area

Card.prototype.create = function(){
    
    
    //Add containing div for card
    var cardContainer = document.createElement('div');
    cardContainer.setAttribute('class','card-container');
    cardArea.appendChild(cardContainer);
    
    //Add div for logo
    var logoContainer = document.createElement('div');
    logoContainer.setAttribute('class','logo-container');
    cardContainer.appendChild(logoContainer);
    
    //Add name to card
    var nameLine = document.createElement('div');
    nameLine.setAttribute('class','name-line');
    var nameLineText = document.createTextNode(this.firstName + " " + this.lastName);
    nameLine.appendChild(nameLineText);
    cardContainer.appendChild(nameLine);
    
    //Add role to card
    var roleLine = document.createElement('div');
    roleLine.setAttribute('class','role-line');
    var roleLineText = document.createTextNode(this.role);
    roleLine.appendChild(roleLineText);
    cardContainer.appendChild(roleLine);
    
    //Add email to card
    var emailLine = document.createElement('div');
    emailLine.setAttribute('class','email-line');
    var emailLineText = document.createTextNode(this.email);
    emailLine.appendChild(emailLineText);
    cardContainer.appendChild(emailLine);
    
    //Check if phone is given. If so, add to card
    if(!!this.phone){
        var phoneLine = document.createElement('div');
        phoneLine.setAttribute('class','phone-line');
        var phoneLineText = document.createTextNode(this.phone);
        phoneLine.appendChild(phoneLineText);
        cardContainer.appendChild(phoneLine);
    };
};

//Arrray to store card objects for access later
var cards = [];

//Loop to create new card object for each object in devs array

for (var i=0; i<devs.length; i++){
    
    var newCard = new Card(
        devs[i].firstName,
        devs[i].lastName,
        devs[i].role,
        devs[i].email,
        devs[i].phone
    );
    
    newCard.create();
    
    //Store newCard in array in case we need to access later
    
    cards[i] = newCard;
};