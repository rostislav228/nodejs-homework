const fs = require("fs");
const path = require("path");
const contactsPath = path.join(__dirname, "db", "contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  try {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const parsedData = JSON.parse(data);
      console.table(parsedData);
    });
  } catch (err) {
    console.error("listCotnacts error:", err);
  }
}

function getContactById(contactId) {
  try {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const parsedData = JSON.parse(data);
      const filteredContacts = parsedData.find(({ id }) => id === contactId);
      console.log(filteredContacts);
    });
  } catch (err) {
    console.error("getContactById error:", err);
  }
}

function removeContact(contactId) {
  try {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const parsedData = JSON.parse(data);
      const filteredContacts = parsedData.filter(({ id }) => id !== contactId);
      console.table(filteredContacts);
    });
  } catch (err) {
    console.error("removeContact error:", err);
  }
}

function addContact(name, email, phone) {
  const id = Math.floor(Math.random() * Math.floor(999999999999));
  const newContact = { id, name, email, phone };

  try {
    fs.readFile(contactsPath, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      const parsedData = JSON.parse(data);
      parsedData.push(newContact);

      fs.writeFile(contactsPath, JSON.stringify(parsedData), () =>
        console.log("Сontact added")
      );

      console.table(parsedData);
    });
  } catch (err) {
    console.error("addContact error:", err);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
