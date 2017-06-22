const contacts = [{
  prenom: 'John',
  nom: 'Doe',
  id: 123
}, {
  prenom: 'Jean',
  nom: 'Dupont',
  id: 567
}];

exports.list = (req, res, next) => {
  res.json(contacts);
};

exports.add = (req, res, next) => {

};

exports.delete = (req, res, next) => {

};
