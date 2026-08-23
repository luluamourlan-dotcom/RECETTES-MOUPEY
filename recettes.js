// ======================================================
// MES RECETTES
// ======================================================
//
// Pour ajouter une recette :
// copiez une recette existante et modifiez les informations.
//
// Catégories possibles :
// "entree"
// "plat"
// "dessert"
// ======================================================


const recettes = [


    
    // ==================================================
    // SALADE CHEVRE
    // ==================================================

    {
        id: "salade-chevre",

        nom: "Salade chèvre miel",

        emoji: "🥗",

        categorie: "entree",

        description:
            "Une salade simple avec chèvre, miel et noix.",

        image:
            "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80",

        recherche:
            "salade chèvre miel fromage noix salade entrée",

        ingredients: [

            "Salade verte",

            "1 bûche de chèvre",

            "Quelques noix",

            "1 cuillère à soupe de miel",

            "Huile d'olive",

            "Vinaigre balsamique",

            "Sel et poivre"

        ],

        conception: [

            "Laver et préparer la salade.",

            "Couper le chèvre en rondelles.",

            "Faire légèrement griller le chèvre.",

            "Préparer la vinaigrette.",

            "Disposer la salade dans une assiette.",

            "Ajouter le chèvre et les noix.",

            "Ajouter un filet de miel.",

            "Assaisonner et servir."

        ]

    },


    // ==================================================
    // CARBONARA
    // ==================================================

    {
        id: "carbonara",

        nom: "Pâtes carbonara",

        emoji: "🍝",

        categorie: "plat",

        description:
            "Un grand classique italien.",

        image:
            "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?auto=format&fit=crop&w=800&q=80",

        recherche:
            "pâtes carbonara spaghetti italien parmesan pancetta oeuf plat",

        ingredients: [

            "400 g de spaghetti",

            "150 g de pancetta",

            "3 jaunes d'œufs",

            "80 g de parmesan",

            "Poivre noir",

            "Sel"

        ],

        conception: [

            "Faire cuire les pâtes.",

            "Faire revenir la pancetta.",

            "Mélanger les jaunes d'œufs avec le parmesan.",

            "Égoutter les pâtes en conservant un peu d'eau de cuisson.",

            "Mélanger les pâtes avec la pancetta.",

            "Ajouter le mélange œufs/parmesan hors du feu.",

            "Ajouter un peu d'eau de cuisson si nécessaire.",

            "Poivrer généreusement et servir."

        ]

    },


    // ==================================================
    // CURRY
    // ==================================================

    {
        id: "curry",

        nom: "Curry de légumes",

        emoji: "🥘",

        categorie: "plat",

        description:
            "Un plat parfumé au lait de coco.",

        image:
            "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",

        recherche:
            "curry légumes végétarien coco carotte courgette poivron riz plat",

        ingredients: [

            "2 carottes",

            "1 courgette",

            "1 poivron",

            "1 oignon",

            "400 ml de lait de coco",

            "2 cuillères à soupe de curry",

            "Huile d'olive",

            "Sel et poivre"

        ],

        conception: [

            "Émincer l'oignon et les légumes.",

            "Faire revenir l'oignon.",

            "Ajouter les légumes.",

            "Ajouter le curry.",

            "Ajouter le lait de coco.",

            "Laisser mijoter environ 20 minutes.",

            "Servir avec du riz."

        ]

    },


    // ==================================================
    // TIRAMISU
    // ==================================================

    {
        id: "tiramisu",

        nom: "Tiramisu",

        emoji: "🍰",

        categorie: "dessert",

        description:
            "Le célèbre dessert italien.",

        image:
            "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",

        recherche:
            "tiramisu dessert italien café mascarpone cacao biscuits dessert",

        ingredients: [

            "250 g de mascarpone",

            "3 œufs",

            "80 g de sucre",

            "20 biscuits à la cuillère",

            "25 cl de café",

            "Cacao en poudre"

        ],

        conception: [

            "Séparer les blancs des jaunes.",

            "Mélanger les jaunes avec le sucre.",

            "Ajouter le mascarpone.",

            "Monter les blancs en neige.",

            "Incorporer délicatement les blancs.",

            "Tremper les biscuits dans le café.",

            "Alterner biscuits et crème.",

            "Réserver au réfrigérateur pendant plusieurs heures.",

            "Saupoudrer de cacao avant de servir."

        ]

    },


    // ==================================================
    // PANCAKES
    // ==================================================

    {
        id: "pancakes",

        nom: "Pancakes",

        emoji: "🥞",

        categorie: "dessert",

        description:
            "Des pancakes moelleux pour le petit-déjeuner.",

        image:
            "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",

        recherche:
            "pancakes dessert petit déjeuner farine oeuf lait beurre",

        ingredients: [

            "250 g de farine",

            "2 œufs",

            "30 g de sucre",

            "30 cl de lait",

            "1 sachet de levure",

            "40 g de beurre",

            "Une pincée de sel"

        ],

        conception: [

            "Mélanger la farine, le sucre et la levure.",

            "Ajouter les œufs.",

            "Verser progressivement le lait.",

            "Ajouter le beurre fondu.",

            "Laisser reposer la pâte 15 minutes.",

            "Faire cuire dans une poêle chaude.",

            "Retourner lorsque des bulles apparaissent."

        ]

    }

],

 // ==================================================
    // TEST IMAGE
    // ==================================================

    {
        id: "TEST",

        nom: "Testtttt",

        emoji: "🥞",

        categorie: "dessert",

        description:
            "Tests tests test.",

        image:
        images/IMG_2598.jpeg"
        
        recherche:
            "xxxxxx",

        ingredients: [

            "250 g de farine",

            "2 œufs",

            "30 g de sucre",

            "30 cl de lait",

            "1 sachet de levure",

            "40 g de beurre",

            "Une pincée de sel"

        ],

        conception: [

            "Mélanger la farine, le sucre et la levure.",

            "Ajouter les œufs.",

            "Verser progressivement le lait.",

            "Ajouter le beurre fondu.",

            "Laisser reposer la pâte 15 minutes.",

            "Faire cuire dans une poêle chaude.",

            "Retourner lorsque des bulles apparaissent."

        ]

    }

];



