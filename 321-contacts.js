const contactsFile = require('./contacts.json')

let allContacts = []

const addContact = (first_name, last_name, email) => 
  allContacts.push([first_name, last_name, email])
  
const addContacts = (contactData) =>
  contactData.forEach((contact) => 
    addContact(contact.first_name, contact.last_name, contact.email));

const findLongest = (length, string) => {
  return string.length > length ? string.length : length
}



const printContacts = () =>

  {const contacts = allContacts.map( (contact) =>
    { return [ contact[0] + " " + contact[1], contact[2]]
    }).sort((a, b) =>
    {return a < b ? -1 : a > b ? 1 : 0})

    const longestName = contacts.map((contact) => {
      return contact[0]
    } ).reduce(findLongest, 0)

    const longestEmail = contacts.map((contact) => {
      return contact[1]
    } ).reduce(findLongest, 0)

    const divider = (
      '|' + '-'.repeat(longestName + 3) +
      '+' + '-'.repeat(longestEmail + 3) +
      '|'
    )
    const nameColumnLabel = '|  Full Name'
    const emailColumnLabel = '|  Email Address'
    const nameColRowLength = longestName - nameColumnLabel.length +4
    const emailColRowLength = longestEmail - emailColumnLabel.length +4
    

  console.log( "Loading Contact Data..." )
  console.log( "..Finished Loading Contact Data\n");
  console.log(divider);
  console.log(
    nameColumnLabel + " ".repeat(nameColRowLength) +
    emailColumnLabel + " ".repeat(emailColRowLength) + '|'
  );
  console.log(divider);
  contacts.forEach((contact) => {
  const name = contact[0]
  const email = contact[1]
  console.log(
    '| ' + name + ' '.repeat(longestName - name.length + 2 ) +
    '| ' + email + ' '.repeat(longestEmail - email.length + 2) +
    '| '
  )})
  console.log(divider); 
  }

addContacts(contactsFile)  
printContacts(allContacts)


