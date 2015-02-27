//JSON data
var devs = [{
	firstName: 'Emily',
	lastName: 'Maskin',
	role: 'Front End Lead',
	email: 'emily@keep.com',
	phone: '607-437-7716'
}, {
	firstName: 'Gregg',
	lastName: 'Meluski',
	role: 'Senior Front End Engineer',
	email: 'gregg@keep.com'
}, {
	firstName: 'Ryan',
	lastName: 'Quigley',
	role: 'CTO',
	email: 'ryan@keep.com'
}];

//Card object constructor
function Card(firstName, lastName, role, email, phone, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role;
    this.email = email;
    this.phone = phone;
    this.id = id;

    //Array with instructions for building each component of the cards
    //[component type(element or text),component class, component id, component text, location to be inserted,phone number component(boolean)]
    this.components = [
        ['el', 'col-xs-12 col-md-4', 'card-col' + this.id, , 'card-area'], //bootstrap column for each card
        ['el', 'card-container col-xs-12', 'card-container' + this.id, , 'card-col' + this.id], //outer container for each card
        ['el', 'left-container card-height col-xs-6', 'left-container' + this.id, , 'card-container' + this.id], //inner container for left half of card
        ['el', 'right-container card-height col-xs-6', 'right-container' + this.id, , 'card-container' + this.id], //inner container for right half of card
        ['el', 'logo-container center-vertical center-block', 'logo-container' + this.id, , 'left-container' + this.id], //inner container for logo
        ['el', 'info-container center-vertical', 'info-container' + this.id, , 'right-container' + this.id], //inner container for dev info
        ['el', 'name-line', 'name-line' + this.id, , 'info-container' + this.id], //div for full name
        ['txt', , , this.firstName + " " + this.lastName, 'name-line' + this.id], //full name text
        ['el', 'role-line', 'role-line' + this.id, , 'info-container' + this.id], //div for role
        ['txt', , , this.role, 'role-line' + this.id], //role text
        ['el', 'email-line', 'email-line' + this.id, , 'info-container' + this.id], //div for email address
        ['txt', , , this.email, 'email-line' + this.id], //email address text
        ['el', 'phone-line', 'phone-line' + this.id, , 'info-container' + this.id, true], //div for phone number
        ['txt', , , this.phone, 'phone-line' + this.id, true] //phone number text
    ];
};

//Create Method prints cards to card display area
Card.prototype.create = function() {

	//Store card display area
	var cardArea = document.getElementById('card-area');

	//Loop through components[] array to add components to card
	for (var i = 0; i < this.components.length; i++) {
        
        var component = this.components[i];

		if (component[5] && !this.phone) { //check if phone number is given
			//do not create phone component if not defined

		} else if (component[0] == 'el') { //create element and append to DOM
			var element = document.createElement('div');
			element.setAttribute('class', component[1]);
			element.setAttribute('id', component[2]);
			var location = document.getElementById(component[4]);
			location.appendChild(element);

		} else if (component[0] == 'txt') { //create text node and append to DOM
			var element = document.createTextNode(component[3]);
			var location = document.getElementById(component[4]);
			location.appendChild(element);
            
		};
	};
};

//Loop creates new card object for each object in devs array
for (var i = 0; i < devs.length; i++) {

	//construct new Card object
	var newCard = new Card(
	devs[i].firstName,
	devs[i].lastName,
	devs[i].role,
	devs[i].email,
	devs[i].phone,
	i);

	//build and print card to DOM
	newCard.create();

};