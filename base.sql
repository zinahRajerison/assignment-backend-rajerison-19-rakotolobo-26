create table user(
    id_user serial not null,
    nom VARCHAR(40) not null,
    prenom VARCHAR(40) not null,
    login VARCHAR(40) not null,
    password VARCHAR(40) not null,
    photo VARCHAR(40) ,
    profil VARCHAR(40) not null,
    CONSTRAINT pk_user PRIMARY KEY (id_user)
);
create table matiere(
    id_matiere serial not null,
    nom VARCHAR(40) not null, 
    image VARCHAR(40) not null,
     id_user nteger not null,
     FOREIGN KEY(id_user) REFERENCES user,
    CONSTRAINT pk_matiere PRIMARY KEY (id_matiere)
);
create table assignments(
    id_assignment serial not null,
    dateDeRendu date,
    sujet VARCHAR(40) not null, 
    rendu boolean,
    id_auteur  integer,
    id_matiere integer not null,
    Note float,
    Remarques VARCHAR(40),
    FOREIGN KEY(id_auteur) REFERENCES user,
    FOREIGN KEY(id_matiere) REFERENCES matiere,
    CONSTRAINT pk_assignment PRIMARY KEY (id_assignment)
)