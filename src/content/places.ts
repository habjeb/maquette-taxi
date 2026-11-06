/** Lyon est traité à part. Les autres communes de la métropole, par secteur. */
export const METRO_SECTORS = [
  {
    title: "Est",
    places: ["Beynost", "Bron", "Chassieu", "Décines-Charpieu", "Genas", "Meyzieu", "Saint-Priest", "Vaulx-en-Velin", "Villeurbanne"],
  },
  {
    title: "Ouest",
    places: ["Craponne", "Dardilly", "Écully", "Francheville", "Limonest", "Tassin-la-Demi-Lune"],
  },
  {
    title: "Sud",
    places: [
      "Brignais",
      "Corbas",
      "Feyzin",
      "Givors",
      "Mions",
      "Oullins",
      "Pierre-Bénite",
      "Sainte-Foy-lès-Lyon",
      "Saint-Fons",
      "Saint-Genis-Laval",
      "Saint-Symphorien-d’Ozon",
      "Vénissieux",
    ],
  },
  {
    title: "Nord · val de Saône",
    places: ["Caluire-et-Cuire", "Neuville-sur-Saône"],
  },
] as const;

/** Trajets hors métropole, groupés. Vernaison figure ici, comme sur la liste d’origine. */
export const REGION_SECTORS = [
  {
    title: "Rhône",
    places: ["L’Arbresle", "Tarare", "Vernaison", "Villefranche-sur-Saône"],
  },
  {
    title: "Isère",
    places: ["Bourgoin-Jallieu", "Grenoble", "L’Isle-d’Abeau", "Vienne", "Villefontaine"],
  },
  {
    title: "Loire",
    places: ["Roanne", "Saint-Étienne"],
  },
  {
    title: "Ain",
    places: ["Ambérieu-en-Bugey", "Bourg-en-Bresse", "Oyonnax"],
  },
  {
    title: "Savoie et Haute-Savoie",
    places: ["Aix-les-Bains", "Albertville", "Annecy", "Annemasse", "Chambéry", "Thonon-les-Bains"],
  },
  {
    title: "Drôme et Ardèche",
    places: ["Annonay", "Montélimar", "Romans-sur-Isère", "Valence"],
  },
  {
    title: "Plus loin",
    places: ["Clermont-Ferrand", "Mâcon", "Orange"],
  },
] as const;

export const HOSPITAL_GROUPS = [
  {
    title: "Hospices Civils de Lyon",
    text: "Les grands sites de soins lyonnais, du plateau de la Croix-Rousse jusqu’à Lyon Sud.",
    places: [
      "Hôpital de la Croix-Rousse",
      "Hôpital Édouard Herriot (Lyon 3e)",
      "Hôpital Lyon Sud (Pierre-Bénite)",
      "Hôpital Femme Mère Enfant (HFME, Bron)",
      "Hôpital Louis Pradel",
      "Hôpital Pierre Wertheimer",
      "Hôpital Henry Gabrielle (Lyon 5e)",
      "Hôpital Pierre Garraud (Lyon 5e)",
      "Hôpital des Charpennes",
      "Hôpital Frédéric Dugoujon",
      "Centre de soins dentaires (Lyon 7e)",
      "Institut d’Hématologie et d’Oncologie Pédiatrique (IHOPe)",
    ],
  },
  {
    title: "Cliniques et autres établissements",
    text: "Cliniques, hôpitaux privés et maisons de soins de la métropole, en plus des HCL.",
    places: [
      "Clinique Saint-Charles",
      "Hôpital Portes du Sud (Vénissieux)",
      "Centre Hospitalier Le Vinatier (Lyon 8e)",
      "Hôpital Saint-Jean-de-Dieu (Lyon 8e)",
      "Infirmerie protestante (Caluire)",
      "Polyclinique Lyon-Nord (Rillieux-la-Pape)",
      "Hôpital de Givors",
      "Centre ophtalmologique Kléber (Lyon 6e)",
      "Clinique Iris (Lyon, Ramsay Santé)",
      "Clinique Émilie de Vialar",
      "Clinique du Parc (Lyon 6e)",
      "AddiPsy (Lyon 7e)",
      "Clinique Villa des Roses (Lyon 5e)",
      "Hôpital privé Natecia (Lyon 8e)",
      "Clinique du Val d’Ouest",
      "Centre Léon Bérard (Lyon 8e)",
      "Hôpital Saint-Joseph Saint-Luc (Lyon 7e)",
      "Médipôle Lyon-Villeurbanne",
      "Hôpital d’instruction des armées Desgenettes",
      "Hôpital privé de l’Est Lyonnais (HPEL, Ramsay Santé)",
    ],
  },
  {
    title: "Dialyse et rééducation",
    text: "Séances qui reviennent : l’heure de passage se cale sur le planning du centre.",
    places: [
      "Centre de réadaptation Bayard (Villeurbanne)",
      "Centre médico-chirurgical de réadaptation des Massues",
      "Aural dialyse Villon (Lyon 8e)",
      "CALYDIAL Lyon Centre",
      "CALYDIAL Pierre-Bénite",
      "Korian Les Lilas Bleus (Lyon 7e)",
    ],
  },
  {
    title: "Hors métropole",
    text: "Quand l’ordonnance envoie plus loin, le départ se cale à l’avance.",
    places: [
      "Clinique Val-de-Saône (Mâcon)",
      "Hôpital Nord-Ouest (Villefranche-sur-Saône)",
      "Centre hospitalier de Mâcon",
      "CHU de Saint-Étienne",
      "CHU Grenoble Alpes",
      "Clinique de Vaugneray",
      "Hôpital Renée Sabran (Hyères)",
    ],
  },
] as const;
