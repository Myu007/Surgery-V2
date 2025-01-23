// Questions array
const questions = [
    {
        "numb": 1,
        "question": "Who was the founder of antiseptics in surgery?",
        "answer": "D. Lister",
        "options": [
            "N.I. Pirogov",
            "J.N. Korvisar",
            "D. Lister",
            "A.V. Sechenov",
            "I.F. Bush"
        ]
    },
    {
        "numb": 2,
        "question": "Who proved the circular rotation of blood in the body during the Renaissance?",
        "answer": "Garvey V.",
        "options": [
            "Vesalius A.",
            "Ibn Sina",
            "Galen",
            "Pare A.",
            "Garvey V."
        ]
    },
    {
        "numb": 3,
        "question": "Who was the founder of microbiology?",
        "answer": "L. Pasteur",
        "options": [
            "Jenner",
            "D. Lister",
            "Ibn Sina",
            "L. Pasteur",
            "Hippocrates"
        ]
    },
    {
        "numb": 4,
        "question": "Who discovered the filtering virus?",
        "answer": "Ivanovsky",
        "options": [
            "G. Helmholtz",
            "I.F. Bush",
            "A.V. Sechenov",
            "J.N. Korvisar",
            "Ivanovsky"
        ]
    },
    {
        "numb": 5,
        "question": "Thanks to whom did a new stage in the development of the anatomical direction in medicine begin - the creation of the doctrine of tissues?",
        "answer": "K. Bisha",
        "options": [
            "K. Bisha",
            "K. Rokitansky",
            "I.F. Bush",
            "R. Virchow",
            "J.N. Korvisar"
        ]
    },
    {
        "numb": 6,
        "question": "Who of the above was a pediatrician of the second half of the XIX century?",
        "answer": "Filatov N.F.",
        "options": [
            "Ivanovsky",
            "Sklifosovsky N.V.",
            "Sechenov A.V.",
            "Filatov N.F.",
            "Botkin S.P."
        ]
    },
    {
        "numb": 7,
        "question": "Choose an ancient civilization in which surgery had the highest level of developmet:",
        "answer": "Ancient India",
        "options": [
            "Ancient China",
            "Ancient Greece",
            "Ancient Egypt",
            "Ancient Rome",
            "Ancient India"
        ]
    },
    {
        "numb": 8,
        "question": "Choose a famous doctor of Ancient Greece:",
        "answer": "Hippocrates",
        "options": [
            "Galen",
            "Hippocrates",
            "Sushruta",
            "Garvey",
            "Avicenna"
        ]
    },
    {
        "numb": 9,
        "question": "Asepsis is a set of measures:",
        "answer": "to prevent infection from entering the wound",
        "options": [
            "to sterilize instruments",
            "to disinfect the rooms",
            "to combat infection in the wound",
            "to prevent infection from entering the wound",
            "to disinfect instruments"
        ]
    },
    {
        "numb": 10,
        "question": "Who was the founder of asepsis?",
        "answer": "Bergman",
        "options": [
            "Lister",
            "Bergman",
            "Pasteur",
            "Bush",
            "Dyakonov"
        ]
    },
    {
        "numb": 11,
        "question": "What is the sterilization?",
        "answer": "destruction of all microorganisms, including spore-forming ones",
        "options": [
            "destruction of opportunistic microorganisms on instruments after their use",
            "a set of measures to prevent microbes from entering the wound",
            "destruction of all microorganisms, including spore-forming ones",
            "destruction of pathogenic microbes",
            "mechanical removal of microorganisms from the surgace of medical devices"
        ]
    },
    {
        "numb": 12,
        "question": "Which method is a physical sterilization?",
        "answer": "autoclaving",
        "options": [
            "immersion in a 70% ethyl acohol solution",
            "exposure to formalin vapors",
            "immersion in an iodine solution",
            "immersion in a 6% hydrogen peroxide solution",
            "autoclaving"
        ]
    },
    {
        "numb": 13,
        "question": "What is the optimal methodd of preoperative hand treatment in terms of time and efficiency?",
        "answer": "pervomur",
        "options": [
            "according to Lister",
            "according to Alfeld",
            "according to Furbringer",
            "pervomur",
            "according to Spasokukotsky-Kochergin"
        ]
    },
    {
        "numb": 14,
        "question": "What is usesd to control the quality of preoperative hand treatment?",
        "answer": "bacteriological control",
        "options": [
            "Mikulich's method",
            "amidopyrine test",
            "bacteriological control",
            "phenolphthalein test",
            "thermal indicators"
        ]
    },
    {
        "numb": 15,
        "question": "Which solution of ammonia is used to wash hands according to Spasokukotsky-Kochergin?",
        "answer": "0.50%",
        "options": [
            "0.50%",
            "3%",
            "1.50%",
            "1%",
            "2%"
        ]
    },
    {
        "numb": 16,
        "question": "How long is the general cleaning in the operating unit carried out?",
        "answer": "1 time in a week",
        "options": [
            "1 time in a week",
            "1 time in a day",
            "1 time in a month",
            "1 time in 10 days",
            "1 time in 2 weeks"
        ]
    },
    {
        "numb": 17,
        "question": "How many hours does the sterility of the open bix remain?",
        "answer": "6 hours",
        "options": [
            "10 hours",
            "24 hours",
            "6 hours",
            "12 hours",
            "8 hours"
        ]
    },
    {
        "numb": 18,
        "question": "The storage period of a closed sterile bix without a filter is no more than:",
        "answer": "3 days",
        "options": [
            "2 days",
            "6 hours",
            "3 days",
            "1 day",
            "20 days"
        ]
    },
    {
        "numb": 19,
        "question": "When packing the bix by type, they put in it:",
        "answer": "only one type of material",
        "options": [
            "everything necessary for a certain operation",
            "necessary during the working day of the dressing room",
            "only one type of material",
            "necessary for the surgeon",
            "necessary for preparing the operating nurse for the operation"
        ]
    },
    {
        "numb": 20,
        "question": "Anesthetic and respiratory equipment is disinfected with a solution of:",
        "answer": "3% hydrogen peroxide - 60 min",
        "options": [
            "3% hydrogen peroxide - 60 min",
            "96% ethyl alcohol - 20 min",
            "1% chloramine - 60 min",
            "96% ethyl alcohol - 10 min",
            "10% formaldehyde - 10 min"
        ]
    },
    {
        "numb": 21,
        "question": "Antiseptic is a method of prevention of:",
        "answer": "endogenous and exogenous infection",
        "options": [
            "exogenous infection",
            "endogenous infection",
            "endogenous and exogenous infection",
            "air and contact infection",
            "implantation and contact infection"
        ]
    },
    {
        "numb": 22,
        "question": "J. Lister used as an antiseptic a solution of:",
        "answer": "carboxylic acid",
        "options": [
            "boric acid",
            "carboxylic acid",
            "acetic acid",
            "salicylic acid",
            "formic acid"
        ]
    },
    {
        "numb": 23,
        "question": "One of the following measures can be attributed to mechanical antiseptics:",
        "answer": "performing surgical wound treatment",
        "options": [
            "draining the wound with a two-light tube",
            "vacuuming the wound",
            "performing surgical wound treatment",
            "using ultrasonic cavitation",
            "washing the wound with a solution of hydrogen peroxide"
        ]
    },
    {
        "numb": 24,
        "question": "The requirements for chemical antiseptics do NOT include:",
        "answer": "selectivity of action on microorganisms",
        "options": [
            "maximum efficiency in minimum concentration",
            "selectivity of action on microorganisms",
            "no harmful effects on tissues",
            "no mutagenic effect",
            "the absence of the affect of inactivation by body tissues"
        ]
    },
    {
        "numb": 25,
        "question": "Dry-burning sterilization is intended for:",
        "answer": "all metal tools",
        "options": [
            "suture materila",
            "cotton pads",
            "optic material",
            "all metal tools",
            "dressing material"
        ]
    },
    {
        "numb": 26,
        "question": "What types of external influences is the HIV virus resistant to?",
        "answer": "ultraviolet irradiation",
        "options": [
            "high temperatures",
            "disinfectants",
            "low temperatures",
            "chemical solutions",
            "ultraviolet irradiation"
        ]
    },
    {
        "numb": 27,
        "question": "To control the temperature in air sterilizer is used:",
        "answer": "saccharose",
        "options": [
            "nicotinamide",
            "salicylic acid",
            "saccharose",
            "succinic acid",
            "benzoic acid"
        ]
    },
    {
        "numb": 28,
        "question": "Violation of the asepsis during injection can lead to:",
        "answer": "abscess",
        "options": [
            "nothing",
            "allergic reaction",
            "lipodystrophy",
            "abscess",
            "air embolism"
        ]
    },
    {
        "numb": 29,
        "question": "The current cleaning in the operating room is carried out:",
        "answer": "during thw hole working day",
        "options": [
            "at the end of the working day",
            "during thw hole working day",
            "before the operation",
            "twice a day",
            "once a day"
        ]
    },
    {
        "numb": 30,
        "question": "The amount of bleach for the preparation of a 10% solution:",
        "answer": "1 kg of bleach per 9 liters of water",
        "options": [
            "100 g of bleach per 10 liters of water",
            "1 kg of bleach per 5 liters of water",
            "100 g of bleach per 9.9 liters of water",
            "100 g of bleach per 5 liters of water",
            "1 kg of bleach per 9 liters of water"
        ]
    },
    {
        "numb": 31,
        "question": "A single-use system after infusion therapy is necessary to:",
        "answer": "cut, soak in a desalination solution",
        "options": [
            "cut, soak in a desalination solution",
            "hand over to the head nurse",
            "throw it away immediately",
            "throw to waste basket",
            "rinse with running water"
        ]
    },
    {
        "numb": 32,
        "question": "Skin treatment in case of contact with HIV-infected material is carried out:",
        "answer": "70 degrees of alcohol",
        "options": [
            "6% hydrogen peroxide solution",
            "70 degrees of alcohol",
            "betadin solution",
            "96 degrees of alcohol",
            "3% hydrogen peroxide solution"
        ]
    },
    {
        "numb": 33,
        "question": "Which one of the following is a soft bandage?",
        "answer": "Kerchief bandage",
        "options": [
            "Kramer's tire",
            "Illizarov's apparatus",
            "Kerchief bandage",
            "plaster cast",
            ""
        ]
    },
    {
        "numb": 34,
        "question": "One of the rules for applying a bandage to a limb is:",
        "answer": "to apply a bandage from the periphery to the trunk",
        "options": [
            "to apply a bandage from the proximal to the peripheral",
            "to apply a bandage from the periphery to the trunk",
            "to apply a bandage to clothing",
            "to fix a bandage in the wound area",
            "to apply a bandage to an unbent limb"
        ]
    },
    {
        "numb": 35,
        "question": "The most complete definition of the term \"desmurgy/bandage\" is:",
        "answer": "a complex of long-term effects on the pathological focus",
        "options": [
            "a set of tools used to secure the dressing",
            "a set of tools used to create pressure on a part of the body in order to stop venous bleeding",
            "a complex of long-term effects on the pathological focus",
            "a set of tools used to ensure long-term",
            "a set of tools used to keep the damaged part of the body (most often limbs) in the required position"
        ]
    },
    {
        "numb": 36,
        "question": "Which bandage is advisable to impose to fix the dressing material in the nasal area?",
        "answer": "sling bandage",
        "options": [
            "8-shaped bandage",
            "sling bandage",
            "circular bandage",
            "\"cap\" bandage",
            "T-shaped bandage"
        ]
    },
    {
        "numb": 37,
        "question": "Any bandage begins with application of:",
        "answer": "circular bandage",
        "options": [
            "spiral bandage",
            "8-shaped bandage",
            "creeping bandage",
            "cruciform bandage",
            "circular bandage"
        ]
    },
    {
        "numb": 38,
        "question": "When applying a spiral bandage:",
        "answer": "each subsequent round overlaps the previous one by 2/3",
        "options": [
            "the bandage rounds completely overlap each other",
            "the bandage rounds overlap",
            "do not twist the bandage",
            "the bandage rounds do not touch each other",
            "each subsequent round overlaps the previous one by 2/3"
        ]
    },
    {
        "numb": 39,
        "question": "It is advisable to apply a bandage to the knee joint:",
        "answer": "turtle",
        "options": [
            "turtle",
            "spiral",
            "returning",
            "spike",
            "creeping"
        ]
    },
    {
        "numb": 40,
        "question": "If the bones of the shin are fractured, the tire should be the length of the fingers:",
        "answer": "to the upper third of the thigh",
        "options": [
            "to the lumbar region",
            "to the knee joint",
            "to the scapula",
            "to the upper third of the thigh",
            "to the middle third of the shin"
        ]
    },
    {
        "numb": 41,
        "question": "If the bones of the forearm are fractured, the tire should be the length of the fingers:",
        "answer": "up to the upper third of the shoulder",
        "options": [
            "up to the acromion",
            "up to the upper third of the forearm",
            "up to the upper third of the shoulder",
            "up to the elbow joint",
            "all answers are wrong"
        ]
    },
    {
        "numb": 42,
        "question": "In case of wounds to the scalp, it is better to use:",
        "answer": "\"cap\"",
        "options": [
            "\"bridle\"",
            "sling-shaped",
            "circular",
            "\"cap\"",
            "cruciform bandage"
        ]
    },
    {
        "numb": 43,
        "question": "In case of damage to the elbow joint, a bandage is applied:",
        "answer": "turtle-shaped",
        "options": [
            "cruciform",
            "spiral",
            "returning",
            "turtle-shaped",
            "spike-shaped"
        ]
    },
    {
        "numb": 44,
        "question": "In case of a fracture of the collarbone, you should apply:",
        "answer": "a Dezo bandage",
        "options": [
            "a cruciform bandage on the chest",
            "a spiral bandage on the chest",
            "a Dezo bandage",
            "a spike-shaped bandage on the shoulder joint area",
            "a Trench collar"
        ]
    },
    {
        "numb": 45,
        "question": "Bleeding, in which blood accumulates in the body cavity, is called:",
        "answer": "internal",
        "options": [
            "local",
            "external",
            "internal",
            "venous",
            "abdominal"
        ]
    },
    {
        "numb": 46,
        "question": "Give the most complete correct answer: BLEEDING is an outporing of blood to:",
        "answer": "into the tissues, body cavities or the external environment",
        "options": [
            "into the xternal environment and body cavities",
            "in the body tissue",
            "in the body cavity",
            "into the tissues, body cavities or the external environment",
            "the external environment"
        ]
    },
    {
        "numb": 47,
        "question": "Give the most complete correct answer: THE DANGER OF BLEEDING LIES IN THE DEVELOPMENT OF:",
        "answer": "shock, collapse, anemia, compression of vital organs",
        "options": [
            "shock, collapse, tru aneurysm",
            "shock, collapse, anemia, compression of vital organs",
            "collapse, organ dysfunction, asphyxia",
            "shock, anemia, leukopenia",
            "anemia, leukocytosis, acidosis"
        ]
    },
    {
        "numb": 48,
        "question": "How is TEMPORARY hemostasis carried out?",
        "answer": "pressure bandage, tourniquit, finger pressure",
        "options": [
            "by applying a vascular suture",
            "ligation of the vessel in the wound",
            "pressure bandage, tourniquit, finger pressure",
            "diathermocoagulation",
            "prosthetics of the vessel"
        ]
    },
    {
        "numb": 49,
        "question": "What is the cause of early secondary bleeding?",
        "answer": "ligature slipping of the vessel",
        "options": [
            "ligature slipping of the vessel",
            "arrosion of the vessel",
            "senile age of patients",
            "melting of blood clots with pus",
            "release of adrenaline"
        ]
    },
    {
        "numb": 50,
        "question": "The outflow of dark blood from a purulent wound during dressing is:",
        "answer": "early secondary venous bleeding",
        "options": [
            "later secondary arterial bleeding",
            "early secondary arterial bleeding",
            "later secondary venous bleeding",
            "primary arterial bleeding",
            "early secondary venous bleeding"
        ]
    },
    {
        "numb": 51,
        "question": "Local signs of the intrapleural bleeding includes:",
        "answer": "attenuation of respiratory noises during auscultation",
        "options": [
            "visible narrowing of the intercostal spaces",
            "attenuation of respiratory noises during auscultation",
            "tympanitis in the lower chest",
            "dry and wet wheezing during auscultation",
            "bronchial respiration during auscultation"
        ]
    },
    {
        "numb": 52,
        "question": "At what stage of ectopic pregnancy does internal bleeding occur?",
        "answer": "8 weeks",
        "options": [
            "2 weeks",
            "6 weeks",
            "5 weeks",
            "8 weeks",
            "3 weeks"
        ]
    },
    {
        "numb": 53,
        "question": "The place of compression of the subclavian artery is located in the area of:",
        "answer": "groin",
        "options": [
            "chest",
            "groin",
            "abdomen",
            "armpit",
            "neck"
        ]
    },
    {
        "numb": 54,
        "question": "The methods of temporary bleeding arrest include:",
        "answer": "wound tamponade",
        "options": [
            "wound tamponade",
            "diathermocoagulation",
            "vessel ligation",
            "arterial vessel embolization",
            "hemostatic sutures on the wound"
        ]
    },
    {
        "numb": 55,
        "question": "In case of bleeding, the axillary artery should be pressed against:",
        "answer": "the inner surface of the humerus",
        "options": [
            "the 1st rib outside of the attachment point of the sternoclavicular-nipple muscle to the collarbone",
            "the head of the humerus",
            "the inner surface of the humerus",
            "the transverse process of the 6th cervical vertebra",
            "the horizontal branch of the pubic bone"
        ]
    },
    {
        "numb": 56,
        "question": "The biological methods of stopping bleeding include:",
        "answer": "tamponade of a wound with an omentum",
        "options": [
            "vascular suture to an arterial vessel",
            "clamping a vessel",
            "applying a tourniquet to a limb",
            "tamponade of a wound with an omentum",
            "ligation of a vessel in a wound"
        ]
    },
    {
        "numb": 57,
        "question": "Staff donors are donors who:",
        "answer": "systematically participate in donation for several years",
        "options": [
            "have a rare blood type",
            "immunized donors with a certain antigen",
            "donate blood when there is a need for an institution",
            "donate blood regularly",
            "systematically participate in donation for several years"
        ]
    },
    {
        "numb": 58,
        "question": "Blood preparations include:",
        "answer": "prothrombin complex",
        "options": [
            "leuco mass",
            "thrombo mass",
            "plasma",
            "erythro mass",
            "prothrombin complex"
        ]
    },
    {
        "numb": 59,
        "question": "The regulators of the water-salt balance include:",
        "answer": "Ringer's solution",
        "options": [
            "lipofundin",
            "hemodesis",
            "gelatinol",
            "rheopolyglucin",
            "Ringer's solution"
        ]
    },
    {
        "numb": 60,
        "question": "Hemotransfusion reactions include:",
        "answer": "fever",
        "options": [
            "septic shock",
            "thromboembolism",
            "fever",
            "homologous blood syndrome",
            "hemotransfusion shock"
        ]
    },
    {
        "numb": 61,
        "question": "Hemotransfusion complications of a technical nature include:",
        "answer": "acute dilation of the heart",
        "options": [
            "citrate intoxication",
            "massive transfusion syndrome",
            "acute dilation of the heart",
            "allergic",
            "antigenic"
        ]
    },
    {
        "numb": 62,
        "question": "Hemodilution is:",
        "answer": "a method of blood dilution",
        "options": [
            "a method of direct blood transfusion",
            "a method of exchange blood transfusion",
            "autohemotransfusion",
            "autoplasmotransfusion",
            "a method of blood dilution"
        ]
    },
    {
        "numb": 63,
        "question": "What is the name of the antigen-antibody reaction in determining the blood Rh-factor?",
        "answer": "isoagglutination",
        "options": [
            "isoagglutination",
            "heteroagglutination",
            "pseuodagglutination",
            "hemagglutination",
            "panagglutination"
        ]
    },
    {
        "numb": 64,
        "question": "What is the necessary temperature regime (in degrees Celsius) when determining the blood type according to the ABO system?",
        "answer": "15-25",
        "options": [
            "(12-14)",
            "(5-8)",
            "46-48",
            "26-38",
            "15-25"
        ]
    },
    {
        "numb": 65,
        "question": "When determining the blood type, the drop of blood should be less a drop of coliclone:",
        "answer": "five to ten times",
        "options": [
            "ten times",
            "three times",
            "five to ten times",
            "five times",
            "twenty times"
        ]
    },
    {
        "numb": 66,
        "question": "Blood sampling to determine compatibility according to the ABO system and the Rh factor is performed from:",
        "answer": "veins in a dry test tube",
        "options": [
            "finger on a slide with the addition of sodium citrate",
            "a finger on a slide",
            "veins in melanger",
            "veins in a test tube with isotonic sodium chloride solution",
            "veins in a dry test tube"
        ]
    },
    {
        "numb": 67,
        "question": "When preparing patients for hemotransfusion, it is necessary to:",
        "answer": "do all of the above",
        "options": [
            "collect a blood transfusion history",
            "do all of the above",
            "do a general blood test",
            "do a general urine test",
            "collect an obstetric history"
        ]
    },
    {
        "numb": 68,
        "question": "What do they do with a bottle that has been released after transfusion of blood and its components?",
        "answer": "leave 10-15 ml of blood in a bottle and store for 2 days",
        "options": [
            "leave 10-15 ml of blood in a bottle and store until the patient is discharged",
            "they throw it away",
            "leave 10-15 ml of blood in a bottle and store for 30 days",
            "leave 10-15 ml of blood in a bottle and store for 2 days",
            "they wash it and take it to the laboratory"
        ]
    },
    {
        "numb": 69,
        "question": "Drugs that promote blood clotting are called:",
        "answer": "coagulants",
        "options": [
            "none of the above",
            "anticoagulants",
            "coagulants",
            "oxidants",
            "antioxidants"
        ]
    },
    {
        "numb": 70,
        "question": "Blood enzyme elements that promote blood clotting:",
        "answer": "platelets",
        "options": [
            "white blood cells",
            "platelets",
            "red blood cells",
            "globulins",
            "basophils"
        ]
    },
    {
        "numb": 71,
        "question": "Direct-acting hemostatics include:",
        "answer": "calcium chloride",
        "options": [
            "heparin",
            "calcium chloride",
            "nicoumalone",
            "tinzaparin sodium",
            "vikasol"
        ]
    },
    {
        "numb": 72,
        "question": "Non-direct action hemostatics include:",
        "answer": "all listed",
        "options": [
            "vikasol",
            "vitamin K",
            "phytomenadione",
            "all listed",
            "rutin"
        ]
    },
    {
        "numb": 73,
        "question": "Anticoagulants of non-direct action include:",
        "answer": "dicumarin",
        "options": [
            "trypsin",
            "vikasol",
            "dicumarin",
            "heparin",
            "fibrinolysin"
        ]
    },
    {
        "numb": 74,
        "question": "In what concentration is thrombin administered intravenously?",
        "answer": "10%",
        "options": [
            "10%",
            "40%",
            "50%",
            "30%",
            "20%"
        ]
    },
    {
        "numb": 75,
        "question": "The temperature regime for determining the blood type:",
        "answer": "15-25C",
        "options": [
            "5-8C",
            "12-14C",
            "25-30C",
            "15-25C",
            "10-12C"
        ]
    },
    {
        "numb": 76,
        "question": "The result of the agglutination reaction in determining the blood group according to standard serums is determined by:",
        "answer": "3 min",
        "options": [
            "10 min",
            "1 min",
            "2 min",
            "5 min",
            "3 min"
        ]
    },
    {
        "numb": 77,
        "question": "To stabilize donated blood, use:",
        "answer": "2.6% sodium citrate solution",
        "options": [
            "2.6% sodium citrate solution",
            "isotonic solution",
            "albumin",
            "glucose",
            "glycerin"
        ]
    },
    {
        "numb": 78,
        "question": "During blood transfusion, the patient's condition worsened, the pain appeared in the lower back and behind the sternum. This indicates:",
        "answer": "blood transfusion shock",
        "options": [
            "hemorrhagic shock",
            "blood transfusion shock",
            "citrate shock",
            "pyrogenic reaction",
            "allergic reaction"
        ]
    },
    {
        "numb": 79,
        "question": "Features of intravenous administration of protein hydralizates:",
        "answer": "no biological sample is required",
        "options": [
            "they are injected droply 20-30 per minute",
            "they are injected in a jet",
            "a biological sample is required",
            "they are injected droply 50-60 per minute",
            "no biological sample is required"
        ]
    },
    {
        "numb": 80,
        "question": "In case of hemorrhagic shock, first of all, the patient should be transfused:",
        "answer": "platelet mass",
        "options": [
            "plasma",
            "polyglucine",
            "erythrocyte mass",
            "whole blood",
            "platelet mass"
        ]
    },
    {
        "numb": 81,
        "question": "Operations related to bloodless are:",
        "answer": "dislocation reduction, bone fragments reposition",
        "options": [
            "laparotomy, thoracotomy",
            "dislocation reduction, bone fragments reposition",
            "lymph node biopsy",
            "trial laparotomy",
            "endoscopic cholecystectomy"
        ]
    },
    {
        "numb": 82,
        "question": "An operational technique is:",
        "answer": "removal of the affected organ",
        "options": [
            "Filonchikov-Grossich skin treatment",
            "operative reception",
            "removal of the affected organ",
            "skin dissection",
            "suturing the skin"
        ]
    },
    {
        "numb": 83,
        "question": "Endoscopic surgeries are:",
        "answer": "operations performed using endoscopic devices",
        "options": [
            "operations performed under X-ray control",
            "operations performed with a microscope",
            "operations after which endoscopic control is required",
            "operations performed laparoscopically",
            "operations performed using endoscopic devices"
        ]
    },
    {
        "numb": 84,
        "question": "Endovascular surgery is:",
        "answer": "intravascular operations performed under X-ray control",
        "options": [
            "operations performed using endoscopic devices",
            "operations performed with a microscope",
            "operations after which endoscopic control is required",
            "intravascular operations performed under X-ray control",
            "operations performed on the main vessels"
        ]
    },
    {
        "numb": 85,
        "question": "Requirements for surgical access are:",
        "answer": "minimal injjuries",
        "options": [
            "the distance from the surface of the body to the exposed organ should be minimal",
            "access should provide a wide exposure of the pathological focus",
            "large injuries",
            "minimal injjuries",
            "the length of the skin incision should not exceed 20 cm"
        ]
    },
    {
        "numb": 86,
        "question": "Diagnostic operations include:",
        "answer": "lymph node biopsy",
        "options": [
            "correction of dislocation of the shoulder",
            "appendectomy",
            "autopsy of the panaritium",
            "lymph node biopsy",
            "herniation"
        ]
    },
    {
        "numb": 87,
        "question": "Operations are distinguished by urgency:",
        "answer": "emergency, urgent, planned",
        "options": [
            "radical, planned, palliative",
            "planned, emergency, multi-stage",
            "diagnostic, non-urgent, one-stage",
            "emergency, urgent, palliative",
            "emergency, urgent, planned"
        ]
    },
    {
        "numb": 88,
        "question": "Operational access includes the following stages of the operation:",
        "answer": "skin dissection",
        "options": [
            "removal of the affected organ",
            "suturing the skin",
            "Filonchikov-Grossich skin treatment",
            "surgery, stopping bleeding",
            "skin dissection"
        ]
    },
    {
        "numb": 89,
        "question": "Emergency surgery is indicated when:",
        "answer": "perforated stomach ulcer",
        "options": [
            "perforated stomach ulcer",
            "varicose veins of the lower extremities",
            "trophic ulcer",
            "liver cancer",
            "lipoma"
        ]
    },
    {
        "numb": 90,
        "question": "Prevention of thromboembolic complications after surgery includes:",
        "answer": "all of the above",
        "options": [
            "all of the above",
            "getting up early",
            "the use of anticoagulants",
            "the use of disaggregants",
            "bandaging of the lower extremities with an elastic bandage"
        ]
    },
    {
        "numb": 91,
        "question": "Additional complaints of the patient are caused by:",
        "answer": "concomitant pathology",
        "options": [
            "concomitant pathology",
            "complications of the underlying disease",
            "underlying disease",
            "increased pain syndrome",
            "change in the patient's state of health"
        ]
    },
    {
        "numb": 92,
        "question": "The patient's complaint of pain in dislocation of the shoulder is:",
        "answer": "main",
        "options": [
            "main",
            "basic",
            "primary",
            "additional",
            "secondary"
        ]
    },
    {
        "numb": 93,
        "question": "The examination of the patient begins with:",
        "answer": "clarification of complaints",
        "options": [
            "clarification of the history of the disease",
            "clarification of complaints",
            "life history",
            "objective research",
            "an external examination"
        ]
    },
    {
        "numb": 94,
        "question": "Data from previous additional research methods  are described in the medical history section:",
        "answer": "the history of the development of the disease",
        "options": [
            "results of additional research methods",
            "general objective research",
            "the history of the development of the disease",
            "general information about the patient",
            "life history"
        ]
    },
    {
        "numb": 95,
        "question": "An increase in body temperature in acute appendicitis is complaint:",
        "answer": "secondary",
        "options": [
            "general",
            "basic",
            "additional",
            "main",
            "secondary"
        ]
    },
    {
        "numb": 96,
        "question": "The allergic history is reflected in the section of medical history:",
        "answer": "life history",
        "options": [
            "history of the disease",
            "life history",
            "additional examination",
            "complaints",
            "general objective examination"
        ]
    },
    {
        "numb": 97,
        "question": "How should the insurance history be described in the medical history?",
        "answer": "indicate the place of work and the presence (absence) of the disability sheet on hand",
        "options": [
            "indicate the total insurance premium of the patient for the entire time",
            "specify the annual insurance deductions from wages",
            "specify the amount of the maximum insurance payment",
            "list the insurance companies in which the patient was insured",
            "indicate the place of work and the presence (absence) of the disability sheet on hand"
        ]
    },
    {
        "numb": 98,
        "question": "Description of the local status of a patient with acute appendicitis implies:",
        "answer": "a detailed description of the results of an objective examination of the entire digestive system",
        "options": [
            "a detailed description of the patient's complaints",
            "a detailed description of the results of additional research",
            "a description of the specific symptoms of acute appendicits",
            "a detailed description of the results of an objective examination of the entire digestive system",
            "a description of the development of the disease in chronological order"
        ]
    },
    {
        "numb": 99,
        "question": "The clinical diagnosis in emergency patients should be formulated:",
        "answer": "during the first day",
        "options": [
            "immediately upon admission",
            "within 12 hours",
            "during the first day",
            "within the next 6 hours",
            "after 3 days"
        ]
    },
    {
        "numb": 100,
        "question": "Information about the reason for the patient's current hospitalization described in the medical history section:",
        "answer": "history of the development of the present disease",
        "options": [
            "history of the development of the present disease",
            "results of additional examination",
            "complaints",
            "life history",
            "local status"
        ]
    },
    {
        "numb": 101,
        "question": "Who was the founder of the creation of the phagocytic theory of immunity?",
        "answer": "Mechnikov I.I.",
        "options": [
            "Mechnikov I.I.",
            "Koch R.",
            "Pasteur L.",
            "Ibn Sina",
            "Lister D."
        ]
    },
    {
        "numb": 102,
        "question": "Who firstly introduced the principle of \"treating safely, quickly and pleasantly?",
        "answer": "Asclepiades",
        "options": [
            "Asclepiades",
            "Hippocrates",
            "Avicenna",
            "Garvey",
            "Galen"
        ]
    },
    {
        "numb": 103,
        "question": "Who was the founnder of antiseptics?",
        "answer": "D. Lister",
        "options": [
            "I. Zemmelweis",
            "N.I.Pirogov",
            "Paracelsus",
            "Hippocrates",
            "D. Lister"
        ]
    },
    {
        "numb": 104,
        "question": "Who was the founder of asepsis?",
        "answer": "Ambru az Pare",
        "options": [
            "Ambru az Pare",
            "Paracelsus",
            "E. Bergman",
            "J. Deni",
            "Hippocrates"
        ]
    },
    {
        "numb": 105,
        "question": "Choose which of the operations was the most ancient in the history of mankind?",
        "answer": "cesarean section",
        "options": [
            "heart transplant",
            "cesarean section",
            "lobotomy",
            "amputation",
            "appendectomy"
        ]
    },
    {
        "numb": 106,
        "question": "How were called people who carried out mummification in Ancient Egypt?",
        "answer": "tarikhevts",
        "options": [
            "canopachia",
            "nurse",
            "surgeon",
            "the priests",
            "tarikhevts"
        ]
    },
    {
        "numb": 107,
        "question": "Choose which sources do not relate to the study of the history of healing in Ancient Greece:",
        "answer": "the works of Martial",
        "options": [
            "\"Prognostics\"",
            "the works of Martial",
            "\"Epidemics\"",
            "\"Odyssey\"",
            "the Hippocratic Collection"
        ]
    },
    {
        "numb": 108,
        "question": "Choose the work of Hippocrates, in which describes the causes of the disease primarily in the human environment:",
        "answer": "A treatise \"On air, water and places\"",
        "options": [
            "\"Odyssey\"",
            "\"Prognostics\"",
            "A treatise \"On air, water and places\"",
            "the works of Martial",
            "\"Epidemics\""
        ]
    },
    {
        "numb": 109,
        "question": "What is asepsis?",
        "answer": "a method of preventing wound infection by preliminary destruction of microbes",
        "options": [
            "a method of surgery",
            "a method of preventing wound infection by preliminary destruction of microbes",
            "a set of techniques for mechanical action",
            "a method of anesthesia",
            "thermal effects on animal organisms"
        ]
    },
    {
        "numb": 110,
        "question": "Which one is inccorect answer for the statement \"Asepsis is achieved by\"?",
        "answer": "treatment of the source of infection",
        "options": [
            "carrying out hygienic measures",
            "carrying out special sanitary organizational measures",
            "sterilization",
            "treatment of the source of infection",
            "disinfection"
        ]
    },
    {
        "numb": 111,
        "question": "All participants in the operation unit must be in:",
        "answer": "sterile clothes and a mask",
        "options": [
            "it does not matter",
            "sterile clothes",
            "a mask",
            "sterile clothes and a mask",
            "clean clothes"
        ]
    },
    {
        "numb": 112,
        "question": "Which mode is used to sterilize surgical underwear?",
        "answer": "132C - 2.0 atm - 20 min",
        "options": [
            "132C - 2.0 atm - 20 min",
            "180C - 60 min",
            "180C - 90 min",
            "120C - 1.1 atm - 45 min",
            "160C - 180 min"
        ]
    },
    {
        "numb": 113,
        "question": "Which mode is used to sterilize rubber items and plastics?",
        "answer": "120C - 1.1 atm - 45 min",
        "options": [
            "132C - 2.0 atm - 20 min",
            "180C - 60 min",
            "160C - 180 min",
            "120C - 1.1 atm - 45 min",
            "180C - 90 min"
        ]
    },
    {
        "numb": 114,
        "question": "What is the time of chemical sterilization of instruments in a 6% solution of hydrogen peroxide at room temperature?",
        "answer": "6 hours",
        "options": [
            "3 hours",
            "2 hours",
            "1 hour",
            "6 hours",
            "40 min"
        ]
    },
    {
        "numb": 115,
        "question": "The endogenous pathway of infection into the wound is",
        "answer": "lymphogenic",
        "options": [
            "lymphogenic",
            "contact",
            "airborne",
            "hemogenic",
            "air-dust"
        ]
    },
    {
        "numb": 116,
        "question": "How often are air sowings produced in the operation unit?",
        "answer": "1 time per month",
        "options": [
            "4 times a month",
            "1 time in 3 months",
            "1 time per week",
            "1 time per month",
            "1 time in 2 months"
        ]
    },
    {
        "numb": 117,
        "question": "Which sterilization mode should be for the endoscopic equipment?",
        "answer": "in a 6% solution of hydrogen peroxide 360 min",
        "options": [
            "in a 3% chloramine solution for 30 min",
            "in a 10% solution of hydrogen peroxide for 60 min",
            "in a 6% solution of hydrogen peroxide 360 min",
            "in a 6% solution of hydrogen peroxide 180 min",
            "in 70% alcohol for 10 min"
        ]
    },
    {
        "numb": 118,
        "question": "What is the duration of disinfection by boiling in distilled water?",
        "answer": "30 min",
        "options": [
            "45 min",
            "30 min",
            "60 min",
            "25 min",
            "15 min"
        ]
    },
    {
        "numb": 119,
        "question": "The duration of hand treatment with 0,5% ammonia solution in each of the 2 basins according to the Spasokukotsky-Kochergin method is:",
        "answer": "3 min",
        "options": [
            "2 min",
            "10 min",
            "4 min",
            "5 min",
            "3 min"
        ]
    },
    {
        "numb": 120,
        "question": "How many minutes are the tools immersed in a cleaning solution during pre-sterilization treatment?",
        "answer": "15 min",
        "options": [
            "45 min",
            "60 min",
            "15 min",
            "10 min",
            "5 min"
        ]
    },
    {
        "numb": 121,
        "question": "The concept of \"antiseptics\" was introduced into medicine by:",
        "answer": "J. Pringle",
        "options": [
            "N.I.Pirogov",
            "I.V. Buyalsky",
            "K. Schimmelbush",
            "J. Pringle",
            "E. Bergmann"
        ]
    },
    {
        "numb": 122,
        "question": "The drainage function of the bandage was studied in detail by:",
        "answer": "M.Ya. Preobrazhensky",
        "options": [
            "R. Trendelenburg",
            "V. Tsege-Manteuffel",
            "M.V. Sklifosovsky",
            "K. Schimmelbusch",
            "M.Ya. Preobrazhensky"
        ]
    },
    {
        "numb": 123,
        "question": "The primary surgical treatment of the wound includes:",
        "answer": "dissection of the wound, removal of foreign bodies, excision of the edges and bottom, hemostasis, drainage",
        "options": [
            "only suturing the wound",
            "cleansing of the wound surface and evacuation of exudate",
            "opening and puncture of ulcers",
            "excision of non-viable tissues only",
            "dissection of the wound, removal of foreign bodies, excision of the edges and bottom, hemostasis, drainage"
        ]
    },
    {
        "numb": 124,
        "question": "The antiseptic effect of proteolytic enzyme preparations on the wound is based on the process:",
        "answer": "lysis of necrotic tissues",
        "options": [
            "stimulation of repair",
            "enhancement of exudation",
            "improvement of rheological properties of blood",
            "stimulation of local immunity",
            "lysis of necrotic tissues"
        ]
    },
    {
        "numb": 125,
        "question": "What kind of solution is used for cold sterilization of dental mirrors?",
        "answer": "6% hydrogen peroxide solution",
        "options": [
            "75% methyl alcohol",
            "6% hydrogen peroxide solution",
            "1% hydrogen peroxide solution",
            "0.5% chloramine solution",
            "45% ethyl alcohol"
        ]
    },
    {
        "numb": 126,
        "question": "The complete destruction of microbes, spores and viruses is called:",
        "answer": "sterilization",
        "options": [
            "deratization",
            "disinsection",
            "sterilization",
            "disinfection",
            "antiseptics"
        ]
    },
    {
        "numb": 127,
        "question": "What does the pre-sterilization treatment provide?",
        "answer": "removal of protein, fatty impurities and medications from the surface",
        "options": [
            "removal of fatty impurities from the surface",
            "removal of protein from the surface",
            "removal of protein, fatty impurities and medications from the surface",
            "removal of spores from the surface",
            "removal of vegetative forms of microorganisms from the surface"
        ]
    },
    {
        "numb": 128,
        "question": "Instruments are sterilized in a glassperlene sterilizer with:",
        "answer": "heated sterile beads",
        "options": [
            "irradiation",
            "chemical indicators",
            "hot steam",
            "dry heat",
            "heated sterile beads"
        ]
    },
    {
        "numb": 129,
        "question": "Which materials are processed in a glassperlene sterilizer?",
        "answer": "endodontic tools",
        "options": [
            "tips",
            "endodontic tools",
            "trays",
            "cotton swabs",
            "suture material"
        ]
    },
    {
        "numb": 130,
        "question": "Duration pre-sterilization treatment, the tools are immersed in a cleaning solution for:",
        "answer": "15 min",
        "options": [
            "15 min",
            "45 min",
            "30 min",
            "60 min",
            "5 min"
        ]
    },
    {
        "numb": 131,
        "question": "When carrying out chemical disinfection, the disinfectant must cover the intruments over:",
        "answer": "at least 1 cm",
        "options": [
            "0.5 cm",
            "the instruments must be completely in solution",
            "at the top",
            "at least 2 cm",
            "at least 1 cm"
        ]
    },
    {
        "numb": 132,
        "question": "The current control of steam sterilization is carried out using:",
        "answer": "control and measuring devices and chemical indicators",
        "options": [
            "physical indicators",
            "biological indicators",
            "vacuum-test",
            "sowing indicator for sterility of samples of sterilized items",
            "control and measuring devices and chemical indicators"
        ]
    },
    {
        "numb": 133,
        "question": "Any bandage begins with the application of:",
        "answer": "circular bandage",
        "options": [
            "creeping bandage",
            "8-shaped bandage",
            "spiral bandage",
            "cruciform bandage",
            "circular bandage"
        ]
    },
    {
        "numb": 134,
        "question": "What type of bandage should be used for the wound in the parietal area?",
        "answer": "sling bandage",
        "options": [
            "T-shaped bandage",
            "sling bandage",
            "spiral bandage",
            "turtle bandage",
            "cruciform bandage"
        ]
    },
    {
        "numb": 135,
        "question": "The converging turtle bandage on the elbow joint begins with the application:",
        "answer": "of the circular bandage below the joint",
        "options": [
            "of the circular bandage through the joint",
            "of the cruciform bandage on the joint area",
            "of the spiral bandage on the forearm",
            "of the circular bandage below the joint",
            "of the circular bandage above the joint"
        ]
    },
    {
        "numb": 136,
        "question": "When applying a circular bandage:",
        "answer": "each subsequent round completely overlaps the previous one",
        "options": [
            "each subsequent round overlaps the previous one by 2/3",
            "the bandage rounds go in a spiral manner without touching each other",
            "the rounds of the bandage go in an oblique direction",
            "the bandage rounds intersect with each other",
            "each subsequent round completely overlaps the previous one"
        ]
    },
    {
        "numb": 137,
        "question": "The sealing of the chest wound is created by a bandage:",
        "answer": "occlusive",
        "options": [
            "occlusive",
            "cotton swab bandage",
            "gypsum",
            "Kerchief",
            "glue"
        ]
    },
    {
        "numb": 138,
        "question": "A special tire for transport immobilization of the collarbone is a tire:",
        "answer": "Kuzminsky",
        "options": [
            "Bogdanova",
            "Dieterich",
            "Kramer",
            "Elansky",
            "Kuzminsky"
        ]
    },
    {
        "numb": 139,
        "question": "In case of the fracture of the scapula, the immobilization is enough with:",
        "answer": "Kerchief bandage",
        "options": [
            "Elansky's tire",
            "Kerchief bandage",
            "Dieterich's tire",
            "laying on the shield",
            "sticky patch"
        ]
    },
    {
        "numb": 140,
        "question": "If one eye is damaged, it is superimposed:",
        "answer": "monocular bandage",
        "options": [
            "\"bridle\" bandage",
            "binocular bandage",
            "monocular bandage",
            "turtle bandage",
            "\"cap\" bandage"
        ]
    },
    {
        "numb": 141,
        "question": "If there is damage in the area of the shoulder joint, a bandage is applied:",
        "answer": "spikelike",
        "options": [
            "Dezo",
            "spikelike",
            "spiral bandage",
            "turtle",
            "8-shaped"
        ]
    },
    {
        "numb": 142,
        "question": "In case of extensive chest injuries, a bandage is applied:",
        "answer": "spiral",
        "options": [
            "cruciform",
            "Dezo",
            "spike like",
            "spiral",
            "occlusal"
        ]
    },
    {
        "numb": 143,
        "question": "For hanging the upper limb most often is used a bandage:",
        "answer": "Kerchief",
        "options": [
            "spike",
            "spiral",
            "T-shaped",
            "returning",
            "Kerchief"
        ]
    },
    {
        "numb": 144,
        "question": "After the dislocation of the shoulder is corrected, you can apply:",
        "answer": "Velpo bandage",
        "options": [
            "turtle bandage",
            "Dezo bandage",
            "8-shaped bandage",
            "spike-shaped bandage on the shoulder joint area",
            "Velpo bandage"
        ]
    },
    {
        "numb": 145,
        "question": "If the blood has a bright red color and beats from the wound in a pulsating stream, then the bleeding is called:",
        "answer": "arterial",
        "options": [
            "capillary",
            "venous",
            "parenchymal",
            "abdominal",
            "arterial"
        ]
    },
    {
        "numb": 146,
        "question": "What is the cause of bleeding?",
        "answer": "vascular injury, neutrophic processes",
        "options": [
            "sepsis",
            "scurvy",
            "damage to the vascular wall as a result of injury",
            "violation of the permeability of the vascular wall",
            "vascular injury, neutrophic processes"
        ]
    },
    {
        "numb": 147,
        "question": "What are the MAIN groups of all methods of stopping bleeding?",
        "answer": "temporary, final",
        "options": [
            "pre-medical, medical",
            "reliable, unreliable",
            "temporary, final",
            "physical, chemical",
            "mechanical, biological"
        ]
    },
    {
        "numb": 148,
        "question": "Hematuria is blood in:",
        "answer": "urine",
        "options": [
            "vomit",
            "inside the abdominal cavity",
            "from nose",
            "from lungs",
            "urine"
        ]
    },
    {
        "numb": 149,
        "question": "What are the common symptoms of bleeding?",
        "answer": "pallor of the skin",
        "options": [
            "leukopenia",
            "high body temperature",
            "rare pulse",
            "pallor of the skin",
            "increased blood pressure"
        ]
    },
    {
        "numb": 150,
        "question": "What Is the cause of late secondary bleeding?",
        "answer": "purulent melting of a blood clot",
        "options": [
            "ligature slipping from a vessel",
            "thrombus ejection from a blood vessel",
            "vascular spasm ",
            "vascular paresis",
            "purulent melting of a blood clot"
        ]
    },
    {
        "numb": 151,
        "question": "What is the timing of late secondary bleeding?",
        "answer": "later than 7 days",
        "options": [
            "1-3 days",
            "no earlier than 14 days",
            "3-5 days",
            "5-7 days",
            "later than 7 days"
        ]
    },
    {
        "numb": 152,
        "question": "What kind of bleeding causes blood to be excreted with vomit?",
        "answer": "gastric",
        "options": [
            "arterial",
            "venous",
            "urinary",
            "gastric",
            "pulmonary"
        ]
    },
    {
        "numb": 153,
        "question": "What is the purpose of the first aid for bleeding at the accident?",
        "answer": "temporary blood stop",
        "options": [
            "psychological support of the victim",
            "temporary blood stop",
            "surgery",
            "ambulance call",
            "anesthesia"
        ]
    },
    {
        "numb": 154,
        "question": "The maximum duration of applying the tourniquet is:",
        "answer": "90 min",
        "options": [
            "30 min",
            "60 min",
            "120 min",
            "180 min",
            "90 min"
        ]
    },
    {
        "numb": 155,
        "question": "The physical methods of stopping bleeding include:",
        "answer": "cryodestruction",
        "options": [
            "vessel bypass",
            "cryodestruction",
            "laser irradiation of blood",
            "vessel ligation throughout",
            "ultrasound scanning of the spleen"
        ]
    },
    {
        "numb": 156,
        "question": "Thrombin as a mean to stop bleeding is used:",
        "answer": "locally",
        "options": [
            "for embolization of vessel",
            "intraarterially",
            "locally",
            "intravenously",
            "intraperitoneally"
        ]
    },
    {
        "numb": 157,
        "question": "The donors of reserve are donors who:",
        "answer": "donate blood when there is a need for an institution",
        "options": [
            "systematically involved in donation for several years",
            "have a rare blood type",
            "immunized with a certain antigen donors",
            "donate blood regularly",
            "donate blood when there is a need for an institution"
        ]
    },
    {
        "numb": 158,
        "question": "The storage period of blood when using glugicir is:",
        "answer": "21 days",
        "options": [
            "35 days",
            "3 days",
            "5 days",
            "8-10 days",
            "21 days"
        ]
    },
    {
        "numb": 159,
        "question": "Antishock drugs include:",
        "answer": "Ringer's solution",
        "options": [
            "hemodesis",
            "polyglucin",
            "casein hydrolysate",
            "polyamine",
            "Ringer's solution"
        ]
    },
    {
        "numb": 160,
        "question": "Detoxification drugs include:",
        "answer": "polydez",
        "options": [
            "aminosol",
            "Ringer's solution",
            "voluven",
            "polyglucin",
            "polydez"
        ]
    },
    {
        "numb": 161,
        "question": "What is ablood type?",
        "answer": "a set of erythrocyte antigens",
        "options": [
            "a set of immune antibodies",
            "whey proteins",
            "a set of acquired antibodies",
            "a set of erythrocyte antigens",
            "a set of leukocyte antigens"
        ]
    },
    {
        "numb": 162,
        "question": "What is the significance of antigens and antibodies of the ABO system in blood transfusion practice?",
        "answer": "determine the compatibility of transfused blood",
        "options": [
            "characterize the state of the body",
            "they are not of fundamental importance",
            "allow you to determine the required volume of blood transfusion",
            "determine the compatibility of transfused blood",
            "all of the above is true"
        ]
    },
    {
        "numb": 163,
        "question": "On the first day after a properly performed hemotransfusion, the following complication occurs more often:",
        "answer": "pyrogenic reactions",
        "options": [
            "acute renal failure",
            "thromboembolism",
            "acute dilation of the heart",
            "pyrogenic reactions",
            "acute cerebrovascular"
        ]
    },
    {
        "numb": 164,
        "question": "The blood type during the transfusion:",
        "answer": "checked before each blood transfusion",
        "options": [
            "checked before the first blood transfusion",
            "it is not checked, there is enough data in the passport",
            "it is not checked, there is enough anamnesis data",
            "it is not checked, there is enough data in the medical history",
            "checked before each blood transfusion"
        ]
    },
    {
        "numb": 165,
        "question": "Hemotransfusion and obstetric anamnesis before the blood transfusion can:",
        "answer": "prevent possible hemotransfusion complications",
        "options": [
            "prevent possible hemotransfusion complications",
            "identify hereditary diseases",
            "determine the Rh affiliation and blood type of the patient",
            "urgently pick up onated blood",
            "make a medical history"
        ]
    },
    {
        "numb": 166,
        "question": "How long can blood taken to determine the Rh factor be stored at a temperature of +4, +8C?",
        "answer": "2-3 days",
        "options": [
            "5-6 days",
            "10-12 hours",
            "2-3 hours",
            "2-3 days",
            "up to 1 day"
        ]
    },
    {
        "numb": 167,
        "question": "How long after hemotransfusion is it necessary to carry out dynamic monitoring of the patient?",
        "answer": "3 hours",
        "options": [
            "1 hour",
            "3 hours",
            "the patient does not need to be monitored",
            "4 hrs",
            "2hrs"
        ]
    },
    {
        "numb": 168,
        "question": "What complications can occur on the first day after technically correct hemotransfusion?",
        "answer": "pyrogenic reactions",
        "options": [
            "thromboembolism",
            "acute renal failure",
            "acute enlargement of the heart",
            "acute cerebrovascular accident",
            "pyrogenic reactions"
        ]
    },
    {
        "numb": 169,
        "question": "What concentration is medical gelatin administered intravenously?",
        "answer": "10%",
        "options": [
            "50%",
            "10%",
            "20%",
            "30%",
            "40%"
        ]
    },
    {
        "numb": 170,
        "question": "At what concentration is thrombin administered intravenously?",
        "answer": "intravenously is not administered",
        "options": [
            "0.25%",
            "1%",
            "10%",
            "intravenously is not administered",
            "5%"
        ]
    },
    {
        "numb": 171,
        "question": "Which drug (anticoagulant) binds calcium ions and forms difficult to dissociate salts?",
        "answer": "sodium citrate",
        "options": [
            "vitamin K",
            "sodium citrate",
            "phenylin",
            "sinkumar",
            "calcium chloride"
        ]
    },
    {
        "numb": 172,
        "question": "How long does heaprin take effect after injection?",
        "answer": "immediately after injection",
        "options": [
            "after 5-6 hours",
            "after 1-2 hours",
            "immediately after injection",
            "after 3-4 hours",
            "after 8 hours"
        ]
    },
    {
        "numb": 173,
        "question": "After what time does dicumarin begin to act after injection?",
        "answer": "after 3-5 days",
        "options": [
            "after 3-4 hours",
            "after 3-5 days",
            "after 8 hours",
            "after 1-2 days",
            "after 5-6 hours"
        ]
    },
    {
        "numb": 174,
        "question": "What is the duration of action of heparin?",
        "answer": "2-6 hours",
        "options": [
            "10-24 hours",
            "2-6 hours",
            "2-3 days",
            "7-10 hours",
            "10-15 minutes"
        ]
    },
    {
        "numb": 175,
        "question": "Blood in (III) groups can be injected to individuals:",
        "answer": "with blood groups II and III",
        "options": [
            "with blood groups II and III",
            "only with blood type III",
            "only with blood groups III and IV",
            "with any blood type",
            "only with blood type II"
        ]
    },
    {
        "numb": 176,
        "question": "The group of hemodynamic blood substitutes includes:",
        "answer": "polydesis",
        "options": [
            "albumin",
            "polydesis",
            "globulin",
            "polyglucine",
            "protein"
        ]
    },
    {
        "numb": 177,
        "question": "To conduct a biological test, enter:",
        "answer": "three times 25 ml of blood",
        "options": [
            "two times 10 ml of blood with an interval of 3 minutes, watching the patient",
            "three times 25 ml of blood",
            "25 ml of blood once and monitor the patient's condition for 5 minutes",
            "three times 10 ml of blood with an interval of 3 minutes, watching the patient",
            "25 ml of blood, monitor the patient's condition for 5 minutes"
        ]
    },
    {
        "numb": 178,
        "question": "After the blood transfusion, the nurse monitors:",
        "answer": "pulse, blood pressure, diuresis and temperature",
        "options": [
            "pulse, blood pressure, diuresis and temperature",
            "pulse and temperature",
            "arterial blood pressure",
            "pulse and blood pressure",
            "diuresis and temperature"
        ]
    },
    {
        "numb": 179,
        "question": "The blood component with the most pronounced hemostatic effect is:",
        "answer": "erythrocyte suspension",
        "options": [
            "erythrocyte suspension",
            "erythrocyte mass",
            "leukocyte mass",
            "platelet mass",
            "plasma"
        ]
    },
    {
        "numb": 180,
        "question": "Donated blood is stored in the refrigerator at a temperature of:",
        "answer": "4-6C",
        "options": [
            "4-6C",
            "7-10C",
            "(-5C)",
            "(-2C)",
            "0-2C"
        ]
    },
    {
        "numb": 181,
        "question": "Special operations include:",
        "answer": "endoscopic",
        "options": [
            "radical",
            "neurosurgical",
            "endoscopic",
            "simultaneous",
            "diagnostic "
        ]
    },
    {
        "numb": 182,
        "question": "A surgical operation is called:",
        "answer": "mechanical effects on organs and tissues performed for the purpose of treatment and diagnosis",
        "options": [
            "mechanical effects on organs and tissues performed for the purpose of treatment and diagnosis",
            "operations performed using endoscopic devices",
            "treatment of the patient by detecting a pathological lesion and removing it",
            "separation of the integumentary tissues to remove the pathological focus",
            "a set of measures providing for prompt access and prompt reception"
        ]
    },
    {
        "numb": 183,
        "question": "Emergency surgery is not performed:",
        "answer": "in case of malignant tumors",
        "options": [
            "with arterial bleeding",
            "in case of malignant tumors",
            "with compression of the brain",
            "with peritonitis",
            "with a strained pneumothorax"
        ]
    },
    {
        "numb": 184,
        "question": "One of the stages of the preoperative period is:",
        "answer": "diagnostic stage",
        "options": [
            "preventive stage",
            "preclinical stage",
            "rehabilitation stage",
            "diagnostic stage",
            "treatment stage"
        ]
    },
    {
        "numb": 185,
        "question": "Diseases requiring emergency surgery are:",
        "answer": "pinched inguinal hernia, perforated stomach ulcer",
        "options": [
            "stomach cancer, shoulder lipoma",
            "malignant brain tumor",
            "hydrothorax",
            "pinched inguinal hernia, perforated stomach ulcer",
            "furuncle"
        ]
    },
    {
        "numb": 186,
        "question": "Manipulation that can be attributed to therapeutic operations:",
        "answer": "correction of shoulder dislocation",
        "options": [
            "correction of shoulder dislocation",
            "trial laparotomy",
            "gastroscopy",
            "finger examination of the rectum",
            "laryngoscopy"
        ]
    },
    {
        "numb": 187,
        "question": "Manipulation that can be attributed to diagnostic operations:",
        "answer": "trial laparotomy",
        "options": [
            "trial laparotomy",
            "correction of shoulder dislocation",
            "appendectomy",
            "finger examination of the rectum",
            "laryngoscopy"
        ]
    },
    {
        "numb": 188,
        "question": "Surgery for vital signs is performed with:",
        "answer": "ongoing bleeding",
        "options": [
            "varicose veins of the lower extremities",
            "obliterating endarteritis",
            "a benign tumor",
            "malignant tumor",
            "ongoing bleeding"
        ]
    },
    {
        "numb": 189,
        "question": "Preoperative measures that reduce the risk of infection of the surgical wound are:",
        "answer": "all of the above",
        "options": [
            "cleansing of the gastrointestinal tract",
            "bath",
            "antibiotic therapy",
            "all of the above",
            "shaving the skin"
        ]
    },
    {
        "numb": 190,
        "question": "Specify an event aimed at PREVENTING pulmonary complications after surgery:",
        "answer": "breathing exercises",
        "options": [
            "gastric lavage",
            "breathing exercises",
            "cold on the stomach",
            "administration of iron preparations",
            "inhalation of nitrous oxide"
        ]
    },
    {
        "numb": 191,
        "question": "Information about previous illnesses and injuries is described in the medical history section:",
        "answer": "life history",
        "options": [
            "life history",
            "additional examination",
            "complaints",
            "history of the disease development",
            "examination of the place of the disease"
        ]
    },
    {
        "numb": 192,
        "question": "Information about heredity should be reflected in the medical history section:",
        "answer": "life history",
        "options": [
            "history of the development of the present disease",
            "life history",
            "local status",
            "complaints",
            "results of additional examination"
        ]
    },
    {
        "numb": 193,
        "question": "Physical examination methods do not include:",
        "answer": "endoscopy",
        "options": [
            "auscultation",
            "percussion",
            "palpation",
            "auscultoafriction",
            "endoscopy"
        ]
    },
    {
        "numb": 194,
        "question": "Additional examination methods include:",
        "answer": "CT scan",
        "options": [
            "palpation",
            "determination of the apical shock",
            "percussion",
            "CT scan",
            "auscultation"
        ]
    },
    {
        "numb": 195,
        "question": "An invasive examination method implies:",
        "answer": "a method in which the integrity of the integumentary tissues is violated and, accordingly, there is a possibility of complications in the form of bleeding, surgical infection, damage to internal organs",
        "options": [
            "a method in which the integrity of the integumentary tissues is violated and, accordingly, there is a possibility of complications in the form of bleeding, surgical infection, damage to internal organs",
            "a method that is safe for the patient",
            "the method associated with the risk of the doctor receiving any harm as a result of contact with the patient",
            "the method associated with the risk of infection of the doctor as a result of his contact with the patient",
            "a method that is safe for both the patient and the doctor"
        ]
    },
    {
        "numb": 196,
        "question": "The main difference between a surgical medical history and therapeutic in:",
        "answer": "the presence of the section \"local status\"",
        "options": [
            "setting the time of the onset of the disease to the minute",
            "a shorter and more specific statement of complaints",
            "a more detailed description of the musculoskeletal system",
            "mandatory entry into the medical history of information about previously performed surgical interventions to the patient",
            "the presence of the section \"local status\""
        ]
    },
    {
        "numb": 197,
        "question": "The sequence of examination of the patient os as follows:",
        "answer": "examination, palpation, percussion, auscultation",
        "options": [
            "",
            "examination, percussion, palpation, auscultation",
            "palpation, examination, percussion, auscultation",
            "examination, palpation, percussion, auscultation",
            "auscultation, percussion, palpation, examination"
        ]
    },
    {
        "numb": 198,
        "question": "Indications for surgery should be described in the section medical history:",
        "answer": "peroperative epicrisis",
        "options": [
            "local objective examination",
            "protocol of surgery",
            "peroperative epicrisis",
            "general objective examination",
            "complaints"
        ]
    },
    {
        "numb": 199,
        "question": "List the information to describe the operation in the medical history:",
        "answer": "description of the pathological changes detected during the operation, description of the course of the operation, its completion",
        "options": [
            "information about the amount of suture and other consumables used",
            "the degree of participation of each surgeon in the operation",
            "access used, cut length",
            "description of the removed macropreparation",
            "description of the pathological changes detected during the operation, description of the course of the operation, its completion"
        ]
    },
    {
        "numb": 200,
        "question": "Preparation of the intestine in the preoperative period provides for the appointment of:",
        "answer": "cleansing enemas",
        "options": [
            "probe power supply",
            "a slag-free diet",
            "cleansing enemas",
            "cold on the stomach",
            "expectorant drugs"
        ]
    }
];
