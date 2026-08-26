// ============================================================
// MON CARNET DE RECETTES
// ============================================================
//
// images/ = images de couverture du sommaire
//
// scan/   = scans des recettes papier
//
// ============================================================


const recettes = [


    // ========================================================
    // COUSCOUS
    // ========================================================

    {
        id: "couscous",

        nom: "Couscous",

        categorie: "plat",

        // Image affichée dans le sommaire
        image: "images/couscous.jpg",

        // Scans de la recette
        scans: [
            "scan/couscous/page-1.jpg",
            "scan/couscous/page-2.jpg"
        ]
    },


    // ========================================================
    // SALADE DE CHEVRE
    // ========================================================

    {
        id: "salade-chevre",

        nom: "Salade de chèvre chaud",

        categorie: "entree",

        image: "images/salade-chevre.jpg",

        scans: [
            "scan/salade-chevre/page-1.jpg"
        ]
    },


    // ========================================================
    // LASAGNES
    // ========================================================

    {
        id: "lasagnes",

        nom: "Lasagnes",

        categorie: "plat",

        image: "images/lasagnes.jpg",

        scans: [
            "scan/lasagnes/page-1.jpg",
            "scan/lasagnes/page-2.jpg"
        ]
    },


    // ========================================================
    // TIRAMISU
    // ========================================================

    {
        id: "tiramisu",

        nom: "Tiramisu",

        categorie: "dessert",

        image: "images/tiramisu.jpg",

        scans: [
            "scan/tiramisu/page-1.jpg"
        ]
    }

];



// ============================================================
// VARIABLE DE CATEGORIE
// ============================================================

let categorieActuelle = "toutes";



// ============================================================
// AFFICHAGE DES CATEGORIES
// ============================================================

function afficherCategories() {

    const conteneur =
        document.getElementById("categories");

    conteneur.innerHTML = "";


    const categories = [

        {
            id: "toutes",
            nom: "Toutes"
        },

        {
            id: "entree",
            nom: "🥗 Entrées"
        },

        {
            id: "plat",
            nom: "🍝 Plats"
        },

        {
            id: "dessert",
            nom: "🍰 Desserts"
        }

    ];


    categories.forEach(function(categorie) {

        const bouton =
            document.createElement("button");

        bouton.className = "categorie";

        bouton.textContent = categorie.nom;


        if (
            categorie.id === categorieActuelle
        ) {

            bouton.classList.add("active");

        }


        bouton.addEventListener(
            "click",
            function() {

                categorieActuelle =
                    categorie.id;

                afficherCategories();

                afficherRecettes();

            }
        );


        conteneur.appendChild(bouton);

    });

}



// ============================================================
// NOM DE LA CATEGORIE
// ============================================================

function nomCategorie(categorie) {

    if (categorie === "entree") {
        return "Entrée";
    }

    if (categorie === "plat") {
        return "Plat";
    }

    if (categorie === "dessert") {
        return "Dessert";
    }

    return categorie;

}



// ============================================================
// AFFICHER LES RECETTES DU SOMMAIRE
// ============================================================

function afficherRecettes() {

    const liste =
        document.getElementById(
            "liste-recettes"
        );


    const recherche =
        document
            .getElementById("recherche")
            .value
            .toLowerCase()
            .trim();


    liste.innerHTML = "";


    let nombreResultats = 0;


    recettes.forEach(function(recette) {


        // Vérification de la catégorie

        const bonneCategorie =

            categorieActuelle === "toutes"

            ||

            recette.categorie ===
            categorieActuelle;


        // Vérification de la recherche

        const bonneRecherche =

            recette.nom
                .toLowerCase()
                .includes(recherche);


        // Si la recette correspond

        if (
            bonneCategorie &&
            bonneRecherche
        ) {

            nombreResultats++;


            const carte =
                document.createElement("article");


            carte.className = "carte";


            carte.innerHTML = `

                <img
                    src="${recette.image}"
                    alt="${recette.nom}"
                >

                <div class="carte-contenu">

                    <div class="badge">

                        ${nomCategorie(
                            recette.categorie
                        )}

                    </div>

                    <h3>
                        ${recette.nom}
                    </h3>

                </div>

            `;


            carte.addEventListener(
                "click",
                function() {

                    afficherRecette(
                        recette.id
                    );

                }
            );


            liste.appendChild(carte);

        }

    });


    // Affichage si aucune recette

    const aucun =
        document.getElementById(
            "aucun-resultat"
        );


    if (nombreResultats === 0) {

        aucun.style.display = "block";

    } else {

        aucun.style.display = "none";

    }

}



// ============================================================
// AFFICHER UNE RECETTE
// ============================================================

function afficherRecette(id) {


    const recette =
        recettes.find(function(recette) {

            return recette.id === id;

        });


    if (!recette) {
        return;
    }


    // Cacher le sommaire

    document
        .getElementById("sommaire")
        .style.display = "none";


    // Afficher la page recette

    document
        .getElementById("page-recette")
        .style.display = "block";


   // -----------------------------------------------
// TITRE
// -----------------------------------------------

document
    .getElementById("recette-titre")
    .textContent = recette.nom;



// -----------------------------------------------
// PHOTO
// -----------------------------------------------

const photo =
    document.getElementById(
        "recette-photo"
    );


photo.src =
    recette.image;


photo.alt =
    recette.nom;



// -----------------------------------------------
// SCANS
// -----------------------------------------------

const conteneurScans =
    document.getElementById(
        "recette-scans"
    );


conteneurScans.innerHTML = "";



recette.scans.forEach(
    function(scan, index) {

        const image =
            document.createElement(
                "img"
            );


        image.className =
            "scan";


        image.src =
            scan;


        image.alt =
            recette.nom
            + " - page "
            + (index + 1);


        conteneurScans.appendChild(
            image
        );

    }
);

    conteneurScans.innerHTML = "";


    // Ajouter chaque page du scan

    recette.scans.forEach(
        function(scan, index) {


            const image =
                document.createElement("img");


            image.className = "scan";


            image.src = scan;


            image.alt =
                recette.nom
                + " - page "
                + (index + 1);


            conteneurScans.appendChild(
                image
            );

        }
    );


    // Retour en haut de la page

    window.scrollTo(0, 0);

}



// ============================================================
// RETOUR AU SOMMAIRE
// ============================================================

function retourSommaire() {


    document
        .getElementById("page-recette")
        .style.display = "none";


    document
        .getElementById("sommaire")
        .style.display = "block";


    window.scrollTo(0, 0);

}



// ============================================================
// BARRE DE RECHERCHE
// ============================================================

document
    .getElementById("recherche")
    .addEventListener(
        "input",
        function() {

            afficherRecettes();

        }
    );



// ============================================================
// INITIALISATION DU SITE
// ============================================================

afficherCategories();

afficherRecettes();
