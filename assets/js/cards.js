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
    
    //Store card display area

    var cardArea = document.getElementById('card-area');
    
    //Add bootstrap column for card
    
    var cardCol = document.createElement('div');
    cardCol.setAttribute('class','col-xs-12 col-md-4');
    cardArea.appendChild(cardCol);
    
    //Add outer containing div for card
    
    var cardContainer = document.createElement('div');
    cardContainer.setAttribute('class','card-container col-xs-12');
    cardCol.appendChild(cardContainer);
    
    //Add div for left half of card
    
    var leftContainer = document.createElement('div');
    leftContainer.setAttribute('class','left-container col-xs-6');
    cardContainer.appendChild(leftContainer);
    
    //Add div for logo
    
    var logoContainer = document.createElement('div');
    logoContainer.setAttribute('class','logo-container center-block');
    leftContainer.appendChild(logoContainer);
    
    //Add div for right half of card
    
    var rightContainer = document.createElement('div');
    rightContainer.setAttribute('class','right-container col-xs-6');
    cardContainer.appendChild(rightContainer);
    
    //Add div for info
    
    var infoContainer = document.createElement('div');
    infoContainer.setAttribute('class','info-container');
    rightContainer.appendChild(infoContainer);
    
    //Add name to card
    
    var nameLine = document.createElement('div');
    nameLine.setAttribute('class','name-line');
    var nameLineText = document.createTextNode(this.firstName + " " + this.lastName);
    nameLine.appendChild(nameLineText);
    infoContainer.appendChild(nameLine);
    
    //Add role to card
    
    var roleLine = document.createElement('div');
    roleLine.setAttribute('class','role-line');
    var roleLineText = document.createTextNode(this.role);
    roleLine.appendChild(roleLineText);
    infoContainer.appendChild(roleLine);
    
    //Add email to card
    
    var emailLine = document.createElement('div');
    emailLine.setAttribute('class','email-line');
    var emailLineText = document.createTextNode(this.email);
    emailLine.appendChild(emailLineText);
    infoContainer.appendChild(emailLine);
    
    //Check if phone number is given. If so, add to card
    
    if(!!this.phone){
        var phoneLine = document.createElement('div');
        phoneLine.setAttribute('class','phone-line');
        var phoneLineText = document.createTextNode(this.phone);
        phoneLine.appendChild(phoneLineText);
        infoContainer.appendChild(phoneLine);
    };
    
};

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

};
