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
    
    //Array containing card components
    
  
    
    //[component type, component class, component id, location to be inserted]
    
    this.components = [
        ['element','col-xs-12 col-md-4','card-col' + this.id,,'card-area'],
        ['element','card-container col-xs-12','card-container' + this.id,,'card-col' + this.id],
        ['element','left-container col-xs-6','left-container' + this.id,,'card-container' + this.id],
        ['element','right-container col-xs-6','right-container' + this.id,,'card-container' + this.id],
        ['element','logo-container center-block','logo-container' + this.id,,'left-container' + this.id],
        ['element','info-container','info-container' + this.id,,'right-container' + this.id],
        ['element','name-line','name-line' + this.id,,'info-container' + this.id],
        ['text',,,this.firstName + " " + this.lastName,'name-line' + this.id],
        ['element','role-line','role-line' + this.id,,'info-container' + this.id],
        ['text',,,this.role,'role-line' +this.id],
        ['element','email-line','email-line' + this.id,,'info-container' + this.id],
        ['text',,,this.email,'email-line' +this.id],
        ['element','phone-line','phone-line' + this.id,,'info-container' + this.id],
        ['phone',,,this.phone,'phone-line' + this.id]
    ];
};

//Method to build cards to append to DOM

Card.prototype.build = function(){
    
    //Store card display area

    var cardArea = document.getElementById('card-area');
    
    //Loop through components array to add components to card
    
    for(var i=0; i < this.components.length; i++){
        var type = this.components[i][0];
        var print = function(){    
            if(type == 'element'){
                var element = document.createElement('div');
                element.setAttribute('class',this.components[i][1]);
                element.setAttribute('id',this.components[i][2]);
                var location = document.getElementById(this.components[i][4]);
                location.appendChild(element);
            }else if(type == 'text'){
                var element = document.createTextNode(this.components[i][3]);
                var location = document.getElementById(this.components[i][4]);
                location.appendChild(element);
            };
        };
        
        print();
    };
    
};

//Loop to create new card object for each object in devs array

for (var i=0; i<devs.length; i++){
    
    //create new card object
    
    var newCard = new Card(
        devs[i].firstName,
        devs[i].lastName,
        devs[i].role,
        devs[i].email,
        devs[i].phone,
        i
    );
    
    newCard.build();

};
