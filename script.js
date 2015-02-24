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

var cardArea = document.getElementById('card-area');

function Card(firstName,lastName,role,email,phone){
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.email = email;
    this.phone = phone;
};

Card.prototype.create = function(){
    var cardText = document.createTextNode(this.firstName);
    cardArea.appendChild(cardText);
};

for (var i=0; i<devs.length; i++){
    var newCard = new Card(devs[i].firstName,devs[i].lastName,devs[i].role,devs[i].email,devs[i].phone);
    newCard.create();
};