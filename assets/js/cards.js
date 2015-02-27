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
function Card(firstName,lastName,role,email,phone,id){
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.email = email;
    this.phone = phone;
    this.id = id;
    
    //Array with instructions for building card components
    //[component type(element, text, or phone number),component class, component id, component text, location to be inserted,phone number component(boolean)]
    this.components = [
        [1,'col-xs-12 col-md-4','card-col' + this.id,,'card-area'],
        [1,'card-container col-xs-12','card-container' + this.id,,'card-col' + this.id],
        [1,'left-container col-xs-6','left-container' + this.id,,'card-container' + this.id],
        [1,'right-container col-xs-6','right-container' + this.id,,'card-container' + this.id],
        [1,'logo-container center-vertical center-block','logo-container' + this.id,,'left-container' + this.id],
        [1,'info-container center-vertical','info-container' + this.id,,'right-container' + this.id],
        [1,'name-line','name-line' + this.id,,'info-container' + this.id],
        [2,,,this.firstName + " " + this.lastName,'name-line' + this.id],
        [1,'role-line','role-line' + this.id,,'info-container' + this.id],
        [2,,,this.role,'role-line' + this.id],
        [1,'email-line','email-line' + this.id,,'info-container' + this.id],
        [2,,,this.email,'email-line' + this.id],
        [1,'phone-line','phone-line' +this.id,,'info-container' + this.id,true],
        [2,,,this.phone,'phone-line' + this.id,true]
    ];
};

//Method to print cards to card display area
Card.prototype.create = function(){
    
    //Store card display area
    var cardArea = document.getElementById('card-area');
    
    //Loop through components array to add components to card
    for(var i=0; i < this.components.length; i++){
        
        if(this.components[i][5] && !this.phone){//check if phone number is given
            
            //do not create phone component if not defined
            
        }else if(this.components[i][0] === 1){//create element
            
            var element = document.createElement('div');
            element.setAttribute('class',this.components[i][1]);
            element.setAttribute('id',this.components[i][2]);
            var location = document.getElementById(this.components[i][4]);
            location.appendChild(element);
            
        }else if(this.components[i][0] === 2){//create text node
            
            var element = document.createTextNode(this.components[i][3]);
            var location = document.getElementById(this.components[i][4]);
            location.appendChild(element);
    
        };
    };
    
};

//Loop to create new card object for each object in devs array
for (var i=0; i<devs.length; i++){
    
    //construct new Card object
    var newCard = new Card(
        devs[i].firstName,
        devs[i].lastName,
        devs[i].role,
        devs[i].email,
        devs[i].phone,
        i
    );
    
    //build and print card to DOM
    newCard.create();

};
