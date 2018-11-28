// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Name "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
inputelement.setAttribute("data-role", "none");
inputelement.setAttribute("placeholder", "Enter you name here");
inputelement.setAttribute("required", "");
inputelement.setAttribute("class", "textbox resize ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset");
createform.appendChild(inputelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var emaillabel = document.createElement('label'); // Create Label for E-mail Field
emaillabel.innerHTML = "Email ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input'); // Create Input Field for E-mail
emailelement.setAttribute("type", "email");
emailelement.setAttribute("name", "demail");
emailelement.setAttribute("data-role", "none");
emailelement.setAttribute("placeholder", "Enter your email here");
emailelement.setAttribute("required", "");
emailelement.setAttribute("class", "textbox resize ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset");
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); // Append Textarea
messagelabel.innerHTML = "Your Message ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement('textarea');
texareaelement.setAttribute("name", "dmessage");
texareaelement.setAttribute("data-role", "none");
texareaelement.setAttribute("placeholder", "Enter your message here");
texareaelement.setAttribute("required", "");
texareaelement.setAttribute("class", "textbox ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset");
createform.appendChild(texareaelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

var submitelement = document.createElement('button'); // Append Submit Button
submitelement.setAttribute("type", "Submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);
var SubmitButtonContent = document.createTextNode("Submit");
submitelement.appendChild(SubmitButtonContent);