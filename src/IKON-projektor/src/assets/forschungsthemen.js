const themen = [
  {
    name: "Ur- und Frühgeschichte (weltweit)",
    review_board: "Alte Kulturen",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Klassische Philologie",
    review_board: "Alte Kulturen",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Alte Geschichte",
    review_board: "Alte Kulturen",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Klassische Archäologie",
    review_board: "Alte Kulturen",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Ägyptische und Vorderasiatische Altertumswissenschaften",
    review_board: "Alte Kulturen",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Mittelalterliche Geschichte",
    review_board: "Geschichtswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Frühneuzeitliche Geschichte",
    review_board: "Geschichtswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name:
      "Neuere und Neueste Geschichte (einschl. Europäische Geschichte der Neuzeit und Außereuropäische Geschichte)",
    review_board: "Geschichtswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Wissenschaftsgeschichte",
    review_board: "Geschichtswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Kunstgeschichte",
    review_board: "Kunst-, Musik-, Theater- und Medienwissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Musikwissenschaften",
    review_board: "Kunst-, Musik-, Theater- und Medienwissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Theater- und Medienwissenschaften",
    review_board: "Kunst-, Musik-, Theater- und Medienwissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name:
      "Allgemeine und Vergleichende Sprachwissenschaft, Typologie, Außereuropäische Sprachen",
    review_board: "Sprachwissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Einzelsprachwissenschaften",
    review_board: "Sprachwissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Historische Linguistik",
    review_board: "Sprachwissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name:
      "Angewandte Sprachwissenschaften, Experimentelle Linguistik, Computerlinguistik",
    review_board: "Sprachwissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Ältere deutsche Literatur",
    review_board: "Literaturwissenschaft",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Neuere deutsche Literatur",
    review_board: "Literaturwissenschaft",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Europäische und Amerikanische Literaturen",
    review_board: "Literaturwissenschaft",
    field: 3,
    color: "#14a5b5"
  },
  {
    name:
      "Allgemeine und vergleichende Literaturwissenschaft; Kulturwissenschaft",
    review_board: "Literaturwissenschaft",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Ethnologie und Europäische Ethnologie",
    review_board:
      "Sozial- und Kulturanthropologie, Außereuropäische Kulturen, Judaistik und Religionswissenschaft",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Asienbezogene Wissenschaften",
    review_board:
      "Sozial- und Kulturanthropologie, Außereuropäische Kulturen, Judaistik und Religionswissenschaft",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Afrika-, Amerika- und Ozeanienbezogene Wissenschaften",
    review_board:
      "Sozial- und Kulturanthropologie, Außereuropäische Kulturen, Judaistik und Religionswissenschaft",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Islamwissenschaften, Arabistik, Semitistik",
    review_board:
      "Sozial- und Kulturanthropologie, Außereuropäische Kulturen, Judaistik und Religionswissenschaft",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Religionswissenschaft und Judaistik",
    review_board:
      "Sozial- und Kulturanthropologie, Außereuropäische Kulturen, Judaistik und Religionswissenschaft",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Evangelische Theologie",
    review_board: "Theologie",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Katholische Theologie",
    review_board: "Theologie",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Geschichte der Philosophie",
    review_board: "Philosophie",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Theoretische Philosophie",
    review_board: "Philosophie",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Praktische Philosophie",
    review_board: "Philosophie",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Allgemeine und Historische Pädagogik",
    review_board: "Erziehungswissenschaft und Bildungsforschung",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Allgemeines und fachbezogenes Lehren und Lernen",
    review_board: "Erziehungswissenschaft und Bildungsforschung",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Bildungssysteme und Bildungsinstitutionen",
    review_board: "Erziehungswissenschaft und Bildungsforschung",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Pädagogische Sozial- und Organisationsforschung",
    review_board: "Erziehungswissenschaft und Bildungsforschung",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Allgemeine, Biologische und Mathematische Psychologie",
    review_board: "Psychologie",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Entwicklungspsychologie und Pädagogische Psychologie",
    review_board: "Psychologie",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Sozialpsychologie und Arbeits- und Organisationspsychologie",
    review_board: "Psychologie",
    field: 3,
    color: "#14a5b5"
  },
  {
    name:
      "Differentielle Psychologie, Klinische Psychologie, Medizinische Psychologie, Methoden",
    review_board: "Psychologie",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Soziologische Theorie",
    review_board: "Sozialwissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Empirische Sozialforschung",
    review_board: "Sozialwissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Publizistik und Kommunikationswissenschaft",
    review_board: "Sozialwissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Politikwissenschaft",
    review_board: "Sozialwissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Wirtschaftstheorie",
    review_board: "Wirtschaftswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Wirtschaftspolitik und Finanzwissenschaften",
    review_board: "Wirtschaftswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Betriebswirtschaftslehre",
    review_board: "Wirtschaftswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Statistik und Ökonometrie",
    review_board: "Wirtschaftswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Wirtschafts- und Sozialgeschichte",
    review_board: "Wirtschaftswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Grundlagen des Rechts und der Rechtswissenschaft",
    review_board: "Rechtswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Privatrecht",
    review_board: "Rechtswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Öffentliches Recht",
    review_board: "Rechtswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Strafrecht, Strafprozessrecht",
    review_board: "Rechtswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Kriminologie",
    review_board: "Rechtswissenschaften",
    field: 3,
    color: "#14a5b5"
  },
  {
    name: "Biochemie",
    review_board: "Grundlagen der Biologie und Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Biophysik",
    review_board: "Grundlagen der Biologie und Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Zellbiologie",
    review_board: "Grundlagen der Biologie und Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Strukturbiologie",
    review_board: "Grundlagen der Biologie und Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Allgemeine Genetik",
    review_board: "Grundlagen der Biologie und Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Entwicklungsbiologie",
    review_board: "Grundlagen der Biologie und Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Bioinformatik und Theoretische Biologie",
    review_board: "Grundlagen der Biologie und Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Anatomie",
    review_board: "Grundlagen der Biologie und Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Evolution und Systematik der Pflanzen und Pilze",
    review_board: "Pflanzenwissenschaften",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Pflanzenökologie und Ökosystemforschung",
    review_board: "Pflanzenwissenschaften",
    field: 2,
    color: "#e69e57"
  },
  {
    name:
      "Organismische Interaktionen und chemische Ökologie pflanzlicher Systeme",
    review_board: "Pflanzenwissenschaften",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Pflanzenphysiologie",
    review_board: "Pflanzenwissenschaften",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Biochemie und Biophysik der Pflanzen",
    review_board: "Pflanzenwissenschaften",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Zell- und Entwicklungsbiologie der Pflanzen",
    review_board: "Pflanzenwissenschaften",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Genetik der Pflanzen",
    review_board: "Pflanzenwissenschaften",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Systematik und Morphologie der Tiere",
    review_board: "Zoologie",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Evolution, Anthropologie",
    review_board: "Zoologie",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Ökologie der Tiere, Biodiversität und Ökosystemforschung",
    review_board: "Zoologie",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Biologie des Verhaltens und der Sinne",
    review_board: "Zoologie",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Biochemie und Physiologie der Tiere",
    review_board: "Zoologie",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Evolutionäre Zell- und Entwicklungsbiologie der Tiere",
    review_board: "Zoologie",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Stoffwechselphysiologie, Biochemie und Genetik der Mikroorganismen",
    review_board: "Mikrobiologie, Virologie und Immunologie",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Mikrobielle Ökologie und Angewandte Mikrobiologie",
    review_board: "Mikrobiologie, Virologie und Immunologie",
    field: 2,
    color: "#e69e57"
  },
  {
    name:
      "Medizinische Mikrobiologie, Parasitologie, medizinische Mykologie und Hygiene, Molekulare Infektionsbiologie",
    review_board: "Mikrobiologie, Virologie und Immunologie",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Virologie",
    review_board: "Mikrobiologie, Virologie und Immunologie",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Immunologie",
    review_board: "Mikrobiologie, Virologie und Immunologie",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Epidemiologie, Medizinische Biometrie, Medizinische Informatik",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Public Health, medizinische Versorgungsforschung, Sozialmedizin",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Humangenetik",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Physiologie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Ernährungswissenschaften",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Pathologie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Klinische Chemie und Pathobiochemie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Pharmazie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Pharmakologie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Toxikologie, Arbeitsmedizin und Rechtsmedizin",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Anästhesiologie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Kardiologie, Angiologie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Pneumologie, Klinische Infektiologie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Hämatologie, Onkologie, Transfusionsmedizin",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Gastroenterologie, Stoffwechsel",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Nephrologie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Endokrinologie, Diabetologie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Rheumatologie, Klinische Immunologie, Allergologie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Dermatologie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Kinder- und Jugendmedizin",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Frauenheilkunde und Geburtshilfe",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Reproduktionsmedizin/ -biologie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Urologie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Biogerontologie und Geriatrie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Allgemein- und Viszeralchirurgie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Herz-, Thorax-, Gefäßchirurgie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Unfallchirurgie und Orthopädie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Zahnheilkunde; Mund-, Kiefer- und Gesichtschirurgie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Hals-Nasen-Ohrenheilkunde",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Radiologie und Nuklearmedizin",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Radioonkologie und Strahlenbiologie",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Biomedizinische Technik und Medizinische Physik",
    review_board: "Medizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Molekulare Neurowissenschaft und Neurogenetik",
    review_board: "Neurowissenschaft",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Zelluläre Neurowissenschaft",
    review_board: "Neurowissenschaft",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Entwicklungsneurobiologie",
    review_board: "Neurowissenschaft",
    field: 2,
    color: "#e69e57"
  },
  {
    name:
      "Systemische Neurowissenschaft, Computational Neuroscience, Verhalten",
    review_board: "Neurowissenschaft",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Organismische Neurobiologie",
    review_board: "Neurowissenschaft",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Kognitive Neurowissenschaft",
    review_board: "Neurowissenschaft",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Molekulare und Zelluläre Neurologie, Neuropathologie",
    review_board: "Neurowissenschaft",
    field: 2,
    color: "#e69e57"
  },
  {
    name:
      "Klinische Neurowissenschaften I - Neurologie, Neurochirurgie, Neuroradiologie",
    review_board: "Neurowissenschaft",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Biologische und molekulare Psychiatrie",
    review_board: "Neurowissenschaft",
    field: 2,
    color: "#e69e57"
  },
  {
    name:
      "Klinische Neurowissenschaften II - Psychiatrie, Psychotherapie, Kinder- und Jugendspychiatrie",
    review_board: "Neurowissenschaft",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Klinische Neurowissenschaften III - Augenheilkunde",
    review_board: "Neurowissenschaft",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Bodenwissenschaften",
    review_board: "Agrar-, Forstwissenschaften und Tiermedizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Pflanzenbau und Agrartechnik",
    review_board: "Agrar-, Forstwissenschaften und Tiermedizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Pflanzenernährung",
    review_board: "Agrar-, Forstwissenschaften und Tiermedizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Ökologie von Agrarlandschaften",
    review_board: "Agrar-, Forstwissenschaften und Tiermedizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Pflanzenzüchtung",
    review_board: "Agrar-, Forstwissenschaften und Tiermedizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Phytomedizin",
    review_board: "Agrar-, Forstwissenschaften und Tiermedizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Agrarökonomie und -soziologie",
    review_board: "Agrar-, Forstwissenschaften und Tiermedizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Forstwissenschaften",
    review_board: "Agrar-, Forstwissenschaften und Tiermedizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Tierzucht, Tierhaltung und Tierhygiene",
    review_board: "Agrar-, Forstwissenschaften und Tiermedizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Tierernährung und Tierernährungsphysiologie",
    review_board: "Agrar-, Forstwissenschaften und Tiermedizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name: "Grundlagen der Tiermedizin",
    review_board: "Agrar-, Forstwissenschaften und Tiermedizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name:
      "Grundlagen von Pathogenese, Diagnostik, Therapie und Klinische Tiermedizin",
    review_board: "Agrar-, Forstwissenschaften und Tiermedizin",
    field: 2,
    color: "#e69e57"
  },
  {
    name:
      "Anorganische Molekülchemie - Synthese, Charakterisierung, Theorie und Modellierung",
    review_board: "Molekülchemie",
    field: 1,
    color: "#ad494a"
  },
  {
    name:
      "Organische Molekülchemie - Synthese, Charakterisierung, Theorie und Modellierung",
    review_board: "Molekülchemie",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Festkörper- und Oberflächenchemie, Materialsynthese",
    review_board: "Chemische Festkörper- und Oberflächenforschung",
    field: 1,
    color: "#ad494a"
  },
  {
    name:
      "Physikalische Chemie von Festkörpern und Oberflächen, Materialcharakterisierung",
    review_board: "Chemische Festkörper- und Oberflächenforschung",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Theorie und Modellierung",
    review_board: "Chemische Festkörper- und Oberflächenforschung",
    field: 1,
    color: "#ad494a"
  },
  {
    name:
      "Physikalische Chemie von Molekülen, Flüssigkeiten und Grenzflächen - Spektroskopie, Kinetik",
    review_board: "Physikalische und Theoretische Chemie",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Allgemeine Theoretische Chemie",
    review_board: "Physikalische und Theoretische Chemie",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Analytik, Methodenentwicklung (Chemie)",
    review_board: "Analytik, Methodenentwicklung (Chemie)",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Biologische und Biomimetische Chemie",
    review_board: "Biologische Chemie und Lebensmittelchemie",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Lebensmittelchemie",
    review_board: "Biologische Chemie und Lebensmittelchemie",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Präparative und Physikalische Chemie von Polymeren",
    review_board: "Polymerforschung",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Experimentelle und Theoretische Polymerphysik",
    review_board: "Polymerforschung",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Polymermaterialien",
    review_board: "Polymerforschung",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Experimentelle Physik der kondensierten Materie",
    review_board: "Physik der kondensierten Materie",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Theoretische Physik der kondensierten Materie",
    review_board: "Physik der kondensierten Materie",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Optik, Quantenoptik, Physik der Atome, Moleküle und Plasmen",
    review_board:
      "Optik, Quantenoptik und Physik der Atome, Moleküle und Plasmen",
    field: 1,
    color: "#ad494a"
  },
  {
    name:
      "Kern- und Elementarteilchenphysik, Quantenmechanik, Relativitätstheorie, Felder",
    review_board: "Teilchen, Kerne und Felder",
    field: 1,
    color: "#ad494a"
  },
  {
    name:
      "Statistische Physik, Weiche Materie, Biologische Physik, Nichtlineare Dynamik",
    review_board:
      "Statistische Physik, Weiche Materie, Biologische Physik, Nichtlineare Dynamik",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Astrophysik und Astronomie",
    review_board: "Astrophysik und Astronomie",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Mathematik",
    review_board: "Mathematik",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Physik und Chemie der Atmosphäre",
    review_board: "Atmosphären-, Meeres- und Klimaforschung",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Physik, Chemie und Biologie des Meeres",
    review_board: "Atmosphären-, Meeres- und Klimaforschung",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Geologie, Ingenieurgeologie, Paläontologie",
    review_board: "Geologie und Paläontologie",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Physik des Erdkörpers",
    review_board: "Geophysik und Geodäsie",
    field: 1,
    color: "#ad494a"
  },
  {
    name:
      "Geodäsie, Photogrammetrie, Fernerkundung, Geoinformatik, Kartographie",
    review_board: "Geophysik und Geodäsie",
    field: 1,
    color: "#ad494a"
  },
  {
    name:
      "Organische und Anorganische Geochemie, Biogeochemie, Mineralogie, Petrologie, Kristallographie, Lagerstättenkunde",
    review_board: "Geochemie, Mineralogie und Kristallographie",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Physische Geographie",
    review_board: "Geographie",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Humangeographie",
    review_board: "Geographie",
    field: 1,
    color: "#ad494a"
  },
  {
    name:
      "Hydrogeologie, Hydrologie, Limnologie, Siedlungswasserwirtschaft, Wasserchemie, Integrierte Wasser-Ressourcen Bewirtschaftung",
    review_board: "Wasserforschung",
    field: 1,
    color: "#ad494a"
  },
  {
    name: "Spanende Fertigungstechnik",
    review_board: "Produktionstechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Ur- und Umformtechnik",
    review_board: "Produktionstechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Füge-, Montage- und Trenntechnik",
    review_board: "Produktionstechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Kunststofftechnik",
    review_board: "Produktionstechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Produktionsorganisation und Betriebswissenschaften",
    review_board: "Produktionstechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Werkzeugmaschinen und Produktionsautomatisierung",
    review_board: "Produktionstechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Konstruktion, Maschinenelemente, Produktentwicklung",
    review_board: "Mechanik und Konstruktiver Maschinenbau",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Mechanik",
    review_board: "Mechanik und Konstruktiver Maschinenbau",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Leichtbau, Textiltechnik",
    review_board: "Mechanik und Konstruktiver Maschinenbau",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Akustik",
    review_board: "Mechanik und Konstruktiver Maschinenbau",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Chemische und Thermische Verfahrenstechnik",
    review_board: "Verfahrenstechnik, Technische Chemie",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Technische Chemie",
    review_board: "Verfahrenstechnik, Technische Chemie",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Mechanische Verfahrenstechnik",
    review_board: "Verfahrenstechnik, Technische Chemie",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Bioverfahrenstechnik",
    review_board: "Verfahrenstechnik, Technische Chemie",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Energieverfahrenstechnik",
    review_board:
      "Wärmeenergietechnik, Thermische Maschinen, Strömungsmechanik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Technische Thermodynamik",
    review_board:
      "Wärmeenergietechnik, Thermische Maschinen, Strömungsmechanik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Strömungsmechanik",
    review_board:
      "Wärmeenergietechnik, Thermische Maschinen, Strömungsmechanik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Strömungs- und Kolbenmaschinen",
    review_board:
      "Wärmeenergietechnik, Thermische Maschinen, Strömungsmechanik",
    field: 4,
    color: "#9467bd"
  },
  {
    name:
      "Metallurgische und thermische Prozesse und thermomechanische Behandlung von Werkstoffen",
    review_board: "Werkstofftechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Keramische und metallische Sinterwerkstoffe",
    review_board: "Werkstofftechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Verbundwerkstoffe",
    review_board: "Werkstofftechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Mechanisches Verhalten von Konstruktionswerkstoffen",
    review_board: "Werkstofftechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Beschichtungs- und Oberflächentechnik",
    review_board: "Werkstofftechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Thermodynamik und Kinetik von Werkstoffen",
    review_board: "Materialwissenschaft",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Herstellung und Eigenschaften von Funktionsmaterialien",
    review_board: "Materialwissenschaft",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Mikrostrukturelle mechanische Eigenschaften von Materialien",
    review_board: "Materialwissenschaft",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Strukturierung und Funktionalisierung",
    review_board: "Materialwissenschaft",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Biomaterialien",
    review_board: "Materialwissenschaft",
    field: 4,
    color: "#9467bd"
  },
  {
    name:
      "Automatisierungstechnik, Regelungssysteme, Robotik, Mechatronik, Cyber Physical Systems",
    review_board: "Systemtechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Messsysteme",
    review_board: "Systemtechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Mikrosysteme",
    review_board: "Systemtechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name:
      "Verkehrs- und Transportsysteme, Logistik, Intelligenter und automatisierter Verkehr",
    review_board: "Systemtechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Arbeitswissenschaft, Ergonomie, Mensch-Maschine-Systeme",
    review_board: "Systemtechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Biomedizinische Systemtechnik",
    review_board: "Systemtechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name:
      "Elektronische Halbleiter, Bauelemente und Schaltungen, Integrierte Systeme",
    review_board: "Elektrotechnik und Informationstechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name:
      "Nachrichten- und Hochfrequenztechnik, Kommunikationstechnik und -netze, Theoretische Elektrotechnik",
    review_board: "Elektrotechnik und Informationstechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name:
      "Elektrische Energieerzeugung, -übertragung, -verteilung und -anwendung",
    review_board: "Elektrotechnik und Informationstechnik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Theoretische Informatik",
    review_board: "Informatik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Softwaretechnik und Programmiersprachen",
    review_board: "Informatik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Sicherheit und Verlässlichkeit",
    review_board: "Informatik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Betriebs-, Kommunikations-, Datenbank- und verteilte Systeme",
    review_board: "Informatik",
    field: 4,
    color: "#9467bd"
  },
  {
    name:
      "Interaktive und intelligente Systeme, Bild- und Sprachverarbeitung, Computergraphik und Visualisierung",
    review_board: "Informatik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Informationssysteme, Prozess- und Wissensmanagement",
    review_board: "Informatik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Rechnerarchitekturen und eingebettete Systeme",
    review_board: "Informatik",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Massiv parallele und datenintensive Systeme",
    review_board: "Informatik",
    field: 4,
    color: "#9467bd"
  },
  {
    name:
      "Architektur, Bau- und Konstruktionsgeschichte, Bauforschung, Ressourcenökonomie im Bauwesen",
    review_board: "Bauwesen und Architektur",
    field: 4,
    color: "#9467bd"
  },
  {
    name:
      "Städtebau/Stadtentwicklung, Raumplanung, Verkehrs- und Infrastrukturplanung, Landschaftsplanung",
    review_board: "Bauwesen und Architektur",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Baustoffwissenschaften, Bauchemie, Bauphysik",
    review_board: "Bauwesen und Architektur",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Konstruktiver Ingenieurbau, Bauinformatik und Baubetrieb",
    review_board: "Bauwesen und Architektur",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Angewandte Mechanik, Statik und Dynamik",
    review_board: "Bauwesen und Architektur",
    field: 4,
    color: "#9467bd"
  },
  {
    name: "Geotechnik, Wasserbau",
    review_board: "Bauwesen und Architektur",
    field: 4,
    color: "#9467bd"
  }
];
