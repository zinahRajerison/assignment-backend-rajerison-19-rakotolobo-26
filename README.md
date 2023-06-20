# assignment-frontend-rajerison-19-rakotolobo-26
Backend du projet assignment de 
- Rajerison Lalao Zinah n° 19 
- Rakotolobo Oelintsoa Vonjy Tahiana n° 26

## Fonctionnalites

### Authentification à l'aide de JSON Web Tokens (JWT)

#### Premier scenario: utilisateur etudiant
- L'utilisateur verra la liste de tous ses devoirs.
- Il pourra en creer un et voir les details de l'un d'eux.

#### Deuxieme scenario: utilisateur enseignant (admin)
- L'utilisateur verra la liste des devoirs (des matieres qu'il enseigne) non rendus a gauche et ceux deja rendus a droite.
- Il pourra effectuer une modification, c'est-a-dire attribuer une note et laisser une remarque, sur un devoir en le deplacant de gauche a droite (drag & drop).
- L'attribution de la note et de la remarque se fera a partir d'un pop-up.
- Il a aussi la possibilite de modifier et de supprimer le devoir.

#### Erreur: username ou password incorrect
Un message d'erreur sera affiche en cas d'erreur d'authentification.


### Toolbar / SideBar
Le site contient un menu de navigation deroulant donnant un choix sur `La liste des devoirs` ou `Ajouter devoir` et affichant le Nom et Prenom de l'utilisateur.


### Donnees de test

#### Enseignant (Admin):
- Username `MichelBuffa` Password `mdpZinah` Matiere `Angular`
- Username `Smith` Password `1234` Matiere `Big Data`

#### Etudiant:
- Username `Claude` Password `1234`
- Username `Julie` Password `1234`


### Base de donnees

- Ajout de nouvelles proprietes aux modeles


### Installation et lancement sur machine

Cloner les repositories github
- frontend : https://github.com/zinahRajerison/assignment-frontend-rajerison-19-rakotolobo-26.git
- backend : https://github.com/zinahRajerison/assignment-backend-rajerison-19-rakotolobo-26.git

- Lancer `npm install` dans les deux projets
- Lancer `node server.js` dans le backend
- Lancer `ng serve` dans le frontend

**REMARQUE** 
Si vous voulez tout lancer en local, il faudra changer `export const base_url = "https://assignment-backend-19-26.onrender.com/api";` en `export const base_url = "http://localhost:8010/api";` dans le fichier `src/environments/environment.ts` du projet frontend.


## Liens des sites
Front : https://assignment-frontend-19-26.onrender.com/

Back : https://assignment-backend-19-26.onrender.com/ 
