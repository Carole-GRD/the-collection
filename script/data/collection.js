const collectionOfButterflies = [
    {
        image: "../image/papilio-machaon.jpg",
        scientificName: "Papilio machaon",
        commonName: "Machaon",
        description: "L'imago du Machaon est un grand papillon de forme vaguement triangulaire possédant une queue, d'une envergure de 55 à 90 mm et reconnaissable à ses grands vols planés. Il bat des ailes 300 fois par minute, soit à peine 5 fois à la seconde.Les ailes ont un fond jaune clair. Elles présentent des dessins noirs et une bordure noire ornée de macules bleues et une macule rouge à l'aile postérieure.",
        colors: ["jaune", "noir"],
        habitat: "Prairies et jardins",
        distributionRegion: "Europe",
        externalLink: "https://chenilles.net/machaon/"
    },
    {
        image: "../image/vanessa-atalanta.jpg",
        scientificName: "Vanessa atalanta",
        commonName: "Vulcain",
        description: "Le Vulcain est un papillon très reconnaissable, avec le dessus des ailes marron à noir profond agrémenté d'un motif en 3/4 de cercle orange à rouge vif, formé par une bande transversale sur les ailes antérieures et une frange sur les ailes postérieures. L'apex des ailes antérieures est orné de taches blanches. Le revers est d'un brun moins sombre, avec sur les ailes antérieures une bande rouge, une bande blanche et un motif bleu. C'est un papillon de taille moyenne à grande, son envergure pouvant atteindre 64 mm.",
        colors: ["rouge", "noir"],
        habitat: "Jardins et forêts",
        distributionRegion: "Amérique du Nord",
        externalLink: "https://espacepourlavie.ca/insectes-arthropodes/vulcain"
    },
    {
        image: "../image/morpho-menelaus.jpg",
        scientificName: "Morpho menelaus",
        commonName: "Morpho bleu",
        description: "Morpho menelaus est un très grand papillon, d'une envergure d'environ 138 mm au bord externe des ailes antérieures concave avec le dessus des ailes de couleur bleu avec des reflets métalliques. Le revers est marron avec une ligne de gros ocelles à la base de l'aire postdiscale.",
        colors: ["bleu électrique"],
        habitat: "Forêts tropicales humides",
        distributionRegion: "Amérique du Sud (Amazonie)",
        externalLink: "https://www.etsy.com/fr/market/morpho_menelaus"
    },
    {
        image: "../image/danaus-plexiplusjpg.jpg",
        scientificName: "Danaus plexippus",
        commonName: "Monarch",
        description: "L'imago du monarque est un grand papillon, dont l'envergure varie de 8,6 à 12,4 cm, pour une masse d'environ 0,5 g. Les ailes et le corps sont légèrement plus petits au sein des populations qui ne migrent pas. Ses motifs alaires consistent en un fond orangé, veiné (les nervures étant surlignées de noir) et bordé de noir, l'apex et la bordure des ailes étant ornés d'une double rangée de points blancs. L'apex des ailes antérieures est noir, avec des taches blanches et orange. Le dessous des ailes est similaire, mais avec l’apex jaune brunâtre, les taches blanches plus grandes pour les ailes antérieures, et une couleur de fond plus pâle pour les ailes postérieures. Les pattes antérieures noires ne sont pas adaptées à la marche. La tête et le thorax sont eux aussi noirs, pointillés de blanc.",
        colors: ["orange", "noir"],
        habitat: "Prairies et champs",
        distributionRegion: "Amérique du Nord",
        externalLink: ""
    },
    {
        image: "../image/pieris-rapae.jpg",
        scientificName: "Pieris rapae",
        commonName: "Piéride de la rave",
        description: "L'imago de la Piéride de la rave est un papillon au-dessus majoritairement blanc et au revers blanc jaunâtre. La longueur de l'aile antérieure varie de 23 à 27 mm. Chez le mâle, le dessus de l'aile antérieure comporte un seul point postdiscal noir, tandis que la femelle en a deux. L'apex de l'aile antérieure est également marqué d'une tache sombre, plus petite chez le mâle que chez la femelle. Les papillons issus de la première génération de l'année ont des marques sombres moins importantes que ceux des générations suivantes. La Piéride de la rave peut être confondue avec la Piéride de l'ibéride (Pieris mannii) et la Piéride de l'æthionème (Pieris ergane).",
        colors: ["blanc", "noir"],
        habitat: "Jardins et champs cultivés",
        distributionRegion: "Europe",
        externalLink: "https://www.quelestcetanimal.com/lepidopteres/pieride-de-rave/"
    },
    {
        image: "../image/aglais-io.jpg",
        scientificName: "Aglais io",
        commonName: "Paon-du-jour",
        description: "Le Paon-du-jour adulte (imago) est de taille moyenne (entre 5 et 6 cm d'envergure). Il est aisément identifiable par ses ocelles (yeux) vifs sur un fond vermeil qui rappellent ceux des plumes de paon (d'où son nom vernaculaire). Le revers brun de ses ailes lui permet de se glisser au sein des feuilles mortes sans qu'il soit visible. Les ocelles sont exposés rapidement lorsque le papillon est troublé par un prédateur tel qu'un oiseau. Cette démonstration brutale de l'éclat de ses ailes, accompagnée par l'effleurement des ailes ouvertes (qui crée un bruit de sifflement), effraie et repousse l'importun. En effet, certains pensent que les ailes ouvertes évoquent mimétiquement un regard de chat, ce qui peut surprendre ou décourager le prédateur, assez longtemps pour que le Paon-du-jour puisse prendre la fuite.",
        colors: ["rouge", "noir"],
        habitat: "Forêts et lisières de bois",
        distributionRegion: "Europe",
        externalLink: "https://www.lepinet.fr/especes/nation/lep/index.php?id=29630"
    },
    {
        image: "../image/lycaena-phlaeas.jpg",
        scientificName: "Lycaena phlaeas",
        commonName: "Cuivré commun",
        description: "Le Cuivré commun est un petit papillon d'une envergure de 3,5 à 4,5 cm qui présente une certaine variabilité en fonction des générations et des sous-espèces. Le dessus des ailes antérieures est cuivre, plus ou moins suffusé de marron alors que les ailes postérieures sont marron bordées d'une large bande cuivre. Le revers de l'aile antérieure est orange orné de points noirs cerclés de blanc et bordé de beige alors que le revers des ailes postérieures est beige à marron clair suivant les sous-espèces. Une queue en n2 est plus ou moins visible.",
        colors: ["orange", "brun"],
        habitat: "Prairies et landes",
        distributionRegion: "Europe",
        externalLink: "https://lepido.ch/espece/cuivre-commun/"
    },
    {
        image: "../image/papilio-cresphontes.webp",
        scientificName: "Papilio cresphontes",
        commonName: "Grand porte-queue",
        description: "Le Grand porte-queue est un grand papillon, le plus grand papillon diurne du Canada (son envergure varie de 83 à 113 mm), de forme vaguement triangulaire, de couleur marron ornementé de bandes de taches jaune. L'ornementation forme une bande en diagonale de taches jaune et une ligne submarginale de gros points jaune. Aux postérieures la queue est large marquée d'une tache jaune au centre de son extrémité et il a une lunule anale orange. Le revers est jaune avec une ornementation marron soulignant les veines.",
        colors: ["jaune", "noir"],
        habitat: "Forêts tropicales",
        distributionRegion: "Amérique du Nord",
        externalLink: "https://entnemdept.ufl.edu/creatures/citrus/giantswallowtail.htm"
    },
    {
        image: "../image/aglais-urticae.jpg",
        scientificName: "Aglais urticae",
        commonName: "Petite tortue",
        description: "L'imago de la Petite tortue est un papillon de taille moyenne, avec une envergure allant de 40 à 55 mm. L'ornementation alaire est semblable chez le mâle et la femelle. Le dessus des ailes a une couleur de fond rouge-orangé. Il est bordé d'une bande marginale noire encadrant une série de demi-cercles bleus. L'aire basale comporte une zone brun terne. La côte de l'aile antérieure est bordée de trois taches rectangulaires brun-noir qui alternent avec des taches plus claires, dont les deux du centre sont jaune-orangé tandis que la plus proche de l'apex est blanche. Trois autres taches brun-noir, dont la taille et la forme varient selon le spécimen, ornent le centre de l'aile antérieure.",
        colors: ["rouge", "noir"],
        habitat: "Jardins et parcs",
        distributionRegion: "Europe",
        externalLink: "https://lepido.ch/espece/petite-tortue/"
    },
    {
        image: "../image/papilio-polyxenes.jpg",
        scientificName: "Papilio polyxenes",
        commonName: "Papillon du céleri",
        description: "Le Papillon du céleri est un grand papillon noir de forme vaguement triangulaire possédant une queue. Il est ornementé de lignes de taches blanches l'une formant un V l'autre submarginale aux ailes antérieures et postérieures et de taches bleues aux postérieures ainsi que d'une lunule blanche centrée de rouge. Certaines sous-espèces ont une ornementation jaune au lieu d'une bleue.",
        colors: ["noir", "jaune"],
        habitat: "Prairies et champs",
        distributionRegion: "Amérique du Nord",
        externalLink: "https://espacepourlavie.ca/insectes-arthropodes/papillon-du-celeri"
    },
    {
        image: "../image/gonepteryx-rhamni.jpg",
        scientificName: "Gonepteryx rhamni",
        commonName: "Citron",
        description: "L'imago du Citron est un papillon dont l'envergure peut varier de 25 à 55 mm (le plus souvent 40 à 45), avec des ailes découpées en forme de feuille. L'espèce présente un dimorphisme sexuel accusé : le dessus des ailes chez le mâle est jaune citron (c'est-à-dire tirant très faiblement sur le vert), jaune clair tirant sur le blanc verdâtre chez la femelle. Un point discoïdal orange marque chaque aile sur le recto, alors que c'est un point brun plus gros sur le revers. La tête et les antennes sont carminées. Le corps est noirâtre et recouvert d'un duvet qui contribue à la thermorégulation. Les ailes antérieures sont falquées, c'est-à-dire à bord externe concave se terminant par un apex pointu recourbé en faucille. Les ailes postérieures ont également le milieu du bord prolongé en une saillie angulaire au niveau de la nervure 3. Les nervures sont indiquées au bord externe par de minuscules points bruns, sauf les nervures 1 à 3 des ailes antérieures qui n'ont pas ces taches marginales.",
        colors: ["jaune pâle"],
        habitat: "Boisés et jardins",
        distributionRegion: "Europe",
        externalLink: "https://ecotree.green/blog/citron-le-papillon-qui-annonce-le-printemps"
    },
    {   
        image: "../image/papilio-demoleus.jpg",
        scientificName: "Papilio demoleus",
        commonName: "Voilier échiquier",
        description: "Le Voilier Échiquier est un grand papillon de 8 à 10 cm d'envergure en moyenne. Il est noir taché de jaune très pâle (presque blanc) (un \"damier\" noir et jaune pâle). Il présente aussi un ocelle anal rouge. Le verso est identique avec en complément un ocelle lancéolé au bord interne de l'aile postérieure.",
        colors: ["jaune", "noir"],
        habitat: "Forêts tropicales",
        distributionRegion: "Asie du Sud-Est",
        externalLink: "https://entnemdept.ufl.edu/creatures/bfly/lime_swallowtail.htm"
    },
];