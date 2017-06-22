const Contact = require('../models/contact');

exports.list = (req, res, next) => {
  Contact.find({}, 'prenom nom').then(contacts => {
    res.json(contacts);
  });
};

exports.add = (req, res, next) => {
  const contact = new Contact(req.body);

  contact.save().then(contact => {
    res.statusCode = 201;
    res.json(contact);
  });

};

// Ex : Contact.findByIdAndRemove
exports.delete = (req, res, next) => {
  const id = Number(req.params.id);

  const iContact = contacts.findIndex(c => c.id === id);
  const contact = contacts[iContact];

  contacts.splice(iContact, 1);

  res.json(contact);
};

// Ex : Contact.findById
exports.show = (req, res, next) => {
  const id = Number(req.params.id);

  const contact = contacts.find(c => c.id === id);

  res.json(contact);
};
