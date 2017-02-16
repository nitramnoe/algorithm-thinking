var containerPlats = document.querySelector('.container-plats');

var carte = {
	plats: [{
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
};

carte.plats.forEach(function(plat) {

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
	nouveauBouton.addEventListener('click', augmenterQuantite);
	nouveauPlat.appendChild(nouveauBouton);

});

var prixTotal = 0;
var panierContainer = document.getElementById('panier-container');

function calculerSousTotal(prix, quantite) {
	return prix * quantite;
}

function genererPanier() {
	panierContainer.textContent = "";
	prixTotal = 0;
	carte.plats.forEach(function(plat) {

		if (plat.selected > 0) {
			var nouveauPlatPanier = document.createElement('div');
			nouveauPlatPanier.classList.add('plat-panier');
			panierContainer.appendChild(nouveauPlatPanier);

			var nomPlatPanier = document.createElement('h3');
			nomPlatPanier.textContent = plat.nom;
			nouveauPlatPanier.appendChild(nomPlatPanier);

			var prixPanier = document.createElement('p');
			prixPanier.textContent = plat.price;
			nouveauPlatPanier.appendChild(prixPanier);

			var quantitePanier = document.createElement('p');
			quantitePanier.textContent = plat.selected;
			nouveauPlatPanier.appendChild(quantitePanier);

			var sousTotalPanier = document.createElement('p');
			sousTotalPanier.textContent = calculerSousTotal(parseFloat(plat.price), plat.selected) + "$";
			nouveauPlatPanier.appendChild(sousTotalPanier);
			prixTotal += calculerSousTotal(parseFloat(plat.price), plat.selected);

			var boutonSupprimer = document.createElement('button');
			boutonSupprimer.dataset.id = plat.id;
			boutonSupprimer.textContent = "Supprimer";
			boutonSupprimer.addEventListener('click', diminuerQuantite);
			nouveauPlatPanier.appendChild(boutonSupprimer);
		}
	});

	var totalPanier = document.createElement('p');
	totalPanier.textContent = "Total : " + prixTotal + "$";
	panierContainer.appendChild(totalPanier);

	var boutonTotal = document.createElement('button');
	boutonTotal.textContent = 'PAYER';
	panierContainer.appendChild(boutonTotal);

	if (prixTotal !== 0) {
			panierContainer.style.display = "block";
	}
	else {
		panierContainer.style.display = "none";
	}
}


function diminuerQuantite() {
	var idPlat = this.dataset.id;
	function egaliteId(item) {
		return item.id == idPlat;
	}
	var platSupp = carte.plats.filter(egaliteId);
	platSupp[0].selected -= 1;
	genererPanier();
}

function augmenterQuantite() {
	var idPlat = this.dataset.id;

	function egaliteId(item) {
		return item.id == idPlat;
	}
	var platAdd = carte.plats.filter(egaliteId);
	platAdd[0].selected += 1;
	genererPanier();
}
