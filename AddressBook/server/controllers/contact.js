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
  const contact = req.body;
  contact.id = contacts[contacts.length-1].id + 1;
  contacts.push(contact);

  res.statusCode = 201;
  res.json(contact);
};

exports.delete = (req, res, next) => {
  const id = Number(req.params.id);
  // Supprimer le contact (splice, findIndex Array MDN)
  // Au choix :
  // - répondre en JSON le contact supprimé
  // - répondre rien avec res.end() et status 204
};

// Créer une route
// GET /api/contact/:id
// Qui répond en JSON le détail du contact
