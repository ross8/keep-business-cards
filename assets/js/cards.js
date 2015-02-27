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
    
    //Array containing card components
    
    var components = [
        [1,'col-xs-12 col-md-4','card-col',,'card-area'],
        [1,'card-container col-xs-12','card-container',,'card-col'],
        [1,'left-container col-xs-6','left-container',,'card-container'],
        [1,'right-container col-xs-6','right-container',,'card-container'],
        [1,'logo-container center-block','logo-container',,'left-container'],
        [1,'info-container','info-container',,'right-container'],
        [1,'name-line','name-line',,'info-container'],
        [2,,,this.firstName + " " + this.lastName,'name-line'],
        [1,'role-line','role-line',,'info-container'],
        [2,,,this.role,'role-line'],
        [1,'email-line','email-line',,'info-container'],
        [2,,,this.email,'email-line'],
        [1,'phone-line','phone-line',,'info-container'],
        [2,,,this.phone,'phone-line']
    ];
    
    //Loop through components array to add components to card
    
    for(var i=0; i < components.length; i++){
        if(components[i][0] == 1){
            var element = document.createElement('div');
            element.setAttribute('class',components[i][1]);
            element.setAttribute('id',components[i][2]);
            var location = document.getElementById(components[i][4]);
            location.appendChild(element);
        }else if(components[i][0] == 2){
            var element = document.createTextNode(components[i][3]);
            var location = document.getElementById(components[i][4]);
            location.appendChild(element);
        };
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
