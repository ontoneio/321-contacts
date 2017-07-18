const contactsFile = require('./contacts.json')

let allContacts = []

const addContact = (firstName, lastName, email) => 
  allContacts.push([firstName, lastName, email])

const addContacts = (contactData) =>
  contactData.forEach((contact) => 
    addContact(contact.first_name, contact.last_name, contact.email));


const printContacts= function(contacts) {
  console.log('printContacts:', 'TODO')
}


addContacts(contactsFile)
console.log(allContacts);
