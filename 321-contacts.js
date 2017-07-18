const contactsFile = require('./contacts.json')

let allContacts = []

const addContact = (firstName, lastName, email) => 
  allContacts.push([firstName, lastName, email])
  
const addContacts = (contactData) =>
  contactData.forEach((contact) => 
    addContact(contact.first_name, contact.last_name, contact.email));

const printContacts = () =>
  {const contacts = allContacts.map( (contact) =>
    { return [ contact[0] + " " + contact[1], contact[2]]
    }).sort((a, b) =>
    {return a < b ? -1 : a > b ? 1 : 0}
  )
  console.log( "Loading Contact Data..." )
  console.log( "..Finished Loading Contact Data");
  console.log( contacts );
  }

addContacts(contactsFile)  
printContacts(allContacts)
