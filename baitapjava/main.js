// function addContact()
// {
//     const name =  document.getElementById("name").value;
//     const phone = document.getElementById("phone").value;
//     const contact={
//         name: name,
//         phone:phone
//      };
     
//      const list = document.getElementById("mylist");
//      const li = document.createElement("li");
//      li.appendChild(document.createTextNode(`${contact.name} -  ${contact.phone}`));
//      list.appendChild(li);
//      document.getElementById("name").value=""
//      document.getElementById("phone").value=""
// }




//Retrieve the contacts from local storage
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

// Display the contacts on the page
const list = document.getElementById("contacts-list");
contacts.forEach(function(contact) {
  const li = document.createElement("li");
  li.textContent = `${contact.name} - ${contact.phone}`;
  list.appendChild(li);
});

function addContact() {
  // Get the input values from the form
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  // Create a new contact object
  const contact = {
    name: name,
    phone: phone
  };

  // Add the contact to the array and store it in local storage
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));

  // Add the contact to the list on the page
  const li = document.createElement("li");
  li.textContent = `${contact.name} - ${contact.phone}`;
  list.appendChild(li);

  // Clear the form
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
//   alert(name)
//   alert(phone)
}



