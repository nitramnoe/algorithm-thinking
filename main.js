var containerPlats = document.querySelector('.container-plats');

var carte =  {
plats: [
  {
   id: 1,
   nom: 'plat1',
   description: 'blablabla 1',
   price: '12€',
   selected: 0
  },
  {
   id: 2,
   nom: 'plat2',
   description: 'blablabla 2',
   price: '15€',
   selected: 0
  },
  {
   id: 3,
   nom: 'plat3',
   description: 'blablabla 3',
   price: '10€',
   selected: 0
  }
]
}

carte.plats.forEach(function(plat){

  var nouveauPlat = document.createElement('div');
  nouveauPlat.classList.add('plat');
  containerPlats.appendChild(nouveauPlat);

  var nouveauNom = document.createElement('h3');
  nouveauNom.classList.add('nom-plat');
  nouveauNom.textContent = plat.nom;
  nouveauPlat.appendChild(nouveauNom);

  var nouvelleDescription = document.createElement('p');
  nouvelleDescription.classList.add('description-plat');
  nouvelleDescription.textContent = plat.description;
  nouveauPlat.appendChild(nouvelleDescription);

  var nouveauPrix = document.createElement('p');
  nouveauPrix.classList.add('prix-plat');
  nouveauPrix.textContent = plat.price;
  nouveauPlat.appendChild(nouveauPrix);

  var nouveauBouton = document.createElement('button');
  nouveauBouton.classList.add('bouton-plat');
  nouveauBouton.textContent = "Commander";
  nouveauBouton.dataset.id = plat.id;
  nouveauPlat.appendChild(nouveauBouton);

})
