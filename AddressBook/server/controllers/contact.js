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

exports.delete = (req, res, next) => {
  Contact.findByIdAndRemove(req.params.id)
    .then(contact => {
      res.json(contact);
    });
};

exports.show = (req, res, next) => {
  Contact.findById(req.params.id)
    .then(contact => {
      res.json(contact);
    });
};
