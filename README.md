# Play Q.I.

Play Q.I. est un site qui permet de tester ses connaissances tout en s'amusant.

Il contient 24 quiz répartis en 9 catégories :
- Animaux
- Art
- Cinéma
- Culture
- Gastronomie
- Géographie
- Histoire
- Insolite
- Sciences

J'ai défini les thèmes, les questions et les réponses associées. 

Tout le monde peut accéder aux quiz et parcourir les questions et les réponses possibles. Pour jouer, il faut créer un compte et se connecter. Quand c'est fait, l'utilisateur répond aux questions et peut visualiser son score, les réponses qu'il a donné et les explications de chacune des bonnes réponses. 

Les personnes ayant un statut "admin" ont accès aux mêmes fonctionnalités que les utilisateurs et peuvent aussi ajouter ou modifier des sujets de quiz et associer des quiz aux sujets qu'ils souhaitent.

Ce site est responsive.

## Réalisation

J'ai entièrement réalisé ce projet Node.js lors de mon troisième mois de formation en développement web FS JavaScrpt.

Il s'agit du premier projet que je code en POO.

J'ai codé ce projet en 4 jours (de la base de donnée au rendu final).

## Stack
- Node.js
- Express
- Sequelize
- bcrypt
- email-validator
- ejs
- PostgreSQL (avec tables relationnelles)
- Sqitch
 
## Languages utilisés 

- HTML5, CSS3
- JavaScript 
- SQL 
  
 ![playQI_MLD](docs/MLD.png)

## Screenshots

### Home page
![playQI_home_page](docs/screenshots/home_page.png)

### Tag page
![playQI_tag_page](docs/screenshots/tag_list.png)

### Liste des quiz
Visible depuis la home page :
![playQI_quiz_page](docs/screenshots/quiz_list.png)

### Quiz page preview
Visible par tout le monde (pas de possibilité de jouer sans se connecter) :
![playQI_quiz_page_preview](docs/screenshots/quiz_page_preview.png)

### Sign-up page
![playQI_signup_page](docs/screenshots/signup_page.png)

### Sign-in page
![playQI_signin_page](docs/screenshots/signin_page.png)

### Profile page
Page disponible uniquement aux personnes qui se sont inscrites :
![playQI_profile_page](docs/screenshots/profile_page.png)

### Play quiz page 
Une fois connecté, l'utilisateur peut répondre aux questions du quiz de son choix :
![playQI_play_quiz_page](docs/screenshots/play_quiz_page.png)

### Result page
Une fois que l'utilisateur a répondu à TOUTES les questions (une seule réponse possible), il peut visualiser son score, les réponses qu'il a donné, les bonnes réponses et leurs explications :
![playQI_result_page](docs/screenshots/result_page.png)

### Admin pages
Page visible seulement par les administrateurs :
![playQI_admin_page](docs/screenshots/admin_page.png)

Page pour **ajouter un tag :** 
![playQI_add_tag_page](docs/screenshots/add_tag_page.png)

Page pour **modifier un tag :** 
![playQI_update_tag_page](docs/screenshots/update_tag.png)

Page pour **associer un tag à un quiz :**
![playQI_quiz_tag_association_page](docs/screenshots/quiz_tag_association.png)

## Installation 

**Pré-requis**
- Node.js pour le télécharger c'est [ici](https://nodejs.org/en/download/)
- PostgreSQL

1. Cloner le repo 
- en utilisant la clé SSH
```
git clone git@github.com:sarah-maau/playQI.git
```
- en utilisant HTTPS
```
git clone https://github.com/sarah-maau/playQI.git
```

2. Installer les dépendances 

```
npm i
```
   
3.  Renommer le fichier `.env.example` en `.env` avec vos variables d'environnement

4.  Créer une base de données

5. Renommer le fichier the sqitch.example.conf to sqitch.conf,puis chargez les tables en utilisant la commande Sqitch :

```
sqitch deploy db:pg:<nom de la base de données>
```

6. Charger les données
   
```
psql -d <nom de la base de données> -f ./data/import_data.sql
```
7. Lancer le script

```
npm start
```
8. Une fois sur la page, pour tester l'application dans son entiereté, créer un utilisateur et se connecter avec les identifiants !

## Licence
Ce projet est sous licence MIT - voir le fichier `LICENSE` pour plus de détails
