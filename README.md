# Mon Annonce

L’entreprise MonAnnonce édite un site d’annonce permettant à des particuliers de mettre en ligne des annonces de vente dediverses produits, il peuts’agir de produits mobiliers (meubles, objets, ...), de véhicules ou d’offre immobilières.Le  site  se  veutsimpliste,  il  permet  à  chaque  utilisateur  qui  y  accède  de  pouvoir  créer  un compte, accéder à son profil, publier des annonces et consulter les annonces existantes.Le  site  internet  ne  gère  pas de  transaction, il permet  simplement  aux  vendeurs de disposer d’une visibilité pour la vente de leurs produits.Un utilisateur sans compte, peutconsulter les annonces publiées et contacter le destinataire en complétant un formulaire sur le site internet.Les  annonceurs  quantà  eux,  lors  de  la  création  de  leur  compte,  ils  renseignent  un  certain nombre d’informations obligatoires dont le nom, prénom, date de naissance et leur adresse email. Il leur est également demandé d’envoyer une photo ou un scan de leur pièce d’identité (au format: .jpg, .png ou .pdf).
## Pré-requis
Il faut avoir cloné l'API à la racine du projet et suivre les instructions du ReadMe.md pour lancer l'API.

## Installer et démarrer le projet avec un environnement Node 16.X installé nativement

Cloner le projet puis se mettre dessus.

```bash
  git clone https://github.com/msausset/projet_fullstack_front.git
  cd projet_fullstack_front
```

Créer le fichier d'environnement *.env* à la racine du projet en se basant sur le fichier *.env.example*.

```bash
  cp .env.example .env
```

Renseigner dans le fichier *.env* l'URL de base de l'API pour pouvoir communiquer avec ce dernier.

```bash
  REACT_APP_BASE_URL = http://localhost:PORT
```

Installer les dépendances.

```bash
  npm install
```

Lancer le serveur.

```bash
  npm start
```

