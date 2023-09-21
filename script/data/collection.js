const collectionOfButterflies = [
    {
        image: "../image/papilio-machaon.jpg",
        scientificName: "Papilio machaon",
        commonName: "Machaon",
        description: "L'imago du Machaon est un grand papillon de forme vaguement triangulaire possédant une queue, d'une envergure de 55 à 90 mm et reconnaissable à ses grands vols planés.",
        colors: ["jaune", "noir"],
        habitat: "Prairies et jardins",
        distributionRegion: "Europe",
        externalLink: "https://chenilles.net/machaon/"
    },
    {
        image: "../image/vanessa-atalanta.jpg",
        scientificName: "Vanessa atalanta",
        commonName: "Vulcain",
        description: "Le Vulcain est un papillon très reconnaissable, avec le dessus des ailes marron à noir profond agrémenté d'un motif en 3/4 de cercle orange à rouge vif.",
        colors: ["rouge", "noir"],
        habitat: "Jardins et forêts",
        distributionRegion: "Amérique du Nord",
        externalLink: "https://espacepourlavie.ca/insectes-arthropodes/vulcain"
    },
    {
        image: "../image/morpho-menelaus.jpg",
        scientificName: "Morpho menelaus",
        commonName: "Morpho bleu",
        description: "Morpho menelaus est un très grand papillon, d'une envergure d'environ 138 mm au bord externe des ailes antérieures concave avec le dessus des ailes de couleur bleu avec des reflets métalliques.",
        colors: ["bleu électrique"],
        habitat: "Forêts tropicales humides",
        distributionRegion: "Amérique du Sud",
        externalLink: "https://www.etsy.com/fr/market/morpho_menelaus"
    },
    {
        image: "../image/danaus-plexiplusjpg.jpg",
        scientificName: "Danaus plexippus",
        commonName: "Monarch",
        description: "L'imago du monarque est un grand papillon, dont l'envergure varie de 8,6 à 12,4 cm, pour une masse d'environ 0,5 g. Les ailes et le corps sont légèrement plus petits au sein des populations qui ne migrent pas.",
        colors: ["orange", "noir"],
        habitat: "Prairies et champs",
        distributionRegion: "Amérique du Nord",
        externalLink: ""
    },
    {
        image: "../image/pieris-rapae.jpg",
        scientificName: "Pieris rapae",
        commonName: "Piéride de la rave",
        description: "L'imago de la Piéride de la rave est un papillon au-dessus majoritairement blanc et au revers blanc jaunâtre. La longueur de l'aile antérieure varie de 23 à 27 mm.",
        colors: ["blanc", "noir"],
        habitat: "Jardins et champs cultivés",
        distributionRegion: "Europe",
        externalLink: "https://www.quelestcetanimal.com/lepidopteres/pieride-de-rave/"
    },
    {
        image: "../image/aglais-io.jpg",
        scientificName: "Aglais io",
        commonName: "Paon-du-jour",
        description: "Le Paon-du-jour adulte (imago) est de taille moyenne (entre 5 et 6 cm d'envergure). Il est aisément identifiable par ses ocelles (yeux) vifs sur un fond vermeil.",
        colors: ["rouge", "noir"],
        habitat: "Forêts et lisières de bois",
        distributionRegion: "Europe",
        externalLink: "https://www.lepinet.fr/especes/nation/lep/index.php?id=29630"
    },
    {
        image: "../image/lycaena-phlaeas.jpg",
        scientificName: "Lycaena phlaeas",
        commonName: "Cuivré commun",
        description: "Le Cuivré commun est un petit papillon d'une envergure de 3,5 à 4,5 cm qui présente une certaine variabilité en fonction des générations et des sous-espèces.",
        colors: ["orange", "brun"],
        habitat: "Prairies et landes",
        distributionRegion: "Europe",
        externalLink: "https://lepido.ch/espece/cuivre-commun/"
    },
    {
        image: "../image/papilio-cresphontes.webp",
        scientificName: "Papilio cresphontes",
        commonName: "Grand porte-queue",
        description: "Le Grand porte-queue est un grand papillon, le plus grand papillon diurne du Canada (son envergure varie de 83 à 113 mm), de couleur marron.",
        colors: ["jaune", "noir"],
        habitat: "Forêts tropicales",
        distributionRegion: "Amérique du Nord",
        externalLink: "https://entnemdept.ufl.edu/creatures/citrus/giantswallowtail.htm"
    },
    {
        image: "../image/aglais-urticae.jpg",
        scientificName: "Aglais urticae",
        commonName: "Petite tortue",
        description: "L'imago de la Petite tortue est un papillon de taille moyenne, avec une envergure allant de 40 à 55 mm. L'ornementation alaire est semblable chez le mâle et la femelle.",
        colors: ["rouge", "noir"],
        habitat: "Jardins et parcs",
        distributionRegion: "Europe",
        externalLink: "https://lepido.ch/espece/petite-tortue/"
    },
    {
        image: "../image/papilio-polyxenes.jpg",
        scientificName: "Papilio polyxenes",
        commonName: "Papillon du céleri",
        description: "Le Papillon du céleri est un grand papillon noir de forme vaguement triangulaire possédant une queue. Il est ornementé de lignes de taches blanches.",
        colors: ["noir", "jaune"],
        habitat: "Prairies et champs",
        distributionRegion: "Amérique du Nord",
        externalLink: "https://espacepourlavie.ca/insectes-arthropodes/papillon-du-celeri"
    },
    {
        image: "../image/gonepteryx-rhamni.jpg",
        scientificName: "Gonepteryx rhamni",
        commonName: "Citron",
        description: "L'imago du Citron est un papillon dont l'envergure peut varier de 25 à 55 mm (le plus souvent 40 à 45), avec des ailes découpées en forme de feuille.",
        colors: ["jaune pâle"],
        habitat: "Boisés et jardins",
        distributionRegion: "Europe",
        externalLink: "https://ecotree.green/blog/citron-le-papillon-qui-annonce-le-printemps"
    },
    {   
        image: "../image/papilio-demoleus.jpg",
        scientificName: "Papilio demoleus",
        commonName: "Voilier échiquier",
        description: "Le Voilier Échiquier est un grand papillon de 8 à 10 cm d'envergure en moyenne. Il est noir taché de jaune très pâle (presque blanc) (un \"damier\" noir et jaune pâle)",
        colors: ["jaune", "noir"],
        habitat: "Forêts tropicales",
        distributionRegion: "Asie du Sud-Est",
        externalLink: "https://entnemdept.ufl.edu/creatures/bfly/lime_swallowtail.htm"
    },
];