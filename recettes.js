// ============================================================
// MON CARNET DE RECETTES
// ============================================================
//
// Pour ajouter une recette :
// copiez un bloc { ... } et modifiez son contenu.
//
// Catégories possibles :
// "entree"
// "plat"
// "dessert"
// ============================================================


const recettes = [


    // ========================================================
    // COUSCOUS
    // ========================================================

    {

        id: "couscous",

        nom: "Couscous",

        emoji: "🍲",

        categorie: "plat",

        date: "Juin 2026",

        personnes: "6 personnes",


        description:
            "Couscous aux poulet, merguez, chorizo et légumes.",


        image:
           "images/Plats/couscous.jpg",


        recherche:
            "couscous poulet merguez chorizo légumes carottes navets poireaux courgettes citrouille céleri tomates pois chiches semoule raisins épices harissa",


        // ====================================================
        // VARIANTE
        // ====================================================

        variante: {

            titre:
                "Variante andalouse",

            texte:
                "On remplace les pilons de poulet par 1 kg de pollo de pincho que l’on fait cuire à part dans une poêle."

        },


        // ====================================================
        // INGREDIENTS
        // ====================================================

        ingredients: [


            {

                categorie: "Viandes",

                items: [

                    "12 pilons de poulet",

                    "12 merguez ou saucisses épicées",

                    "1 morceau de chorizo"

                ]

            },


            {

                categorie: "Légumes",

                items: [

                    "2 oignons",

                    "3 gousses d’ail",

                    "6 carottes",

                    "6 petits navets",

                    "3 poireaux",

                    "2 courgettes",

                    "1 tranche de citrouille",

                    "2 branches de céleri",

                    "2 belles tomates",

                    "400 g de pois chiches (1 grande boîte)",

                    "5 verres de semoule (grain moyen)",

                    "1 bol de raisins secs"

                ]

            },


            {

                categorie: "Épices",

                items: [

                    "1 bâton de cannelle",

                    "1 morceau de gingembre pelé",

                    "1 c. à soupe de cumin en poudre",

                    "1 c. à café de grains de coriandre",

                    "1 c. à café de curcuma",

                    "1 c. à café de noix de muscade moulue",

                    "1 c. à café de safran",

                    "2 clous de girofle",

                    "1/2 c. à café de piment de Cayenne",

                    "Poivre noir, blanc et de Jamaïque",

                    "Harissa"

                ]

            }            
        ],


        // ====================================================
        // PREPARATION
        // ====================================================

        preparation: [

            "Ébouillantez les saucisses trois bonnes minutes et réservez.",

            "Pelez et coupez grossièrement les oignons. Lavez puis coupez la branche de céleri en bâtonnets. Râpez les tomates.",

            "Dans la cocotte minute, faites fondre le chorizo puis faites revenir doucement les oignons. Rajoutez les gousses d'ail non pelées et le céleri. Quand le mélange commence à attacher, rajoutez la tomate et les épices, à l’exception de la harissa. Mélangez et laissez mijoter quelques minutes, rajoutez un bon litre d’eau, salez et portez à ébullition.",

            "Pendant ce temps, pelez les carottes, les navets et les courgettes, coupez-les en bâtonnets. Lavez les poireaux et coupez-les en deux. Pelez la citrouille et coupez-la en gros cubes. Égouttez et rincez les pois chiches.",

            "Mettez le poulet dans le bouillon, fermez la cocotte et faites cuire à la vapeur une dizaine de minutes. Rajoutez les carottes, les navets et les poireaux, faites cuire à la vapeur une dizaine de minutes supplémentaires.",

            "Ouvrez la cocotte. Rajoutez les courgettes et laissez mijoter à petit bouillon jusqu’à ce que les courgettes soient cuites sans se défaire. Mettez une louche de bouillon sur les raisins secs pour les faire gonfler.",

            "Retirez délicatement les légumes, déposez-les dans le plat de service. Déposez le poulet dans un autre plat.",

            "Goûtez le bouillon et rectifiez éventuellement en sel et épices. Rajoutez de l’eau si nécessaire et laissez mijoter à feu doux.",

            "Versez la semoule dans un saladier, ajoutez le même volume d’eau bouillante, salez, couvrez et laissez absorber cinq minutes.",

            "Pendant ce temps, faites cuire la citrouille dans le bouillon avec les pois chiches. Faites griller les saucisses.",

            "Rajoutez une bonne cuillère à soupe d’huile d’olive à la semoule et égrenez-la à la fourchette.",

            "Déposez la citrouille, les pois chiches et les raisins dans le plat de légumes.",

            "Préparez une tasse d’harissa avec un peu de bouillon.",

            "Présentez à la table le couscous : les trois plats de graine, légumes et viandes, un bol de bouillon et la harissa.",

            "Bon appétit !"

        ]


    }

 // ========================================================
    //  FIN COUSCOUS
    // ========================================================



// ========================================================
    // COUSCOUS Exemple Entrée
    // ========================================================

    {

        id: "couscous exemple entrée",

        nom: "couscous exemple entrée",

        emoji: "🍲",

        categorie: "entree",

        date: "Juin 2026",

        personnes: "6 personnes",


        description:
            "Couscous xxxxxx.",


        image:
           "images/Plats/couscous.jpg",


        recherche:
            "couscous poulet merguez chorizo légumes carottes navets poireaux courgettes citrouille céleri tomates pois chiches semoule raisins épices harissa",


        // ====================================================
        // VARIANTE
        // ====================================================

        variante: {

            titre:
                "Variante andalouse",

            texte:
                "On remplace les pilons de poulet par 1 kg de pollo de pincho que l’on fait cuire à part dans une poêle."

        },


        // ====================================================
        // INGREDIENTS
        // ====================================================

        ingredients: [


            {

                categorie: "Viandes",

                items: [

                    "12 pilons de poulet",

                    "12 merguez ou saucisses épicées",

                    "1 morceau de chorizo"

                ]

            },


            {

                categorie: "Légumes",

                items: [

                    "2 oignons",

                    "3 gousses d’ail",

                    "6 carottes",

                    "6 petits navets",

                    "3 poireaux",

                    "2 courgettes",

                    "1 tranche de citrouille",

                    "2 branches de céleri",

                    "2 belles tomates",

                    "400 g de pois chiches (1 grande boîte)",

                    "5 verres de semoule (grain moyen)",

                    "1 bol de raisins secs"

                ]

            },


            {

                categorie: "Épices",

                items: [

                    "1 bâton de cannelle",

                    "1 morceau de gingembre pelé",

                    "1 c. à soupe de cumin en poudre",

                    "1 c. à café de grains de coriandre",

                    "1 c. à café de curcuma",

                    "1 c. à café de noix de muscade moulue",

                    "1 c. à café de safran",

                    "2 clous de girofle",

                    "1/2 c. à café de piment de Cayenne",

                    "Poivre noir, blanc et de Jamaïque",

                    "Harissa"

                ]

            }            
        ],


        // ====================================================
        // PREPARATION
        // ====================================================

        preparation: [

            "Ébouillantez les saucisses trois bonnes minutes et réservez.",

            "Pelez et coupez grossièrement les oignons. Lavez puis coupez la branche de céleri en bâtonnets. Râpez les tomates.",

            "Dans la cocotte minute, faites fondre le chorizo puis faites revenir doucement les oignons. Rajoutez les gousses d'ail non pelées et le céleri. Quand le mélange commence à attacher, rajoutez la tomate et les épices, à l’exception de la harissa. Mélangez et laissez mijoter quelques minutes, rajoutez un bon litre d’eau, salez et portez à ébullition.",

            "Pendant ce temps, pelez les carottes, les navets et les courgettes, coupez-les en bâtonnets. Lavez les poireaux et coupez-les en deux. Pelez la citrouille et coupez-la en gros cubes. Égouttez et rincez les pois chiches.",

            "Mettez le poulet dans le bouillon, fermez la cocotte et faites cuire à la vapeur une dizaine de minutes. Rajoutez les carottes, les navets et les poireaux, faites cuire à la vapeur une dizaine de minutes supplémentaires.",

            "Ouvrez la cocotte. Rajoutez les courgettes et laissez mijoter à petit bouillon jusqu’à ce que les courgettes soient cuites sans se défaire. Mettez une louche de bouillon sur les raisins secs pour les faire gonfler.",

            "Retirez délicatement les légumes, déposez-les dans le plat de service. Déposez le poulet dans un autre plat.",

            "Goûtez le bouillon et rectifiez éventuellement en sel et épices. Rajoutez de l’eau si nécessaire et laissez mijoter à feu doux.",

            "Versez la semoule dans un saladier, ajoutez le même volume d’eau bouillante, salez, couvrez et laissez absorber cinq minutes.",

            "Pendant ce temps, faites cuire la citrouille dans le bouillon avec les pois chiches. Faites griller les saucisses.",

            "Rajoutez une bonne cuillère à soupe d’huile d’olive à la semoule et égrenez-la à la fourchette.",

            "Déposez la citrouille, les pois chiches et les raisins dans le plat de légumes.",

            "Préparez une tasse d’harissa avec un peu de bouillon.",

            "Présentez à la table le couscous : les trois plats de graine, légumes et viandes, un bol de bouillon et la harissa.",

            "Bon appétit !"

        ]


    }

 // ========================================================
    //  FIN COUSCOUS
    // ========================================================
    
];



