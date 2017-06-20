var logClosure = function(msg) {

  return function() {
    console.log(msg);
  };
};

var hello = logClosure('Hello');

hello();

/*
var createButton = function(contenu) {

  var btn = document.createElement('button');
  btn.innerHTML = contenu;
  btn.addEventListener('click', function clickCb() {
    console.log(contenu);
  });

  return btn;
};

var monBouton = createButton('Coucou');

 */