// ======================================================
// VARIABLES
// ======================================================

let categorieActuelle = "toutes";



// ======================================================
// AFFICHER LES CATEGORIES
// ======================================================

function afficherCategories() {

    const categories =
        document.getElementById("categories");


    categories.innerHTML = "";


    const listeCategories = [

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


    listeCategories.forEach(function(categorie) {

        const bouton =
            document.createElement("button");


        bouton.className = "categorie";


        if (
            categorie.id === categorieActuelle
        ) {

            bouton.classList.add("active");

        }


        bouton.textContent =
            categorie.nom;


        bouton.addEventListener(
            "click",
            function() {

                categorieActuelle =
                    categorie.id;


                afficherCategories();

                afficherRecettes();

            }
        );


        categories.appendChild(bouton);

    });

}



// ======================================================
// AFFICHER LES RECETTES
// ======================================================

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


        // Vérifier la catégorie

        const bonneCategorie =

            categorieActuelle === "toutes"
            ||
            recette.categorie ===
            categorieActuelle;


        // Vérifier la recherche

        const texteRecherche =

            (
                recette.nom
                + " "
                + recette.recherche
            )
            .toLowerCase();


        const bonneRecherche =

            texteRecherche.includes(
                recherche
            );


        // Si la recette correspond

        if (
            bonneCategorie
            &&
            bonneRecherche
        ) {

            nombreResultats++;


            const carte =
                document.createElement("div");


            carte.className = "carte";


            carte.innerHTML = `

                <img
                    src="${recette.image}"
                    alt="${recette.nom}"
                >

                <div class="carte-contenu">

                    <span class="badge">
                        ${nomCategorie(recette.categorie)}
                    </span>

                    <h3>
                        ${recette.emoji}
                        ${recette.nom}
                    </h3>

                    <p>
                        ${recette.description}
                    </p>

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


    // Message si aucun résultat

    const message =
        document.getElementById(
            "aucun-resultat"
        );


    if (nombreResultats === 0) {

        message.style.display =
            "block";

    }

    else {

        message.style.display =
            "none";

    }

}



// ======================================================
// NOM DE LA CATEGORIE
// ======================================================

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



// ======================================================
// AFFICHER UNE RECETTE
// ======================================================

function afficherRecette(id) {

    const recette =
        recettes.find(
            function(recette) {

                return recette.id === id;

            }
        );


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


    // Titre

    document
        .getElementById("recette-titre")
        .textContent =

        recette.emoji
        + " "
        + recette.nom;


    // Image

    const image =
        document.getElementById(
            "recette-image"
        );


    image.src =
        recette.image;


    image.alt =
        recette.nom;


    // Ingrédients

    const ingredients =
        document.getElementById(
            "recette-ingredients"
        );


    ingredients.innerHTML = "";


    recette.ingredients.forEach(
        function(ingredient) {

            const ligne =
                document.createElement("li");


            ligne.textContent =
                ingredient;


            ingredients.appendChild(
                ligne
            );

        }
    );


    // Conception

    const conception =
        document.getElementById(
            "recette-conception"
        );


    conception.innerHTML = "";


    recette.conception.forEach(
        function(etape) {

            const ligne =
                document.createElement("li");


            ligne.textContent =
                etape;


            conception.appendChild(
                ligne
            );

        }
    );


    // Revenir en haut

    window.scrollTo(
        0,
        0
    );

}



// ======================================================
// RETOUR AU SOMMAIRE
// ======================================================

function retourSommaire() {

    document
        .getElementById("page-recette")
        .style.display = "none";


    document
        .getElementById("sommaire")
        .style.display = "block";


    window.scrollTo(
        0,
        0
    );

}



// ======================================================
// RECHERCHE
// ======================================================

document
    .getElementById("recherche")
    .addEventListener(
        "input",
        function() {

            afficherRecettes();

        }
    );



// ======================================================
// DEMARRAGE DU SITE
// ======================================================

afficherCategories();

afficherRecettes();