// ============================================================
// VARIABLES
// ============================================================


let categorieActuelle = "toutes";



// ============================================================
// CATEGORIES
// ============================================================


function afficherCategories() {


    const conteneur =
        document.getElementById(
            "categories"
        );


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


    categories.forEach(
        function(categorie) {


            const bouton =
                document.createElement(
                    "button"
                );


            bouton.className =
                "categorie";


            bouton.textContent =
                categorie.nom;


            if (
                categorie.id ===
                categorieActuelle
            ) {

                bouton.classList.add(
                    "active"
                );

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


            conteneur.appendChild(
                bouton
            );

        }
    );

}



// ============================================================
// AFFICHER LES RECETTES
// ============================================================


function afficherRecettes() {


    const liste =
        document.getElementById(
            "liste-recettes"
        );


    const recherche =
        document
            .getElementById(
                "recherche"
            )
            .value
            .toLowerCase()
            .trim();


    liste.innerHTML = "";


    let nombreResultats = 0;


    recettes.forEach(
        function(recette) {


            // -----------------------------------------------
            // CATEGORIE
            // -----------------------------------------------

            const bonneCategorie =

                categorieActuelle ===
                "toutes"

                ||

                recette.categorie ===
                categorieActuelle;


            // -----------------------------------------------
            // RECHERCHE
            // -----------------------------------------------

            const texteRecherche = (

                recette.nom
                + " "
                + recette.recherche
                + " "
                + recette.description

            ).toLowerCase();


            const bonneRecherche =

                texteRecherche.includes(
                    recherche
                );


            // -----------------------------------------------
            // AFFICHAGE
            // -----------------------------------------------

            if (
                bonneCategorie
                &&
                bonneRecherche
            ) {


                nombreResultats++;


                const carte =
                    document.createElement(
                        "article"
                    );


                carte.className =
                    "carte";


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


                liste.appendChild(
                    carte
                );

            }

        }
    );


    // -----------------------------------------------
    // AUCUN RESULTAT
    // -----------------------------------------------

    const aucun =
        document.getElementById(
            "aucun-resultat"
        );


    if (
        nombreResultats === 0
    ) {

        aucun.style.display =
            "block";

    }

    else {

        aucun.style.display =
            "none";

    }

}



// ============================================================
// NOM CATEGORIE
// ============================================================


function nomCategorie(
    categorie
) {


    if (
        categorie === "entree"
    ) {

        return "Entrée";

    }


    if (
        categorie === "plat"
    ) {

        return "Plat";

    }


    if (
        categorie === "dessert"
    ) {

        return "Dessert";

    }


    return categorie;

}



// ============================================================
// AFFICHER UNE RECETTE
// ============================================================


function afficherRecette(
    id
) {


    const recette =
        recettes.find(
            function(recette) {

                return recette.id === id;

            }
        );


    if (!recette) {

        return;

    }


    // -----------------------------------------------
    // CACHER LE SOMMAIRE
    // -----------------------------------------------

    document
        .getElementById(
            "sommaire"
        )
        .style.display =
        "none";


    // -----------------------------------------------
    // AFFICHER LA RECETTE
    // -----------------------------------------------

    document
        .getElementById(
            "page-recette"
        )
        .style.display =
        "block";


    // -----------------------------------------------
    // DATE
    // -----------------------------------------------

    document
        .getElementById(
            "recette-date"
        )
        .textContent =
        recette.date || "";


    // -----------------------------------------------
    // TITRE
    // -----------------------------------------------

    document
        .getElementById(
            "recette-titre"
        )
        .textContent =

        recette.emoji
        + " "
        + recette.nom;


    // -----------------------------------------------
    // IMAGE
    // -----------------------------------------------

    const image =
        document.getElementById(
            "recette-image"
        );


    image.src =
        recette.image;


    image.alt =
        recette.nom;


    // -----------------------------------------------
    // PERSONNES
    // -----------------------------------------------

    const personnes =
        document.getElementById(
            "recette-personnes"
        );


    if (
        recette.personnes
    ) {

        personnes.textContent =
            "Ingrédients pour "
            + recette.personnes
            + " :";

    }

    else {

        personnes.textContent =
            "";

    }


    // -----------------------------------------------
    // VARIANTE
    // -----------------------------------------------

    const variante =
        document.getElementById(
            "recette-variante"
        );


    if (
        recette.variante
    ) {


        variante.style.display =
            "block";


        document
            .getElementById(
                "variante-titre"
            )
            .textContent =
            recette.variante.titre
            + " :";


        document
            .getElementById(
                "variante-texte"
            )
            .textContent =
            recette.variante.texte;

    }

    else {


        variante.style.display =
            "none";

    }


    // -----------------------------------------------
    // INGREDIENTS
    // -----------------------------------------------

    const ingredients =
        document.getElementById(
            "recette-ingredients"
        );


    ingredients.innerHTML = "";


    recette.ingredients.forEach(
        function(groupe) {


            const bloc =
                document.createElement(
                    "div"
                );


            bloc.className =
                "categorie-ingredients";


            const titre =
                document.createElement(
                    "h3"
                );


            titre.textContent =
                groupe.categorie;


            bloc.appendChild(
                titre
            );


            const liste =
                document.createElement(
                    "ul"
                );


            liste.className =
                "ingredients";


            groupe.items.forEach(
                function(ingredient) {


                    const item =
                        document.createElement(
                            "li"
                        );


                    item.textContent =
                        ingredient;


                    liste.appendChild(
                        item
                    );

                }
            );


            bloc.appendChild(
                liste
            );


            ingredients.appendChild(
                bloc
            );

        }
    );


    // -----------------------------------------------
    // PREPARATION
    // -----------------------------------------------

    const preparation =
        document.getElementById(
            "recette-preparation"
        );


    preparation.innerHTML = "";


    recette.preparation.forEach(
        function(paragraphe) {


            const p =
                document.createElement(
                    "p"
                );


            p.textContent =
                paragraphe;


            preparation.appendChild(
                p
            );

        }
    );


    // -----------------------------------------------
    // FIN DE RECETTE
    // -----------------------------------------------

    const fin =
        document.getElementById(
            "recette-fin"
        );


    fin.textContent =
        "";


    // -----------------------------------------------
    // HAUT DE PAGE
    // -----------------------------------------------

    window.scrollTo(
        0,
        0
    );

}



// ============================================================
// RETOUR AU SOMMAIRE
// ============================================================


function retourSommaire() {


    document
        .getElementById(
            "page-recette"
        )
        .style.display =
        "none";


    document
        .getElementById(
            "sommaire"
        )
        .style.display =
        "block";


    window.scrollTo(
        0,
        0
    );

}



// ============================================================
// RECHERCHE
// ============================================================


document
    .getElementById(
        "recherche"
    )
    .addEventListener(
        "input",
        function() {

            afficherRecettes();

        }
    );



// ============================================================
// DEMARRAGE
// ============================================================


afficherCategories();

afficherRecettes();
