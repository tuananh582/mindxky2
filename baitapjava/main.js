
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

const list = document.getElementById("contacts-list");
contacts.forEach(function(contact) {
  const li = document.createElement("li");
  li.textContent = `${contact.name} - ${contact.phone}`;
  list.appendChild(li);
});

function addContact() {
 
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;


  const contact = {
    name: name,
    phone: phone
  };


  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));

  
  const li = document.createElement("li");
  li.textContent = `${contact.name} - ${contact.phone}`;
  list.appendChild(li);

  // Clear the form
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";

}



function deletebt(){
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  var element = document.getElementById("contacts-list").innerHTML
  var elmentnum = element.split("")
  var unit=[]
  for(let i = 0 ; i < elmentnum.length;i++)
  {
    if(!unit.includes(elmentnum[i]))
    {
      unit.push(elmentnum[i])
    }
  } 
  element= unit.join("-");  

}