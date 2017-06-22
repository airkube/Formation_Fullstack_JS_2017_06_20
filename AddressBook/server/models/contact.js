const mongoose = require('mongoose');

const Contact = mongoose.model('contacts', {
  prenom: String,
  nom: String,
});

module.exports = Contact;
