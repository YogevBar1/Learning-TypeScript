
const firstName = prompt("Insert first name");
const lastName = prompt("Insert last name");
const email = prompt("email");
const age = +prompt("Insert age");

const container = document.getElementById("container");
container.innerHTML = `First Name: ${firstName} <br>
Last Name: ${lastName} <br>
Email: ${email} <br>
Age: ${age}`;

