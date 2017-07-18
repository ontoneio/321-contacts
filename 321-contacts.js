const fs = require('fs');


const contactsFile = require('./contacts.json')

let allContacts = []

const addContact = function(firstName, lastName, email) {
  allContacts.push([firstName, lastName, email])
} 

const addContacts = function(contactData) {
  console.log('Loading contact data...');
  for (var i = 0; i < contactData.length; i++) {
    addContact(contactData[i].first_name, contactData[i].last_name, contactData[i].email)
    }
  console.log('...Finished loading contact data')
  }



const printContacts= function(contacts) {
  console.log('printContacts:', 'TODO')
}


addContacts(contactsFile)
console.log(allContacts);
