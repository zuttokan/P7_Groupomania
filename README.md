# Groupomania - Réseau social d'entreprise

## PROJET 7 - OPENCLASSROOMS - DEVELOPPEUR WEB

## Le projet contient les technologies suivantes:

- <a  href="https://nodejs.org/"  title="Node.js"><img  src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg"  alt="Node.js"  width="25px"  height="21px"> Node.js</a>
- <a  href="https://expressjs.com/"  title="Express"><img  src="https://github.com/get-icon/geticon/raw/master/icons/express.svg"  alt="Express"  width="25px"  height="21px"> Express.js</a>
- <a  href="https://www.mongodb.com/"  title="Express"><img  src="https://github.com/get-icon/geticon/raw/master/icons/mongodb-icon.svg"  alt="Mongo Db"  width="25px"  height="21px"> Mongo Db</a>

- <a  href="https://angular.io/"  title="Angular"><img  src="https://fossies.org/linux/angular/aio/src/assets/images/logos/angular/angular.png"  alt="Angular"  width="25px"  height="21px"> Angular</a>

## Démarrer le Backend

### clonez le repository:

- Faites un git clone ou téléchargez la version Zip

```
Git clone https://github.com/zuttokan/Groupomania
```

### lancer le serveur:

- Depuis votre terminal ouvrez une ligne de commande :

```
cd backend
npm install
node server

```

### Créer à la racine du backend un fichier .env contenant les variables suivantes :

SECRET_DB = (informations de votre base de données)

PORT = (Le port ou votre serveur sera hébérgé)

TOKEN_SECRET = ( Votre clé secret de décodage du Token)

isAdmin = (l'adresse mail spécifique au compte administrateur)

## Groupomania / Frontend

### Démarrer le front:

- Depuis votre terminal ouvrez une ligne de commande :

```
cd frontend
npm install
ng serve

```

- Ouvrir le navigateur a l'adresse http://localhost:4200/

### Fonctionnalités utilisateurs:

Le site permet :

<ul>
  <li>Inscription ou connexion via l'email avec un mot de passe.</li>
  <li>Partager des posts contenant du texte et une image.</li>
  <li>L'affichage des posts se fait de magniére antéchronologique.</li>
  <li>Chaque post contient sont datage de création ainsi que le mail de sont créateur.</li>
  <li>Chaque utilisateur à la possibilité de modifier ou supprimer ses propres posts.</li>
  <li>Il est possible de liker un post (ou de le retirer).</li>
</ul>

- Un compte Administrateur est présent afin de faire de la modération.
  Il a la possibilité de modifier ou de supprimer les posts utilisateurs, ainsi qu'en créer si necéssaire.

### Fonctionnalités techniques:

<ul>
<li>La session de l’utilisateur persiste durant sa connection</li>
<li>Les données de connexion sont sécurisées</li>
</ul>

### Identité graphique:

<ul>
<li>La police d'éciture utliser est Lato</li>
<li>La palette de couleur principale utiliser </li>
<li>Primaire : #FD2D01</li>
<li>Secondaire : #FFD7D7</li>
<li>Tertiaire : #4E5166</li>
</ul>