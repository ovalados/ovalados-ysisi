// ============================================================
//  OVALADOS — DATOS DE PORTADA
//  Edita solo este archivo cada fecha para actualizar el home.
// ============================================================

// ── FORMACIONES POR TORNEO ────────────────────────────────────
const PARTIDOS = {

  // ── TOP 14 ──────────────────────────────────────────────────
  top14: {

    // ── FECHA 1 ────────────────────────────────────────────────
    sic_belgrano_athletic: {
      local: {
        nombre: "SIC",
        jugadores: [
          "1. Calandra, F",
          "2. Rocha, L",
          "3. Chiappe, B",
          "4. Curuchaga, M",
          "5. Plorutti, C",
          "6. Panzarini, A",
          "7. De Oliveira, S",
          "8. Meyrelles, T",
          "9. Albanese, M",
          "10. Sascaro, A",
          "11. Fleming, B",
          "12. Piran, C",
          "13. Acosta, N",
          "14. Silva, T",
          "15. Capdevilla, F",
        ]
      },
      visitante: {
        nombre: "Belgrano Athletic",
        jugadores: [
          "1. Ferronato, Francisco",
          "2. Garcia Dragui, Lisandro",
          "3. Morales, Franco",
          "4. Tecca, Luciano",
          "5. Bloom, Mikael",
          "6. Vaccarino, Augusto",
          "7. Rebussone, Julian",
          "8. Vega, Franco",
          "9. Blacksley, Theo",
          "10. Aparicio, Juan",
          "11. Bernabe, Tobias",
          "12. Arana, Martin",
          "13. Etchepare, Tomas",
          "14. Arana, Pedro",
          "15. Lando, Juan",
        ]
      }
    },
    la_plata_atletico_del_rosario: {
      local: {
        nombre: "La Plata",
        jugadores: [
          "1. Del Cerro, Ariel",
          "2. Nunez, Joaquin",
          "3. Patat, Martin",
          "4. Ozog, Bautista",
          "5. Kucic, Ivan",
          "6. Pineda, Segundo",
          "7. Chiappani, Nicolas",
          "8. Bernasconi, Tomas",
          "9. De la Fuente, Manuel",
          "10. Di Lucca, Santino",
          "11. Addiechi, Pedro",
          "12. Paz Rizzoli, Francisco",
          "13. Cejas, Francisco",
          "14. Panigatti, Facundo",
          "15. Sica Manuele, Federico",
        ]
      },
      visitante: {
        nombre: "Atletico del Rosario",
        jugadores: [
          "1. Reyes, Ezequiel",
          "2. Rubio, Ramiro",
          "3. Montenegro, Bruno",
          "4. Caceres, Jose",
          "5. Capella, Octavio",
          "6. Sapino, Ignacio",
          "7. Echenique, Francisco",
          "8. Malanos, Lucas",
          "9. Nogues, Felipe",
          "10. Nogues, Manuel",
          "11. Casals, Nicolas",
          "12. Malanos, Tomas",
          "13. Musio, Ramiro",
          "14. Bertero, Juan Cruz",
          "15. Elias, Martin",
        ]
      }
    },
    hindu_los_tilos: {
      local: {
        nombre: "Hindu",
        jugadores: [
          "1. Diviesti, Franco",
          "2. Capurro, Agustin",
          "3. Leiva, Nicolas",
          "4. Scallan, Tomas",
          "5. Comolli, Juan",
          "6. Amaya, Santinl",
          "7. Bavaro, Lautaro",
          "8. Amaya, Nicolas",
          "9. Ezcurra, Felipe",
          "10. Ormaechea, Fermin",
          "11. Graglia, Facundo",
          "12. Fernandez Miranda, Ramon",
          "13. Rodriguez, Lisandro",
          "14. Amher, Tomas",
          "15. Aranoa, Juan",
        ]
      },
      visitante: {
        nombre: "Los Tilos",
        jugadores: [
          "1. Briozzo, Joaquin",
          "2. San Sebastian, Hipolito",
          "3. Laurin, Maximo",
          "4. Leiva, Martin",
          "5. Blaiotta Lago, Juan",
          "6. Torboli, Luciano",
          "7. Chiavassa, Eliseo",
          "8. Bares, Felipe",
          "9. Rodriguez Alcobendas, Pedro",
          "10. Tuculet, Joaquin",
          "11. Martinez, Gaston",
          "12. Fernandez Armendariz, Tomas",
          "13. Bassagaistegui, Tiago",
          "14. Guichon, Ignacio",
          "15. Santamarina, Bautista",
        ]
      }
    },
    champagnat_casi: {
      local: {
        nombre: "Champagnat",
        jugadores: [
          "1. Adissi, Alberto Natan",
          "2. Rodriguez Pascarella, Fernando",
          "3. Magaro, Marcos",
          "4. Escuti, Santiago",
          "5. Rivas Orozco, Tobias",
          "6. Alonso Boto, Matias Jesus",
          "7. Castelli Azpiroz, Francisco Migi",
          "8. Rojo, Nicolas",
          "9. Panelo, Juan Segundo",
          "10. Panelo, Santos",
          "11. Rodriguez Navarro, Bautista",
          "12. Bottazzi, Joaquin",
          "13. Cotter Daireaux, Tomas",
          "14. Rufino, Facundo",
          "15. Costaguta, Gonzalo",
        ]
      },
      visitante: {
        nombre: "CASI",
        jugadores: [
          "1. Scaiano, Facundo",
          "2. Torres Obeid, Juan Bautista",
          "3. Paolucci, Felix",
          "4. Torrado, Ignacio",
          "5. Mazzini, Leo",
          "6. Sartori, Eugenio",
          "7. Paolucci, Benito",
          "8. Rocca Rivarola, Benjamin",
          "9. Sanchez, Joaquin",
          "10. Hileman, Felipe",
          "11. Lescano, Francisco",
          "12. Solveyra, Jeronimo",
          "13. Belaga, Benjamin",
          "14. Tumbarello, Jeronimo",
          "15. Akemeier, Juan",
        ]
      }
    },
    alumni_cuba: {
      local: {
        nombre: "Alumni",
        jugadores: [
          "1. Bottoni, Juan Cruz",
          "2. Lamelas, Maximo",
          "3. Bottoni, Francisco",
          "4. Mora, Manuel",
          "5. Alduncin, Santiago",
          "6. Cubilla, Ignacio",
          "7. Anderson, Juan Patricio",
          "8. Neyra, Santiago",
          "9. Passerotti, Tomas",
          "10. Canzani, Bautista",
          "11. Vieyra, Aquiles",
          "12. Testoni, Filippo",
          "13. Sabato, Franco",
          "14. Fuentes, Ramon",
          "15. Del Franco, Matias",
        ]
      },
      visitante: {
        nombre: "CUBA",
        jugadores: [
          "1. Garoby, Francisco",
          "2. Anderlic, Tomas",
          "3. Iribarne, Esteban",
          "4. Loza, Marcos",
          "5. Uriarte, Santiago",
          "6. Campion, Lucas",
          "7. Pisani, Segundo",
          "8. Ortiz de Rozas, Benito",
          "9. Albani, Ignacio",
          "10. Mastroizzi, Valentin",
          "11. Castro Nevares, Pedro",
          "12. Benedit, Rafael",
          "13. de la Vega, Felipe",
          "14. Cardini, Ramiro",
          "15. Passaro, Tomas",
        ]
      }
    },
    los_matreros_regatas_bella_vista: {
      local: {
        nombre: "Los Matreros",
        jugadores: [
          "1. Salina, Matias",
          "2. Cec, Boris",
          "3. Zeiss, Juan Pablo",
          "4. Gahan, Tomas",
          "5. Villafane, Alejo",
          "6. McCormack, Colin",
          "7. Guevara, Juan Pablo",
          "8. Villarino, Santiago",
          "9. Amorisa, Marcos",
          "10. Morales, Juan Francisco",
          "11. Marelli, Santiago",
          "12. Del Busto, Pedro",
          "13. Santecchia, Nicolas",
          "14. Gallastegui, German",
          "15. Garcia Michero, Juan Pablo",
        ]
      },
      visitante: {
        nombre: "Regatas Bella Vista",
        jugadores: [
          "1. Barbaccia, Tomas",
          "2. Landivar, Beltran",
          "3. Gobet, Juan Manuel",
          "4. Sanguinetti, Valentin",
          "5. Sanguinetti, Tomas",
          "6. Garcia Campos, Agustin",
          "7. Gobet, Lucas",
          "8. Camerlinckx, Felipe",
          "9. Joseph, Marcos",
          "10. Camerlinkckx, Justo",
          "11. Camerlinckx, Enrique",
          "12. Camerlinckx, Mateo",
          "13. Klapenbach, Tobias",
          "14. Pisani, Francisco",
          "15. Rugolo, Felipe",
        ]
      }
    },
    newman_buenos_aires_c_rc: {
      local: {
        nombre: "Newman",
        jugadores: [
          "1. Prince, Miguel",
          "2. Perkins, Fermin",
          "3. Bosch, Bautista",
          "4. Cardinal, Pablo",
          "5. Urtubey, Alejandro",
          "6. Montoya, Mateo",
          "7. De la Vega, Joaquin",
          "8. Diaz de Vivar, Rodrigo",
          "9. Nava, Lucas",
          "10. Gutierrez Taboada, Gonzalo",
          "11. Ortiz Basualdo, Justo",
          "12. Lanfranco, Benjamin",
          "13. Prince, Simon",
          "14. Ulloa, Cruz",
          "15. Daireaux, Juan Bautista",
        ]
      },
      visitante: {
        nombre: "Buenos Aires C&RC",
        jugadores: [
          "1. Gallo, Tomas",
          "2. Ruiz, Tomas",
          "3. Zanella, Renzo",
          "4. Syriani, Francisco",
          "5. Saint Bonnet, Bautista",
          "6. Espina, Matias",
          "7. Bourdal, Pablo",
          "8. Etcheverry, Tomas",
          "9. Freire, Mateo",
          "10. Bunge, Tomas",
          "11. Bensadon, Ignacio",
          "12. Lamensa, Agustin",
          "13. Costa, Ramiro",
          "14. Ortiz, Segundo",
          "15. Novo, Alejo",
        ]
      }
    },

    // ── FECHA 2 ────────────────────────────────────────────────
    sic_los_matreros: {
      local: {
        nombre: "SIC",
        jugadores: [
          "1. Calandra, Francisco",
          "2. Ledesma, Tadeo",
          "3. Chiappe, Benjamín",
          "4. Plorutti, Ciro",
          "5. Curuchaga, Manuel",
          "6. Panzarini, Andrea",
          "7. Fernández De Oliveira, Santos",
          "8. Meyrelles, Tomás",
          "9. Albanese, Mateo",
          "10. Sascaro, Agustín",
          "11. Silva, Timoteo",
          "12. Pirán, Carlos",
          "13. Acosta, Nicanor",
          "14. López Fleming, Bernabé",
          "15. González Capdevilla, Francisco",
        ]
      },
      visitante: {
        nombre: "Los Matreros",
        jugadores: [
          "1. Salina, Matías",
          "2. Cec, Boris",
          "3. Zeiss, Juan Pablo",
          "4. Gahan, Tomas",
          "5. Villafañe, Alejo",
          "6. McCormack, Colin",
          "7. Guevara, Juan Pablo",
          "8. Villarino, Santiago",
          "9. Amorisa, Marcos",
          "10. Morales, Juan Francisco",
          "11. Marelli, Santiago",
          "12. Del Busto, Pedro",
          "13. Santecchia, Nicolás",
          "14. Gallastegui, German",
          "15. Plaza, Juan Segundo",
        ]
      }
    },
    buenos_aires_c_rc_alumni: {
      local: {
        nombre: "Buenos Aires C&RC",
        jugadores: [
          "1. Gallo, Tomás",
          "2. Ruiz, Tomás",
          "3. Zanella, Renzo",
          "4. Syriani, Francisco",
          "5. Saint Bonnet, Bautista",
          "6. Espina, Matías",
          "7. Bourdal, Pablo",
          "8. Etcheverry, Tomás",
          "9. Freire, Mateo",
          "10. Bunge, Tomás",
          "11. Bensadon, Ignacio",
          "12. Lamensa, Agustín",
          "13. Costa, Ramiro",
          "14. Ortiz, Segundo",
          "15. Novo, Alejo",
        ]
      },
      visitante: {
        nombre: "Alumni",
        jugadores: [
          "1. Bottoni, Juan Cruz",
          "2. Vibort, Tomás",
          "3. Bottoni, Francisco",
          "4. Mora, Manuel",
          "5. Alduncin, Santiago",
          "6. Cubilla, Ignacio",
          "7. Anderson, Juan Patricio",
          "8. Neyra, Santiago",
          "9. Passerotti, Tomás",
          "10. Canzani, Bautista",
          "11. Vieyra, Aquiles",
          "12. Testoni, Filippo",
          "13. Sábato, Franco",
          "14. Fuentes, Ramón",
          "15. Del Franco, Matías",
        ]
      }
    },
    los_tilos_la_plata: {
      local: {
        nombre: "Los Tilos",
        jugadores: [
          "1. Briozzo, Joaquin",
          "2. San Sebastián, Hipolito",
          "3. Laurin, Maximo",
          "4. Leiva, Martin",
          "5. Torboli, Luciano",
          "6. Bares, Felipe",
          "7. Chiavassa, Eliseo",
          "8. Gatti, Bautista",
          "9. Albina, Marcos",
          "10. Tuculet, Joaquín",
          "11. Martinez, Gastón",
          "12. Fernandez Armendariz, Tomás",
          "13. López Feybli, Alfonso",
          "14. Guichon, Ignacio",
          "15. Santamarina, Bautista",
        ]
      },
      visitante: {
        nombre: "La Plata",
        jugadores: [
          "1. Del Cerro, Ariel",
          "2. Nuñez, Joaquin",
          "3. Patat, Martin",
          "4. Ozog, Bautista",
          "5. Kucic, Ivan",
          "6. Pineda, Segundo",
          "7. Chiappani, Nicolas",
          "8. Bernasconi, Tomás",
          "9. De la Fuente, Manuel",
          "10. Di Lucca, Santino",
          "11. Addiechi, Pedro",
          "12. Paz Rizzoli, Francisco",
          "13. Juliano, Luca",
          "14. Cejas, Francisco",
          "15. Suárez Folch, Tomás",
        ]
      }
    },
    cuba_champagnat: {
      local: {
        nombre: "CUBA",
        jugadores: [
          "1. Garoby, Francisco",
          "2. Anderlic, Tomás",
          "3. Iribarne, Esteban",
          "4. Loza, Marcos",
          "5. Uriarte, Santiago",
          "6. Campion, Lucas",
          "7. Landau, Santiago",
          "8. Ortíz de Rozas, Benito",
          "9. Albani, Ignacio",
          "10. Mastroizzi, Valentín",
          "11. Castro Nevares, Pedro",
          "12. de la Vega, Felipe",
          "13. Young, Marcos",
          "14. Cardini, Ramiro",
          "15. Passaro, Tomás",
        ]
      },
      visitante: {
        nombre: "Champagnat",
        jugadores: [
          "1. Adissi, Alberto Natan",
          "2. Rodríguez Pascarella, Fernando",
          "3. Magaro, Marcos",
          "4. Escuti, Santiago",
          "5. Rivas Orozco, Tobías",
          "6. Alonso Boto, Matías Jesús",
          "7. Castelli Azpiroz, Francisco",
          "8. Rojo, Nicolás",
          "9. Panelo, Juan Segundo",
          "10. Panelo, Santos",
          "11. Rodríguez Navarro, Bautista",
          "12. Bottazzi, Joaquín",
          "13. Cotter Daireaux, Tomás",
          "14. Rufino, Facundo",
          "15. Costaguta, Gonzalo",
        ]
      }
    },
    belgrano_athletic_newman: {
      local: {
        nombre: "Belgrano Athletic",
        jugadores: [
          "1. Etchecoin, Mateo",
          "2. Villegas, Santiago",
          "3. Marchetti, Eliseo",
          "4. Duggan, Ramón",
          "5. Vaccarino, Augusto",
          "6. Gradin, Francisco",
          "7. Rebussone, Julián",
          "8. Vega, Franco",
          "9. Blacksley, Theo",
          "10. Aparicio, Juan",
          "11. Bernabé, Tobías",
          "12. Arana, Martín",
          "13. Etchepare, Tomás",
          "14. Arana, Pedro",
          "15. Landó, Juan",
        ]
      },
      visitante: {
        nombre: "Newman",
        jugadores: [
          "1. Prince, Miguel",
          "2. Salese, Beltrán",
          "3. Bosch, Bautista",
          "4. Lascombes, Francisco",
          "5. Urtubey, Alejandro",
          "6. Montoya, Mateo",
          "7. Cardinal, Pablo",
          "8. Díaz de Vivar, Rodrigo",
          "9. Nava, Lucas",
          "10. Gutiérrez Taboada, Gonzalo",
          "11. Ortiz Basualdo, Justo",
          "12. Lanfranco, Benjamín",
          "13. Prince, Simón",
          "14. Ulloa, Cruz",
          "15. Daireaux, Juan Bautista",
        ]
      }
    },
    atletico_del_rosario_regatas_bella_vista: {
      local: {
        nombre: "Atlético del Rosario",
        jugadores: [
          "1. Reyes, Ezequiel",
          "2. Rubio, Ramiro",
          "3. Montenegro, Bruno",
          "4. Cáceres, José",
          "5. Capella, Octavio",
          "6. Etcheverry, Federico",
          "7. Echenique, Francisco",
          "8. Malanos, Lucas",
          "9. Nogués, Felipe",
          "10. Nogués, Manuel",
          "11. Casals, Nicolás",
          "12. Vitola, Santiago",
          "13. Musio, Ramiro",
          "14. Bertero, Juan Cruz",
          "15. Elías, Martín",
        ]
      },
      visitante: {
        nombre: "Regatas Bella Vista",
        jugadores: [
          "1. Barbaccia, Tomás",
          "2. Landivar, Beltrán",
          "3. Gobet, Juan Manuel",
          "4. Sanguinetti, Valentín",
          "5. Sanguinetti, Tomás",
          "6. García Campos, Agustín",
          "7. Gobet, Lucas",
          "8. Camerlinckx, Felipe",
          "9. de la Torre, Esteban",
          "10. Camerlinkckx, Justo",
          "11. Camerlinckx, Enrique",
          "12. Camerlinckx, Mateo",
          "13. Pisani, Francisco",
          "14. Terra, Felipe",
          "15. Rugolo, Felipe",
        ]
      }
    },
    casi_hindu: {
      local: {
        nombre: "CASI",
        jugadores: [
          "1. Scaiano, Facundo",
          "2. Torres Obeid, Juan",
          "3. Paolucci, Felix",
          "4. Ochoa, Salvador",
          "5. Mazzini, Leo",
          "6. Sartori, Eugenio",
          "7. Torrado, Ignacio",
          "8. Rocca Rivarola, Benjamín",
          "9. Sanchez, Joaquín",
          "10. Hileman, Felipe",
          "11. Phelan, Tomás",
          "12. Phelan, Matías",
          "13. Belaga, Benjamín",
          "14. Tumbarello, Jerónimo",
          "15. Akemeier, Juan",
        ]
      },
      visitante: {
        nombre: "Hindu",
        jugadores: [
          "1. Diviesti, Franco",
          "2. Capurro, Agustin",
          "3. Leiva, Nicolas",
          "4. Banach, Elías",
          "5. Comolli, Juan",
          "6. Amaya, Santino",
          "7. Bávaro, Lautaro",
          "8. Amaya, Nicolás",
          "9. Ezcurra, Felipe",
          "10. Ormaechea, Fermín",
          "11. Graglia, Facundo",
          "12. Fernández Miranda, Ramon",
          "13. Rodríguez, Lisandro",
          "14. Amher, Tomas",
          "15. Aranoa, Juan",
        ]
      }
    },

    // ── FECHA ACTUAL ────────────────────────────────────────────
    los_matreros_atletico_del_rosario: {
      local: {
        nombre: "Los Matreros",
        jugadores: [
          "1. Salina, Matías",
          "2. Cec, Boris",
          "3. Zeiss, Juan Pablo",
          "4. Gahan, Tomás",
          "5. Villafañe, Alejo",
          "6. McCormack, Colin",
          "7. Guevara, Juan Pablo",
          "8. Villarino, Santiago",
          "9. Amorisa, Marcos",
          "10. Morales, Juan Francisco",
          "11. Marelli, Santiago",
          "12. Del Busto, Pedro",
          "13. Santecchia, Nicolás",
          "14. Gallastegui, Germán",
          "15. García Michero, Juan Pablo",
        ],
        cambios: ["García Michero por Plaza"],
      },
      visitante: {
        nombre: "Atlético del Rosario",
        jugadores: [
          "1. Reyes, Ezequiel",
          "2. Rubio, Ramiro",
          "3. Montenegro, Bruno",
          "4. Cáceres, José",
          "5. Capella, Octavio",
          "6. Etcheverry, Federico",
          "7. Sapino, Ignacio",
          "8. Malanos, Lucas",
          "9. Cornejo, Tomás",
          "10. Elías, Martín",
          "11. Casals, Nicolás",
          "12. Vitola, Santiago",
          "13. Musio, Ramiro",
          "14. Bertero, Juan Cruz",
          "15. Nogués, Manuel",
        ],
        cambios: ["Sapino por Echenique", "Cornejo por Nogués"],
      },
    },

    regatas_bella_vista_los_tilos: {
      local: {
        nombre: "Regatas Bella Vista",
        jugadores: [
          "1. Barbaccia, Tomás",
          "2. Landívar, Beltrán",
          "3. Gobet, Juan Manuel",
          "4. Sanguinetti, Valentín",
          "5. Sanguinetti, Tomás",
          "6. Gobet, Agustín Lucas",
          "7. Ruiz, Santiago",
          "8. Camerlinckx, Felipe",
          "9. De la Torre, Esteban",
          "10. De la Torre, José",
          "11. Camerlinckx, Enrique",
          "12. Camerlinckx, Mateo",
          "13. Pisani, Francisco",
          "14. Rugolo, Felipe",
          "15. Camerlinckx, Justo",
        ],
        cambios: ["Ruiz por García Campos", "De la Torre por Terra"],
      },
      visitante: {
        nombre: "Los Tilos",
        jugadores: [
          "1. Puertas, Manuel",
          "2. San Sebastián, Hipólito",
          "3. Armenti, Adriel",
          "4. Broglia, Gianluca",
          "5. Torboli, Luciano",
          "6. Bares, Felipe",
          "7. Chiavassa, Eliseo",
          "8. Gatti, Bautista",
          "9. Albina, Marcos",
          "10. Tuculet, Joaquín",
          "11. Martínez, Gastón",
          "12. Fernández Armendariz, Tomás",
          "13. López Feybli, Alfonso",
          "14. Fernández Vega, Nicolás",
          "15. Santamarina, Bautista",
        ],
        cambios: ["Puertas por Briozzo", "Armenti por Laurin", "Broglia por Leiva", "Fernández V por Guichon"],
      },
    },

    la_plata_casi: {
      local: {
        nombre: "La Plata",
        jugadores: [
          "1. Del Cerro, Ariel",
          "2. Nuñez, Joaquín",
          "3. Patat, Martín",
          "4. Ozog, Bautista",
          "5. Kucic, Iván",
          "6. Pineda, Segundo",
          "7. Chiappani, Nicolás",
          "8. Bernasconi, Tomás",
          "9. De la Fuente, Manuel",
          "10. Di Lucca, Santino",
          "11. Addiechi, Pedro",
          "12. Paz Rizzoli, Francisco",
          "13. Cejas, Francisco",
          "14. Panigatti, Facundo",
          "15. Suárez Folch, Tomás",
        ],
        cambios: [],
      },
      visitante: {
        nombre: "CASI",
        jugadores: [
          "1. Scaiano, Facundo",
          "2. Torres Obeid, Juan",
          "3. Paolucci, Félix",
          "4. Ochoa, Salvador",
          "5. Mazzini, Leo",
          "6. Sartori, Eugenio",
          "7. Torrado, Ignacio",
          "8. Rocca Rivarola, Benjamín",
          "9. Sánchez, Joaquín",
          "10. Hileman, Felipe",
          "11. Lezcano, Francisco",
          "12. Phelan, Tomás",
          "13. Belaga, Benjamín",
          "14. Castillo, Ramón",
          "15. Akemeier, Juan",
        ],
        cambios: [],
      },
    },

    hindu_cuba: {
      local: {
        nombre: "Hindú",
        jugadores: [
          "1. Martínez Sosa, Juan Ignacio",
          "2. Capurro, Agustín",
          "3. Leiva, Nicolás",
          "4. Banach, Elías",
          "5. Comolli, Juan",
          "6. Amaya, Santino",
          "7. Bávaro, Lautaro",
          "8. Amaya, Nicolás",
          "9. Ezcurra, Felipe",
          "10. Ormaechea, Fermín",
          "11. Graglia, Facundo",
          "12. Fernández Miranda, Ramón",
          "13. Rodríguez, Lisandro",
          "14. Cancelliere, Sebastián",
          "15. Aranoa, Juan",
        ],
        cambios: ["Martínez Sosa por Diviesti", "Cancelliere por Amher"],
      },
      visitante: {
        nombre: "CUBA",
        jugadores: [
          "1. Garoby, Francisco",
          "2. Anderlic, Tomás",
          "3. Iribarne, Esteban",
          "4. Cayol, Santos",
          "5. Uriarte, Santiago",
          "6. Campion, Lucas",
          "7. Capdepont, Juan",
          "8. Ortíz de Rosas, Benito",
          "9. Corleto, Félix",
          "10. Mastroizzi, Valentín",
          "11. Castro Nevares, Pedro",
          "12. Benedit, Rafael",
          "13. De la Vega, Felipe",
          "14. Cardini, Ramiro",
          "15. Passaro, Tomás",
        ],
        cambios: ["Cayol por Loza", "Capdepont por Landau", "Corleto por Albani", "Benedit por Young"],
      },
    },

    champagnat_buenos_aires_c_rc: {
      local: {
        nombre: "Champagnat",
        jugadores: [
          "1. Basualdo Quintana, Honorio",
          "2. Rodríguez Pascarella, Fernando",
          "3. Magaro, Marcos",
          "4. Castelli Azpiroz, Francisco",
          "5. Escuti, Santiago",
          "6. Alonso Boto, Matías",
          "7. Rivas Orozco, Tobías",
          "8. Rojo, Nicolás",
          "9. Panelo, Juan Segundo",
          "10. Panelo, Santos",
          "11. Rodríguez Navarro, Bautista",
          "12. Bottazzi, Joaquín",
          "13. Cotter Daireaux, Tomás",
          "14. Rufino, Facundo",
          "15. Costaguta, Gonzalo",
        ],
        cambios: ["Basualdo Q por Adissi"],
      },
      visitante: {
        nombre: "Buenos Aires C&RC",
        jugadores: [
          "1. Gallo, Tomás",
          "2. Ruiz, Tomás",
          "3. Coria, Blas",
          "4. Durañona, Bautista",
          "5. Saint Bonnet, Bautista",
          "6. Espina, Matías",
          "7. Bourdal, Pablo",
          "8. Campbell, Juan Segundo",
          "9. Freire, Mateo",
          "10. Bunge, Tomás",
          "11. Ortiz, Segundo",
          "12. Lamensa, Agustín (C)",
          "13. Costa, Ramiro",
          "14. Bensadon, Ignacio",
          "15. Novo, Alejo",
        ],
        cambios: ["Coria por Zanella"],
      },
    },

    newman_sic: {
      local: {
        nombre: "Newman",
        jugadores: [
          "1. Prince, Miguel",
          "2. Mackinlay, Teófilo",
          "3. Bosch, Bautista",
          "4. Lascombes, Francisco",
          "5. Urtubey, Alejandro",
          "6. Montoya, Mateo",
          "7. De la Vega, Joaquín",
          "8. Díaz de Vivar, Rodrigo",
          "9. Nava, Lucas",
          "10. Gutiérrez Taboada, Gonzalo",
          "11. Ortiz Basualdo, Justo",
          "12. Keena, Tomás",
          "13. Lanfranco, Benjamín",
          "14. Ulloa, Cruz",
          "15. Daireaux, Juan Bautista",
        ],
        cambios: ["Mackinlay por Salese", "De la Vega por Cardinal", "Keena por Prince"],
      },
      visitante: {
        nombre: "SIC",
        jugadores: [
          "1. Calandra, Francisco",
          "2. Rocha, Lucas",
          "3. Chiappe, Benjamín",
          "4. Plorutti, Ciro",
          "5. Curuchaga, Manuel",
          "6. Panzarini, Andrea",
          "7. Fernández De Oliveira, Santos",
          "8. Daireaux, Alejandro",
          "9. Albanese, Mateo (C)",
          "10. Sascaro, Agustín",
          "11. Silva, Timoteo",
          "12. Pirán, Carlos",
          "13. Acosta, Nicanor",
          "14. López Fleming, Bernabé",
          "15. González Capdevilla, Francisco",
        ],
        cambios: ["Rocha por Arocena", "Daireaux por Meyrelles"],
      },
    },

    alumni_belgrano_athletic: {
      local: {
        nombre: "Alumni",
        jugadores: [
          "1. Bottoni, Juan Cruz",
          "2. Vibort, Tomás",
          "3. Bottoni, Francisco",
          "4. Mora, Manuel",
          "5. Alduncin, Santiago",
          "6. Cubilla, Ignacio",
          "7. Anderson, Juan Patricio",
          "8. Neyra, Santiago",
          "9. Passerotti, Tomás",
          "10. Canzani, Bautista",
          "11. Vieyra, Aquiles",
          "12. Testoni, Filippo",
          "13. Sábato, Franco",
          "14. Fuentes, Ramón",
          "15. Del Franco, Matías",
        ],
        cambios: [],
      },
      visitante: {
        nombre: "Belgrano Athletic",
        jugadores: [
          "1. Etchecoin, Mateo",
          "2. De Siena, Ignacio",
          "3. Marchetti, Eliseo",
          "4. Duggan, Ramón",
          "5. Vaccarino, Augusto",
          "6. Gradin, Francisco",
          "7. Rebusone, Julián",
          "8. Vega, Franco",
          "9. Blacksley, Theo",
          "10. Aparicio, Juan",
          "11. Bernabé, Tobías",
          "12. Arana, Martín",
          "13. Etchepare, Tomás",
          "14. Arana, Pedro",
          "15. Landó, Juan",
        ],
        cambios: ["De Siena por Santiago Villegas"],
      },
    },
  },

  // ── INTERMEDIA ───────────────────────────────────────────────
  intermedia: {

    sic_los_matreros: {
      local: { nombre: "SIC", jugadores: ["1. Gomez Cruz, F","2. Noel, I","3. Villegas Leiva, I","4. Longo, T","5. Falidoglu, Y","6. Madero, F","7. Gomez Leiva, F","8. Daireaux, A","9. Sascaro, F","10. Pavlosky, S","11. Miguens, A","12. Rubio, S","13. Coelho, I","14. Perez Pardo, E","15. Garcia Herdt, A"] },
      visitante: { nombre: "Los Matreros", jugadores: ["1. Genoud, Augusto","2. Sanchez, Tomás","3. De Muria, Facundo","4. Culatto, Matías","5. Cirelli, Mateo","6. Villone, Esteban","7. Antar, Agustín","8. Córdoba, Agustín","9. Romanato, Martín","10. Urbina, Germán","11. Laudani, Agustín","12. Bendini, Rocco","13. Biudes, Marko","14. Guglielmo, Valentino","15. Plaza, Juan Segundo"] }
    },
    buenos_aires_c_rc_alumni: {
      local: { nombre: "Buenos Aires C&RC", jugadores: ["1. CHAJCHIR, Kael","2. CHIGHIZOLA, Mateo","3. ROLDÁN, Juan Martín","4. SYRIANI LANDI, Francisco","5. ALVAREZ BAYÓN, Tomás","6. DIEGUEZ, Jordi","7. ETCHEVERRY, Lucas","8. MIMESSI SOSA, Simón","9. DEL CAMPO, Nicolás","10. MALDONADO, Francisco","11. MASCOLO, Felipe","12. DIAZ BORDA, Tobías","13. PRIETO MARTINEZ, Luis","14. HANDLEY, Benjamín","15. PIZZO, Nicolás"] },
      visitante: { nombre: "Alumni", jugadores: ["1. BALDO, Tomas","2. LAMELAS, Maximo","3. FRENE, Nicolas","4. MARIANI, Luca","5. MINA, Augusto","6. CANZANI, Matias","7. VASSOLO, Bautista","8. ALVARIÑAS, Juan Cruz","9. TESTONI, Rocco","10. GARCIA BELMONTE, Fermin","11. CASTANIER, Mateo","12. BIANCHI, Santino","13. DESANTO, Agostino","14. FUENTES, Fermin","15. TAPIA, Gonzalo"] }
    },
    los_tilos_la_plata: {
      local: { nombre: "Los Tilos", jugadores: ["1. BASUALDO, Elio","2. CARRUCCIO, Cosme","3. LEIGER, Miguel","4. DURANTE, Pablo","5. CORDERO, Juan Pedro","6. CORIA, Joaquin","7. CASTILLA, Federico","8. CAPOCCETTI, Pedro","9. VARDE, Tomas","10. CORDERO, Matias","11. RUBIO GARMENDIA, Andres","12. SALGADO, Vicente","13. RAIMUNDI, Bautista","14. AMAND DE MENDIETA, Juan Pedro","15. CORTES, Isidro"] },
      visitante: { nombre: "La Plata", jugadores: ["1. Casin, Mirko","2. Erriest, Bautista","3. Chicherquia, Jeremías","4. Barreiro, Valentino","5. Rivera, Máximo","6. Mendieta, Carlos","7. Carnicero, Francisco","8. Ringuelet, Francisco","9. Guimaraynz, Joaquín","10. Annecchini, Francisco","11. Rivademar, Matías","12. Soto, Juan Francisco","13. Kneiszl, Marcos","14. Panigatti, Facundo","15. Festa, Gino"] }
    },
    cuba_champagnat: {
      local: { nombre: "CUBA", jugadores: ["1. PEÑA","2. GAROBY, J.","3. BOSCH, I.","4. CAYOL","5. BENGOLEA, S.","6. COGORNO","7. CAPDEPONT","8. LANDAU, J.","9. CORLETO","10. FIGUEROA BUNGE, F.","11. QUIROGA","12. MENGELLE","13. MESONES","14. MORONI","15. EZCURRA"] },
      visitante: { nombre: "Champagnat", jugadores: ["1. RENFIGES, Ramiro","2. PANELO, Simón","3. DE OLMOS, Segundo","4. DE GREGORIO, Francisco","5. DE LA FUENTE, Santiago Oscar","6. OLAVARRIA, Lucas","7. ALONSO BOTO, Tomas","8. MORESCO, Joaquin","9. UGARTE, Federico","10. DE OLMOS, Simon","11. ZAPPELLA, Simon","12. VILLANUEVA, Simón","13. NUÑEZ, Joaquin","14. ALDANONDO, Fermin","15. ROJO BAS, Felipe"] }
    },
    belgrano_athletic_newman: {
      local: { nombre: "Belgrano Athletic", jugadores: ["1. MARIANO, AUGUSTO","2. DE SIENA, IGNACIO","3. MARTINEZ BAQUES, FACUNDO","4. TECCA, LUCIANO","5. ANNAND, JEREMY","6. TIERNO AMIGO, BAUTISTA","7. CAMARDON, FACUNDO","8. ROCCA, AGUSTÍN","9. BOTTINI, CARLOS","10. FOSSATI, MATEO","11. FOSSATI, BAUTISTA","12. OTTONE, SANTIAGO","13. BRESCIA, JUAN","14. POMPEI, JUAN PEDRO","15. SPINELLI, NICOLÁS"] },
      visitante: { nombre: "Newman", jugadores: ["1. WRIGHT, James","2. MACKINLAY, Teófilo","3. LOZANO, Manuel","4. GARIBALDI, Marcos","5. LIZARRAGUE, Manuel","6. BONASSO, Bautista","7. GARAY, Teófilo","8. IRARRAZABAL, Iñaki","9. VALLS, Tomás","10. LLERENA, Florencio","11. LONGINOTTI, Franco","12. KEENA, Tomás","13. MCGRECH, Juan","14. VELA, Carlos","15. MENENDEZ, Carlos Quinto"] }
    },
    atletico_del_rosario_regatas_bella_vista: {
      local: { nombre: "Atlético del Rosario", jugadores: ["1. FERNANDEZ, Agustin","2. MALANOS, Matias","3. BASUALDO, Mauricio","4. ANDORNI, Mateo","5. BRACCIALARGHE, Marco","6. JABORNISKY, Blas","7. RAMELLA, Leandro","8. TUMOSA, Valentin","9. CORNEJO, Tomas","10. DEL PASO, Martin","11. JABORNISKY, Baltazar","12. DE HARO, Ignacio","13. FISCELLA, Maximiliano","14. CRIPOVICH, Nicolas","15. ROSSI, Mateo"] },
      visitante: { nombre: "Regatas Bella Vista", jugadores: ["1. Cebrón, Fabrizio","2. Castro Feijoo, Tomás","3. Sciandro, Esteban","4. Roldan, Santiago","5. Méndez, Santiago","6. Pascuet, Matías","7. Vega, Pedro","8. Santa Ana, Tomás","9. Zampella, Felipe","10. Tommasini, Felipe","11. Reznick, Tomás","12. Pérez del Cerro, Zenon","13. Moadeb, Ramiro","14. Molina Campos, Juan","15. Zampella, Francisco"] }
    },
    casi_hindu: {
      local: { nombre: "CASI", jugadores: ["1. Joaquín BRITTO","2. Juan ALBAREDA","3. Juan Cruz PERRI","4. Mateo CASTIGLIONE","5. Agustín POSLEMAN","6. Joaquín SAENZ DE MIERA","7. Bautista BELLEZZE","8. Santiago ACUÑA","9. Vicente MAMMOLITI","10. Felipe CARMAN","11. Francisco LESCANO","12. Ramón CASTILLO","13. Bautista CEJAS","14. Agustín BELLEZZE","15. Nicanor CASTILLO"] },
      visitante: { nombre: "Hindu", jugadores: ["1. Rosas, Pancho","2. Aragon, Marcos","3. Romero, Facundo","4. Montanucci, Fabricio","5. Maine, Fran","6. Ambroa, Joaco","7. Varela, Juan Manuel","8. zicarelli, Juan Pablo","9. Pietra, Manuel","10. Conte, Lucas","11. Guerrero, Facu","12. Bruna, Emiliano","13. Venier, Francisco","14. Domec Chantry, Joaquin","15. Suppicich, Mateo"] }
    },

    // ── FECHA 3 ────────────────────────────────────────────────
        alumni_belgrano: {
      local: {
        nombre: "Alumni",
        jugadores: [
          "1. Tomas Baldo",
          "2. Maximo Lamelas",
          "3. Nicolas Frene",
          "4. Luca Mariani",
          "5. Augusto Mina",
          "6. Matias Canzani",
          "7. Bautista Vassolo",
          "8. Juan Cruz Alvariñas",
          "9. Rocco Testoni",
          "10. Fermin Garcia Belmonte",
          "11. Mateo Castanier",
          "12. Santino Bianchi",
          "13. Agostino Desanto",
          "14. Fermin Fuentes",
          "15. Gonzalo Tapia",
        ]
      },
      visitante: {
        nombre: "Belgrano",
        jugadores: [
          "1. Augusto Mariano",
          "2. Valentín Chiodi",
          "3. Facundo Martinez Baques",
          "4. Mateo Navarro",
          "5. Mikael Bloom Quesada",
          "6. Bautista Tierno Amigo",
          "7. Jerónimo Sorondo",
          "8. Agustín Rocca",
          "9. Carlos Bottini",
          "10. Mateo Fossati",
          "11. Bautista Fossati",
          "12. Lucas Moro",
          "13. Juan Brescia",
          "14. Octavio Carroll",
          "15. Nicolás Spinelli",
        ]
      }
    },

    los_matreros_atletico_del_rosario: {
      local: {
        nombre: "Los Matreros",
        jugadores: [
          "1. SIN INFO",
          "2. SIN INFO",
          "3. SIN INFO",
          "4. SIN INFO",
          "5. SIN INFO",
          "6. SIN INFO",
          "7. SIN INFO",
          "8. SIN INFO",
          "9. SIN INFO",
          "10. SIN INFO",
          "11. SIN INFO",
          "12. SIN INFO",
          "13. SIN INFO",
          "14. SIN INFO",
          "15. SIN INFO",
        ]
      },
      visitante: {
        nombre: "Atletico del Rosario",
        jugadores: [
          "1. Agustin Fernandez",
          "2. Matias Malanos",
          "3. Luciano Nyman",
          "4. Mateo Andorni",
          "5. Marco Braccialarghe",
          "6. Blas Jabornisky",
          "7. Leandro Ramella",
          "8. Valentin Tumosa",
          "9. Felipe Nogués",
          "10. Martiniano Aime",
          "11. Baltazar Jabornisky",
          "12. Ignacio De Haro",
          "13. Maximiliano Fiscella",
          "14. Nicolas Cripovich",
          "15. Mateo Rossi",
        ]
      }
    },

    regatas_los_tilos: {
      local: {
        nombre: "Regatas",
        jugadores: [
          "1. Diego Torres Agüero",
          "2. Tomás Castro Feijoo",
          "3. Bautista Solveyra",
          "4. Santiago Roldan",
          "5. Santiago Méndez",
          "6. Matías Pascuet",
          "7. Pedro Vega",
          "8. Tomás Santa Ana",
          "9. Marcos Joseph",
          "10. Felipe Tommasini",
          "11. Tomás Reznick",
          "12. Ramiro Moadeb",
          "13. Julián Aguilar",
          "14. Juan Molina Campos",
          "15. Felipe Terra",
        ]
      },
      visitante: {
        nombre: "Los Tilos",
        jugadores: [
          "1. Elio Basualdo",
          "2. Cosme Carruccio",
          "3. Miguel Leiger",
          "4. Pablo Durante",
          "5. Juan Pedro Cordero",
          "6. Joaquin Coria",
          "7. Federico Castilla",
          "8. Pedro Capoccetti",
          "9. Tomas Varde",
          "10. Geronimo Asseretto",
          "11. Andres Rubio Garmendia",
          "12. Matias Cordero",
          "13. Bautista Raimundi",
          "14. Joaquin Fernandez Rivello",
          "15. Isidro Cortes",
        ]
      }
    },

    la_plata_casi: {
      local: {
        nombre: "La Plata",
        jugadores: [
          "1. Mirko Casin",
          "2. Bautista Erriest",
          "3. Jeremías Chicherquia",
          "4. Valentino Barreiro",
          "5. Maximo Rivera",
          "6. Carlos Mendieta",
          "7. Francisco Carnicero",
          "8. Francisco Ringuelet",
          "9. Joaquín Guimaraynz",
          "10. Francisco Annecchini",
          "11. Matias Rivademar",
          "12. Marcos Kneiszl",
          "13. Matias Tocho",
          "14. Gaspar Guichandut Regal",
          "15. Gino Festa",
        ]
      },
      visitante: {
        nombre: "Casi",
        jugadores: [
          "1. Joaquín Britto",
          "2. Juan Albareda",
          "3. Juan Cruz Perri",
          "4. Mateo Castiglione",
          "5. Agustín Posleman",
          "6. Joaquín Saenz De Miera",
          "7. Bautista Bellezze",
          "8. Santiago Acuña",
          "9. Vicente Mammoliti",
          "10. Felipe Carman",
          "11. Joaquín Ibañez",
          "12. Joaquín Behar",
          "13. Bautista Cejas",
          "14. Agustín Bellezze",
          "15. Nicanor Castillo",
        ]
      }
    },

    hindu_cuba: {
      local: {
        nombre: "HINDU",
        jugadores: [
          "1. F Diviesti",
          "2. F Gattas",
          "3. J Alanis",
          "4. F Grote",
          "5. F Borgehaut",
          "6. V Franco",
          "7. S Pacheco",
          "8. A Ciancio",
          "9. Enzo Lucas Fm",
          "10. T Larre",
          "11. M Antonijevic",
          "12. J Lopez Nobrega",
          "13. B Alvarez",
          "14. T Pulido",
          "15. T Amher",
        ]
      },
      visitante: {
        nombre: "CUBA",
        jugadores: [
          "1. Peña",
          "2. J. Garoby",
          "3. Batista",
          "4. Loza",
          "5. S. Bengolea",
          "6. Cogorno",
          "7. S. Landau",
          "8. J. Landau",
          "9. Albani",
          "10. F. Figueroa Bunge",
          "11. Quiroga",
          "12. Mengelle",
          "13. Mesones",
          "14. Moroni",
          "15. Ezcurra",
        ]
      }
    },

    champagnat_buenos_aires: {
      local: {
        nombre: "Champagnat",
        jugadores: [
          "1. Ramiro Renfiges",
          "2. Simón Panelo",
          "3. Tomas Yanzon",
          "4. Joaquin Moresco",
          "5. Santiago De La Fuente",
          "6. Lucas Olavarria",
          "7. Stefano Ferrero",
          "8. Conrado Sierra",
          "9. Federico Ugarte",
          "10. Simon De Olmos",
          "11. Simon Zappella",
          "12. Simón Villanueva",
          "13. Joaquin Nuñez",
          "14. Fermin Aldanondo",
          "15. Felipe Rojo Bas",
        ]
      },
      visitante: {
        nombre: "Buenos Aires",
        jugadores: [
          "1. Kael Chajchir",
          "2. Mateo Chighizola",
          "3. Juan Martín Roldán",
          "4. Tomás Alvarez Bayón",
          "5. Octavio Bartolomé",
          "6. Lucas Etcheverry",
          "7. Simón Mimessi Sosa",
          "8. Tomás Freire",
          "9. Nicolás Del Campo",
          "10. Francisco Maldonado",
          "11. Felipe Mascolo",
          "12. Marco Deges",
          "13. Luis Prieto Martinez",
          "14. Benjamin Handley",
          "15. Nicolás Pizzo",
        ]
      }
    },

    newman_sic: {
      local: {
        nombre: "Newman",
        jugadores: [
          "1. James Wright",
          "2. Belisario Granato",
          "3. Manuel Lozano",
          "4. Marcos Garibaldi",
          "5. Paul Cardinal",
          "6. Justo Bruzzone",
          "7. Bautista Bonasso",
          "8. Iñaki Irarrázaval",
          "9. Tomás Valls",
          "10. Florencio Llerena",
          "11. Franco Longinotti",
          "12. Matías Uranga",
          "13. Juan McGrech",
          "14. Carlos Vela",
          "15. Carlos Quinto Menendez",
        ]
      },
      visitante: {
        nombre: "SIC",
        jugadores: [
          "1. F Gomez Cruz",
          "2. J Gilligan",
          "3. I Villegas Leiva",
          "4. I G. Chiappe",
          "5. Y Fadiloglu",
          "6. F Madero",
          "7. F Gomez Leiva",
          "8. A Corral",
          "9. F Sascaro",
          "10. S Pavlovsky",
          "11. A Miguens",
          "12. I Pietranera",
          "13. T Battioli",
          "14. F Salmain",
          "15. I Coelho",
        ]
      }
    },

  },

  // ── PRE-INTERMEDIA A ─────────────────────────────────────────
  preinter_a: {

    sic_los_matreros: {
      local: { nombre: "SIC", jugadores: ["1. Istueta, A","2. Gilligan, J","3. Fitz Herald, S","4. Serrano, T","5. G. Chiappe, I","6. Lorenzetti, L","7. Corral, A","8. Bergallo, JC","9. Sascaro, B","10. Busso, M","11. Rubio, F","12. Pietranera, I","13. Battioli, T","14. Salmain, F","15. Tempone, T"] },
      visitante: { nombre: "Los Matreros", jugadores: ["1. Castillo, Thiago","2. Sampaíño, Cristian","3. Tesolin, Santiago","4. Sorci, Juan","5. Bonicalzi, Nicolás","6. Darriba, Germán","7. Di Meglio, Dante","8. Stark, Tomás","9. Marelli, Bautista","10. Senesi, Juan Cruz","11. García, Juan Manuel","12. Montes de Oca, Juan Cruz","13. Moggia, Leandro","14. Farias, Eros","15. Gómez, Juan"] }
    },
    buenos_aires_c_rc_alumni: {
      local: { nombre: "Buenos Aires C&RC", jugadores: ["1. CAMBIASSO, Facundo","2. OTAÑO, Jerónimo","3. GARCÍA MAC DOUGALL, Tomás","4. BARTOLOMÉ, Octavio","5. LUQUE, Ramiro","6. IBARRA, Francisco","7. GARCÍA CASABAL, Joaquín","8. FREIRE, Tomás","9. MONASTERIO, Juan","10. GOMEZ TENA, Santos","11. LLAURO, Tomás","12. DEGES, Marcos","13. LATORRE, Iñaki","14. OUTEIRAL, Gonzalo","15. FOLLET, Alejo"] },
      visitante: { nombre: "Alumni", jugadores: ["1. CUEVAS, Ramiro","2. WAGNER, Antonio","3. CAMBARERI, Guido","4. MAZZONI, Geronimo","5. DEVOTO, Santiago","6. ALEPIDOTE, Facundo","7. MILOU, Ignacio","8. PICCININI, Bautista","9. ZALAZAR, Ezequiel","10. GUIMAREY, Tobias","11. DONMANOVICH, Ignacio","12. GONZALES CHAVES, Jeronimo","13. RIVAS, Felipe","14. PEIRONE, Facundo","15. ORTIZ MORISET, Tomas"] }
    },
    belgrano_athletic_newman: {
      local: { nombre: "Belgrano Athletic", jugadores: ["1. GOMEZ, MANUEL FERNANDO","2. SCHIAPPACASE, MARCOS","3. GROENENBERG, GERÓNIMO","4. CORRALES, JERÓNIMO","5. BUGNA, FRANCO","6. SAPORITTI, JOSÉ","7. ALERINO, ALERINO","8. DE LA SOTA, FACUNDO","9. ECHEVERRÍA, JUSTO","10. MIGALE, RAFAEL","11. CELEMIN, SANTIAGO","12. MORO, LUCAS","13. ROCCA, MANUEL","14. PITRELLI, CRUZ","15. AZCUE, SEGUNDO"] },
      visitante: { nombre: "Newman", jugadores: ["1. DEWEY, Juan Pablo","2. GRANATO, Belisario","3. GARAY, Delfín","4. COCCA, Antonio","5. URETA, Tomás","6. DEMARCHI, Valentín","7. SALINAS, Juan","8. RUSO, Rufino","9. TORELLO, Facundo","10. HARDOY, José","11. URANGA, Félix","12. URANGA, Matías","13. IRIBARREN, Marcos","14. ZIROLLI, Marcos","15. G. TABOADA, Santiago"] }
    },
    los_tilos_la_plata: {
      local: { nombre: "Los Tilos", jugadores: ["1. GRAF, Nicolas","2. CASTRO, Jeronimo","3. CERACI, Valentin","4. MADRUSSAN, Mateo","5. TARZIAN, Tomas","6. CORTOPASSO, Valentino","7. GUILLON, Alain","8. KORENBLIT, Ivan","9. COLLI, Dante","10. ASSERETTO, Geronimo","11. PICONE, Lisandro","12. BALBIN, Federico","13. SCIATORE, Eliseo","14. MENDY, Juan","15. FERNANDEZ PERTIERRA, Ulises"] },
      visitante: { nombre: "La Plata", jugadores: ["1. SIN INFO","2. SIN INFO","3. SIN INFO","4. SIN INFO","5. SIN INFO","6. SIN INFO","7. SIN INFO","8. SIN INFO","9. SIN INFO","10. SIN INFO","11. SIN INFO","12. SIN INFO","13. SIN INFO","14. SIN INFO","15. SIN INFO"] }
    },
    cuba_champagnat: {
      local: { nombre: "CUBA", jugadores: ["1. CASTIGLIONI","2. CARULLO","3. BATISTA","4. VIALE","5. LOPEZ DEL CARRIL","6. DEMARIA, N.","7. ROSSI, N.","8. CASAURANG","9. FONTAN","10. CASTRO MADERO","11. DOUSSET","12. CARDINI, J.","13. MARTINEZ BOSCH","14. KASSAI","15. ZAMBRANO"] },
      visitante: { nombre: "Champagnat", jugadores: ["1. URIOL, Joaquín","2. DOMÍNGUEZ, Federico","3. YANZON, Tomas","4. LOBOS, Miguel","5. GIUDICI, Joaquín","6. FERRERO, Stefano","7. CASAL, Marcos","8. SIERRA, Conrado","9. LARGUIA, Justo","10. BULLRICH, Bautista","11. USTARIZ, Tadeo","12. MORENO HUEYO, Iñaki","13. CARTELLI, MARTÍN","14. DANDREA, Santiago","15. HILEMAN, Joaquin"] }
    },
    atletico_del_rosario_regatas_bella_vista: {
      local: { nombre: "Atlético del Rosario", jugadores: ["1. CARRO, José","2. RUBIO, Felipe","3. NYMAN, Luciano","4. DEGANI, Juan Ignacio","5. CAMINO, Sebastián","6. GAITÁN, Joaquin","7. SVETAZ, Branco","8. YULI, Julio","9. PALOMA, Felipe","10. ARNAU, Agustin","11. GILLETA, Lucio","12. D'ALESSIO, Pedro","13. GALLI, Santino","14. BELLOTTI, Juan","15. BISIO, Pedro"] },
      visitante: { nombre: "Regatas Bella Vista", jugadores: ["1. Cariaga, Santino","2. Brizuela, Juan","3. Solveyra, Bautista","4. Basombrío, Santiago","5. González, José","6. Bourse, Valentín","7. Yacubowski, Franco","8. Curci, Pedro","9. Parareda, Tomás","10. Rodríguez Gilligan, T.","11. Pérez del Cerro, Toribio","12. Barla, Bautista","13. Aguilar, Julián","14. Campos, Serafín","15. Goncalves, Ramiro"] }
    },
    casi_hindu: {
      local: { nombre: "CASI", jugadores: ["1. Benjamín LLANO","2. Facundo ANDREOTTI","3. Facundo HERMIDA","4. Thiago FEDERICO","5. Roberto OCHOA","6. Pampa STOREY","7. Segundo ROY","8. Francisco ROCCA SACKMANN","9. Felipe GUERRERO","10. Alejo MONTES DE OCA","11. Benjamín SONNE","12. Ricardo PASMAN","13. Joaquín BEHAR","14. Bautista KEENA","15. Joaquín IBAÑEZ"] },
      visitante: { nombre: "Hindu", jugadores: ["1. RIVOLTA, C","2. SILVEYRA, B","3. CHIAPPA, L","4. LEGUIZAMÓN, L","5. LAMBORIZIO, F","6. NOVELLA FREY, M","7. LOPEZ LLOVET, A","8. BERGATI, B","9. ABAD, G","10. SULAM, G","11. FERNANDEZ, M","12. ALMADA, R","13. DE CARABASSA, R","14. MAYOL, A","15. MATEU, F"] }
    },

    // ── FECHA 3 ────────────────────────────────────────────────
        alumni_belgrano: {
      local: {
        nombre: "Alumni",
        jugadores: [
          "1. Ramiro Cuevas",
          "2. Antonio Wagner",
          "3. Guido Cambareri",
          "4. Geronimo Mazzoni",
          "5. Santiago Devoto",
          "6. Facundo Alepidote",
          "7. Ignacio Milou",
          "8. Bautista Piccinini",
          "9. Ezequiel Zalazar",
          "10. Tobias Guimarey",
          "11. Ignacio Donmanovich",
          "12. Jeronimo Gonzales Chaves",
          "13. Felipe Rivas",
          "14. Fantastico Peirone",
          "15. Tomas Ortiz Moriset",
        ]
      },
      visitante: {
        nombre: "Belgrano",
        jugadores: [
          "1. Manuel Fernando Gomez",
          "2. Felipe Sofer",
          "3. Gerónimo Groenenberg",
          "4. Jerónimo Corrales",
          "5. Franco Bugna",
          "6. Andrés Allende",
          "7. Jose Saporitti",
          "8. Facundo De La Sota",
          "9. Justo Echeverría",
          "10. Rafael Migale",
          "11. Simón Galperín",
          "12. Pedro Tramezzani",
          "13. Manuel Rocca",
          "14. Cruz Pitrelli",
          "15. Segundo Azcue",
        ]
      }
    },

    los_matreros_atletico_del_rosario: {
      local: {
        nombre: "Los Matreros",
        jugadores: [
          "1. SIN INFO",
          "2. SIN INFO",
          "3. SIN INFO",
          "4. SIN INFO",
          "5. SIN INFO",
          "6. SIN INFO",
          "7. SIN INFO",
          "8. SIN INFO",
          "9. SIN INFO",
          "10. SIN INFO",
          "11. SIN INFO",
          "12. SIN INFO",
          "13. SIN INFO",
          "14. SIN INFO",
          "15. SIN INFO",
        ]
      },
      visitante: {
        nombre: "Atletico del Rosario",
        jugadores: [
          "1. José Carro",
          "2. Felipe Rubio",
          "3. Mauricio Basualdo",
          "4. Juan Ignacio Degani",
          "5. Santiago Medina",
          "6. Joaquin Gaitán",
          "7. Branco Svetaz",
          "8. Martin Redolfi",
          "9. Felipe Paloma",
          "10. Agustin Arnau",
          "11. Lucio Gillette",
          "12. Pedro D'Alessio",
          "13. Santino Galli",
          "14. Benjamin Zachino",
          "15. Juan Bellotti",
        ]
      }
    },

    regatas_los_tilos: {
      local: {
        nombre: "Regatas",
        jugadores: [
          "1. Facundo Calderotto",
          "2. Juan Brizuela",
          "3. Santino Cariaga",
          "4. Santiago Basombrío",
          "5. José González",
          "6. Valentín Bourse",
          "7. Franco Yacubowski",
          "8. Pedro Curci",
          "9. Felipe Zampella",
          "10. Cruz Barla",
          "11. Francisco Zampella",
          "12. Ignacio Comisso",
          "13. Fermín Zampella",
          "14. Toribio Pérez del Cerro",
          "15. Ignacio Pereyra",
        ]
      },
      visitante: {
        nombre: "Los Tilos",
        jugadores: [
          "1. Nicolas Graf",
          "2. Jeronimo Castro",
          "3. Juan Pablo Rial",
          "4. Mateo Madrussan",
          "5. Tomas Tarzian",
          "6. Valentino Cortopasso",
          "7. Alain Guillon",
          "8. Ivan Korenblit",
          "9. Dante Colli",
          "10. Joaquin Bares",
          "11. Lisandro Picone",
          "12. Eliseo Sciatore",
          "13. Federico Balbin",
          "14. Juan Mendy",
          "15. Juan Pedro Amand De Mendieta",
        ]
      }
    },

    la_plata_casi: {
      local: {
        nombre: "La Plata",
        jugadores: [
          "1. Ezequiel Rodriguez Saulnier",
          "2. Joaquín Sebastiá",
          "3. Ignacio Luna",
          "4. Nicolas Mashud",
          "5. Emiliano Guida",
          "6. Lucas Carreon",
          "7. Jerónimo Ferraro",
          "8. Pedro Ponce bravo",
          "9. Felipe Alonso",
          "10. Francisco Guerrero",
          "11. Isidro Iassi",
          "12. Marcos Alconada",
          "13. Ivo Neiman",
          "14. Joaquin Sorarrain",
          "15. Joaquin Roccatagliata",
        ]
      },
      visitante: {
        nombre: "Casi",
        jugadores: [
          "1. Benjamín Llano",
          "2. Facundo Andreotti",
          "3. Ignacio Rizzuti",
          "4. Thiago Federico",
          "5. Roberto Ochoa",
          "6. Pampa Storey",
          "7. Segundo Roy",
          "8. Francisco Rocca Sackmann",
          "9. Felipe Guerrero",
          "10. Alejo Montes De Oca",
          "11. Ignacio Milesi",
          "12. Ricardo Pasman",
          "13. Tomás Belgrano",
          "14. Bautista Keena",
          "15. Mateo Sartori",
        ]
      }
    },

    hindu_cuba: {
      local: {
        nombre: "HINDU",
        jugadores: [
          "1. G Ruzo",
          "2. M Diaz De La Vega",
          "3. L Chiappa",
          "4. L Leguizamón",
          "5. F Lamborizio",
          "6. M Novella Frey",
          "7. B Bergati",
          "8. A López Llovet",
          "9. Ji García Cuerva",
          "10. G Sulam",
          "11. P Mestre",
          "12. B Serrano",
          "13. R De Carabassa",
          "14. A Mayol",
          "15. F Mateu",
        ]
      },
      visitante: {
        nombre: "CUBA",
        jugadores: [
          "1. Castiglioni",
          "2. Carullo",
          "3. De Miguel",
          "4. Viale",
          "5. Lopez Del Carril",
          "6. N. Demaria",
          "7. Carrasco",
          "8. Casaurang",
          "9. Fontan",
          "10. Castro Madero",
          "11. Perdomo",
          "12. Cardini",
          "13. Zambrano",
          "14. Irigaray",
          "15. Martinez Bosch",
        ]
      }
    },

    champagnat_buenos_aires: {
      local: {
        nombre: "Champagnat",
        jugadores: [
          "1. Joaquín Uriol Demarchi",
          "2. Federico Domínguez",
          "3. Pedro Aldanondo",
          "4. Iñaki Alberto Ustariz",
          "5. Joaquín Giudici",
          "6. Marcos Casal",
          "7. Miguel Lobos",
          "8. Lucas Valdez",
          "9. Pedro Del Piano",
          "10. Bautista Bullrich",
          "11. Tadeo Ustariz",
          "12. Martín Cartelli",
          "13. Marcos Lafuente",
          "14. Santiago Dandrea",
          "15. Felipe Ortiz Soldati",
        ]
      },
      visitante: {
        nombre: "Buenos Aires",
        jugadores: [
          "1. Facundo Cambiasso",
          "2. Jerónimo Otaño",
          "3. Joaquín Mallo",
          "4. Lautaro Molinari",
          "5. Ramiro Luque",
          "6. Francisco Ibarra",
          "7. Joaquín García Casabal",
          "8. Jordi Dieguez",
          "9. Juan Monasterio",
          "10. Santos Gomez Tena",
          "11. Manuel Traverso",
          "12. Francisco Lopez",
          "13. Iñaki Latorre",
          "14. Gonzalo Outeiral",
          "15. Alejo Follet",
        ]
      }
    },

    newman_sic: {
      local: {
        nombre: "Newman",
        jugadores: [
          "1. Facundo Brandi",
          "2. Rodrigo Pueyrredon",
          "3. Delfín Garay",
          "4. Antonio Cocca",
          "5. Tomás Ureta",
          "6. Valentín Demarchi",
          "7. Juan Salinas",
          "8. Rufino Ruso",
          "9. Facundo Rauch",
          "10. José Hardoy",
          "11. Silvestre Casá",
          "12. Bautista Butler",
          "13. Marcos Iribarren",
          "14. Marcos Zirolli",
          "15. Santiago G. Taboada",
        ]
      },
      visitante: {
        nombre: "Sic",
        jugadores: [
          "1. A Istueta",
          "2. E Salvucci",
          "3. S Fitz Gerald",
          "4. L Ledesma",
          "5. T Serrano",
          "6. JC Bergallo",
          "7. L Lorenzetti",
          "8. T Legarre Matera",
          "9. M R Gauxax",
          "10. M Busso",
          "11. P Ramallo",
          "12. A Rivarola",
          "13. M Longo",
          "14. M Olvarria",
          "15. T Tempone",
        ]
      }
    },

  },

  // ── PRE-INTERMEDIA B ─────────────────────────────────────────
  preinter_b: {

    sic_b_los_matreros_b: {
      local: { nombre: "SIC", jugadores: ["1. G. Ketelhon, F.","2. Salvucci, E","3. Anchoni, B","4. Ledesma, L","5. Nores, S","6. Pereyra, F","7. Roques, F","8. F. Gorgolas B","9. Garriga, T","10. Delor, B","11. Ramallo, P","12. Rivarola, A","13. Longo, M","14. Olvarria, M","15. Giorgitti, S"] },
      visitante: { nombre: "Los Matreros", jugadores: ["1. González, Nicolás","2. Guindin, David","3. Godoy, Emiliano","4. Reina, Matías","5. Alberdi, Nacho","6. Rimoli, Thiago","7. Camiletti, Teo","8. Martínez, Hecker","9. Barbieri, Santiago","10. Amoedo, Manuel","11. Marcos, Juan Bautista","12. Vázquez, Rodrigo","13. Medina Mendoza, Martino","14. Bolognini, Facundo","15. Ugartemendia, Francisco"] }
    },
    buenos_aires_c_rc_b_alumni_b: {
      local: { nombre: "Buenos Aires C&RC", jugadores: ["1. MALLO, Joaquín","2. MARCHESI, Guido","3. PIEDRABUENA, Agustín","4. MIDDLETON, Marcos","5. MODYEIEVSKY, Santiago","6. MONTOBBIO, Felipe","7. MARIOTTI, Lucas","8. MERLO, Tomás","9. ACOSTA PIMENTEL, Ignacio","10. INVERNIZZI, Fabrizio","11. WETZLER, Tomás","12. LOPEZ, Francisco","13. DEGUI, Francisco","14. DEL FRADE, Tomás","15. REGO, Juan"] },
      visitante: { nombre: "Alumni", jugadores: ["1. BERRETA, Valentin","2. MIÑANA, Ignacio","3. COZZI, Franco","4. JUDGES, Thiago","5. CANOVAS, Federico","6. DAUD, Felipe","7. PASCUAL, Joaquin","8. MENDONCA, Ignacio","9. ORTIZ PICCAZO, Francisco","10. CAMPBEL, Mateo","11. CEBALLOS, Alejandro","12. BOLAN, Thiago","13. BARRAL, Santos","14. WILLIAMS, Agustin","15. MACIEL, Jacinto"] }
    },
    los_tilos_b_la_plata_b: {
      local: { nombre: "Los Tilos", jugadores: ["1. SELALLE ORONA, Ciro","2. VIDELA, Valentino","3. PRADO, Juan Augusto","4. ARRUA, Nicolas","5. MARTINEZ ZUVIRIA, Salvador","6. STANCATO, Agustin","7. MANZANO, Juan","8. SAMPAOLI, Nicolas","9. AXAT, Matias","10. ALAYES, Beltran","11. NACCHI, Isidro","12. MENDEZ, Felipe","13. REYNA, Laureano","14. MENDINUETA, Juan M","15. LOVAZZANO, Manuel"] },
      visitante: { nombre: "La Plata", jugadores: ["1. SIN INFO","2. SIN INFO","3. SIN INFO","4. SIN INFO","5. SIN INFO","6. SIN INFO","7. SIN INFO","8. SIN INFO","9. SIN INFO","10. SIN INFO","11. SIN INFO","12. SIN INFO","13. SIN INFO","14. SIN INFO","15. SIN INFO"] }
    },
    cuba_b_champagnat_b: {
      local: { nombre: "CUBA", jugadores: ["1. VICETTO","2. MALNATTI","3. DE MIGUEL","4. CAYOL, P.","5. LANUSSE","6. LALANNE","7. CARRASCO","8. MAS","9. COPPOLA","10. PERES","11. ROCA","12. ZONCA","13. SARAVIA","14. FIGUEROA BUNGE, E.","15. CARRERAS"] },
      visitante: { nombre: "Champagnat", jugadores: ["1. RINALDELLI, MARTIN","2. BERARDI, FELIPE","3. ALDANONDO, PEDRO","4. FEMIA, IAN LUCCA","5. RETES, GARCIA FELIPE","6. CHIESA, JOAQUIN","7. DEL SEL, MARCOS","8. VALDEZ, LUCAS","9. BLOUSSON, PEDRO","10. KENNEDY, TOMAS","11. DE NEVARES, CARLOS","12. HILEMAN, PEDRO","13. LAFUENTE, MARCOS","14. MARIN, SIMON","15. ROCHA, JUSTO"] }
    },
    belgrano_athletic_b_newman_b: {
      local: { nombre: "Belgrano Athletic", jugadores: ["1. PERTICONE, MAXI","2. SOFER, FELIPE","3. ROMANO, MIGUEL","4. CUSTIDIANO, JUAN CRUZ","5. MATURANA, FRANCISCO","6. LAVAYEN, JUSTO","7. FURLONG, BENJAMÍN","8. LOSASSO, IGNACIO","9. DE LAS CARRERAS, SALVADOR","10. DE LAS CARRERAS, SIMÓN","11. COLANTONIO, GONZALO","12. TRAMEZZANI, PEDRO","13. GALPERÍN, SIMÓN","14. BARREIX, BENJAMÍN","15. AMADEO LASTRA, GERÓNIMO"] },
      visitante: { nombre: "Newman", jugadores: ["1. IBARGUREN, Tomás","2. PUEYRREDON, Rodrigo","3. ROGGERO, Francisco","4. URANGA, Tomás","5. FORTIN, Pablo","6. DACUNTO, Juan Pablo","7. SARAVIA, Justo","8. VALLS, José Quinto","9. BULLRICH, Simón","10. BENEDIT, Juan","11. PEREYRA, Cruz","12. BUTLER, Bautista","13. TORELLO, Eduardo","14. LANZA, Juan","15. SEGURA, Bautista"] }
    },
    atletico_del_rosario_b_regatas_bella_vista_b: {
      local: { nombre: "Atlético del Rosario", jugadores: ["1. VIOLA, Joaquín","2. SUAREZ, Tomàs","3. RUBÍ, Lautaro","4. MEDINA, Santiago","5. VUCETIC, Ivo","6. SOUZA, Santiago","7. MACAT, Manuel","8. REDOLFI, Martin","9. CASTAGNA, Benjamin","10. DE LA TORRE, Tomás","11. PICCARDI, Franco","12. VIDALLE, Guido","13. QUETGLAS, Manuel","14. ZACCHINO, Benajmin","15. CIRIMELE, Ignacio"] },
      visitante: { nombre: "Regatas Bella Vista", jugadores: ["1. Esposito, Francisco","2. González, Juan","3. Ortiz, Brian","4. Friedenreich, Conrado","5. Parodi, Marcos","6. Lozano, Manuel","7. Franzini, Santiago","8. de la Torre, Estanislao","9. Richards, Benjamín","10. Pomilio, Santino","11. Nano, Conrado","12. Lencioni, Santiago","13. Zampella, Fermín","14. Laborda, Benjamín","15. Ledesma, Mariano"] }
    },
    casi_b_hindu_b: {
      local: { nombre: "CASI", jugadores: ["1. Felipe PIÑERO","2. Octavio ROMERO","3. Marcos REBOLLO","4. Tomás ROSSIGNOLI","5. Alejo GOMEZ SALAVERRI","6. Agustín OBIGLIO","7. Santiago PARODI","8. Facundo SOAVE","9. Ignacio SANCHEZ","10. Marcos HARISMENDY","11. Ignacio MILESI","12. Joaquín HARISMENDY","13. Tomás BELGRANO","14. Mateo SARTORI","15. Fernando MANTILLA"] },
      visitante: { nombre: "Hindu", jugadores: ["1. SILVA, A","2. DIAZ DE LA VEGA, M","3. BRARDA, I","4. FERRANDO, N","5. MATEUCCI, T","6. ALANIZ, G","7. BORGUEAHT, V","8. IGARRETA, F","9. ALVAREZ, T","10. ALVAREZ, JP","11. BARBEIRA, B","12. REYES, JB","13. NOVELLA FREY, T","14. NIEVA, E","15. ASTARLOA, S"] }
    },

    // ── FECHA 3 ────────────────────────────────────────────────
        alumni_b_belgrano_b: {
      local: {
        nombre: "Alumni",
        jugadores: [
          "1. Valentin Berreta",
          "2. Ignacio Miñana",
          "3. Franco Cozzi",
          "4. Thiago Judges",
          "5. Federico Canovas",
          "6. Felipe Daud",
          "7. Diego Mithaler",
          "8. Ignacio Mendonca",
          "9. Francisco Ortiz Piccazo",
          "10. Mateo Campbel",
          "11. Alejandro Williams",
          "12. Mateo Machain",
          "13. Santos Barral",
          "14. Jacinto Maciel",
          "15. Pedro Ballatore",
        ]
      },
      visitante: {
        nombre: "Belgrano",
        jugadores: [
          "1. Maxi Perticone",
          "2. Augusto Garbini",
          "3. Miguel Romano",
          "4. Juan Franco",
          "5. Francisco Maturana",
          "6. Salvador Gatti",
          "7. Benjamín Furlong",
          "8. Ignacio Losasso",
          "9. Juan Retamosa",
          "10. Simón De Las Carreras",
          "11. Gonzalo Colantonio",
          "12. Guido Casanello",
          "13. Gerónimo Amadeo Lastra",
          "14. Benjamín Barreix",
          "15. Domingo Rizzi",
        ]
      }
    },

    los_matreros_b_atletico_del_rosario_b: {
      local: {
        nombre: "Los Matreros",
        jugadores: [
          "1. SIN INFO",
          "2. SIN INFO",
          "3. SIN INFO",
          "4. SIN INFO",
          "5. SIN INFO",
          "6. SIN INFO",
          "7. SIN INFO",
          "8. SIN INFO",
          "9. SIN INFO",
          "10. SIN INFO",
          "11. SIN INFO",
          "12. SIN INFO",
          "13. SIN INFO",
          "14. SIN INFO",
          "15. SIN INFO",
        ]
      },
      visitante: {
        nombre: "Atletico del Rosario",
        jugadores: [
          "1. Joaquín Viola",
          "2. Jeremías Aime",
          "3. Lautaro Rubí",
          "4. Juan Ramella",
          "5. Ivo Vucetic",
          "6. Santiago Souza",
          "7. Manuel Macat",
          "8. Julio Yuli",
          "9. Matias Salvatierra",
          "10. Tomás De La Torre",
          "11. Franco Piccardi",
          "12. Ángel Choque",
          "13. Manuel Quetglas",
          "14. Jeremy Ardanowsky",
          "15. Ignacio Cirimele",
        ]
      }
    },

    regatas_b_los_tilos_b: {
      local: {
        nombre: "Regatas",
        jugadores: [
          "1. Tomás Vilches",
          "2. Juan González",
          "3. Brian Ortiz",
          "4. Juan Muzzio",
          "5. Marcos Parodi",
          "6. Manuel Lozano",
          "7. Santiago Franzini",
          "8. Estanislao de la Torre",
          "9. Tomás Parareda",
          "10. T. Rodriguez Gilligan",
          "11. Serafín Campos",
          "12. Bautista Barla",
          "13. Timoteo Méndez",
          "14. Conrado Nano",
          "15. Ramiro Goncalves",
        ]
      },
      visitante: {
        nombre: "Los Tilos",
        jugadores: [
          "1. Felipe Benito",
          "2. Martin Artola",
          "3. Valentin Ceraci",
          "4. Francisco Willi",
          "5. Paco Mendez",
          "6. Fermin Arigos",
          "7. Santino Ogresta",
          "8. Nicolas Magi",
          "9. Juan Cruz Ruiz Lopez",
          "10. Juan Osacar Capdebarthe",
          "11. Federico Buccigrossi",
          "12. Lautaro Gil",
          "13. Federico Pioli",
          "14. Simon Diego De Cucco",
          "15. Toma Gonzalez",
        ]
      }
    },

    la_plata_b_casi_b: {
      local: {
        nombre: "La Plata",
        jugadores: [
          "1. SIN INFO",
          "2. SIN INFO",
          "3. SIN INFO",
          "4. SIN INFO",
          "5. SIN INFO",
          "6. SIN INFO",
          "7. SIN INFO",
          "8. SIN INFO",
          "9. SIN INFO",
          "10. SIN INFO",
          "11. SIN INFO",
          "12. SIN INFO",
          "13. SIN INFO",
          "14. SIN INFO",
          "15. SIN INFO",
        ]
      },
      visitante: {
        nombre: "Casi",
        jugadores: [
          "1. Felipe Piñero",
          "2. Tomás Gongora",
          "3. Facundo Hermida",
          "4. Tomás Rossignoli",
          "5. Alejo Gomez Salaverri",
          "6. Agustín Obiglio",
          "7. Facundo Arroqui",
          "8. Facundo Soave",
          "9. Ignacio Sanchez",
          "10. Marcos Harismendy",
          "11. Santiago Guerzoni",
          "12. Joaquín Harismendy",
          "13. Wenceslao Agnese",
          "14. Mateo Baldrich",
          "15. Fernando Mantilla",
        ]
      }
    },

    hindu_b_cuba_b: {
      local: {
        nombre: "HINDU",
        jugadores: [
          "1. C Rivolta",
          "2. T Barboni",
          "3. D Romero",
          "4. N Ferrando",
          "5. T Mateucci",
          "6. A Silva",
          "7. V Borgueahut",
          "8. F Igarreta",
          "9. G Abad",
          "10. Jp Alvarez",
          "11. B Barbeira",
          "12. Jb Reyes",
          "13. T Novella Frey",
          "14. A Morelli",
          "15. S Astarloa",
        ]
      },
      visitante: {
        nombre: "CUBA",
        jugadores: [
          "1. Vicetto",
          "2. Malnatti",
          "3. A. Fernandez",
          "4. P. Cayol",
          "5. Zabalza",
          "6. Lalanne",
          "7. Mas",
          "8. Vallejo",
          "9. Coppola",
          "10. Peres",
          "11. Dousset",
          "12. Cafferata",
          "13. Zonca",
          "14. Kassai",
          "15. Carreras",
        ]
      }
    },

    champagnat_b_buenos_aires_b: {
      local: {
        nombre: "Champagnat",
        jugadores: [
          "1. Tomas Devoto",
          "2. Felipe Berardi",
          "3. Martin Rinaldelli",
          "4. Ian Lucca Femia",
          "5. Agustin Pascuzzi",
          "6. Joaquin Chiesa",
          "7. Marcos Del Sel",
          "8. Garcia Felipe Retes",
          "9. Pedro Blousson",
          "10. Tomas Kennedy",
          "11. Carlos Agustin De Nevares",
          "12. Pedro Hileman",
          "13. Iñaki Moreno Hueyo",
          "14. Justo Rocha",
          "15. Tobias Imbrosciano",
        ]
      },
      visitante: {
        nombre: "Buenos Aires",
        jugadores: [
          "1. Santiago Radakovits",
          "2. Guido Marchesi",
          "3. Matías Middleton",
          "4. Joaquín Carmona",
          "5. Marcos Middleton",
          "6. Felipe Montobbio",
          "7. Jaime Mc Grech",
          "8. Tomás Merlo",
          "9. Ignacio Acosta Pimentel",
          "10. Fabrizio Invernizzi",
          "11. Tomás Wetzler",
          "12. Franco Remy",
          "13. Francisco Degui",
          "14. Tomás Del Frade",
          "15. Tomás Llauro",
        ]
      }
    },

    newman_b_sic_b: {
      local: {
        nombre: "Newman",
        jugadores: [
          "1. Iñaki De Elizalde",
          "2. Gonzalo Iribarne",
          "3. Alfonso Angelino",
          "4. Tomás Uranga",
          "5. Francisco Shaw",
          "6. Juan Pablo Dacunto",
          "7. Marcos Brandi",
          "8. Justo Saravia",
          "9. Simón Bullrich",
          "10. Juan Benedit",
          "11. Cruz Pereyra",
          "12. Bautista Iribarne",
          "13. Eduardo Torello",
          "14. Juan Lanza",
          "15. Bautista Segura",
        ]
      },
      visitante: {
        nombre: "Sic",
        jugadores: [
          "1. F G. Ketelhon",
          "2. T Ayerza Sojo",
          "3. B Anchoni",
          "4. L Emiliani",
          "5. J Palacios",
          "6. F Roques",
          "7. F Pereyra",
          "8. A Caravajal",
          "9. B Sascaro",
          "10. B Delor",
          "11. J Perez Cobo",
          "12. B Brocca",
          "13. E Rubio",
          "14. T Ramallo",
          "15. F Cartaña",
        ]
      }
    },

  },

  // ── PRE-INTERMEDIA C ─────────────────────────────────────────
  preinter_c: {

    sic_c_los_matreros_c: {
      local: { nombre: "SIC", jugadores: ["1. Tognella, A","2. Chain, S","3. Pereyra, I","4. Palacios, J","5. Gauto, M","6. Vitton, M","7. Caravajal, F","8. Caravajal, A","9. M Tomietto, R","10. Ramallo, B","11. Wetzler, J","12. Brocca, B","13. Rubio, E","14. Perez Cobo, J","15. Cartaña, F"] },
      visitante: { nombre: "Los Matreros", jugadores: ["1. Paz, Tobías","2. Goméz, Santiago","3. Polliccino, Nicolás","4. Lerda, Agustín","5. Chayan, Joaquín","6. Aramburo, Mateo","7. Martínez, Federico","8. Francini, Franco","9. Olguin, Juan Francisco","10. Argañaraz, Tao","11. Costa, Juan Ignacio","12. Arce, Tobías","13. McCormack, Liam","14. Sturla, Felipe","15. Indart, Iñaki"] }
    },
    buenos_aires_c_rc_c_alumni_c: {
      local: { nombre: "Buenos Aires C&RC", jugadores: ["1. RADAKOVITS, Santiago","2. HALPERÍN, Pedro","3. PANIQUE, Esteban","4. CARMONA, Joaquín","5. NEGRI BERNASCONI, Francisco","6. PODESTÁ, Santino","7. GISBERT, Juan Pedro","8. CHAVEZ, Lucas","9. JUNCO, Alejandro","10. ALURRALDE, Felipe","11. HABIB, Lucas","12. PEREZ FERNANDEZ, Bautista","13. ZUNINO, Vladimir","14. ESPINOZA, Nahuel","15. TICINESE, Bautista"] },
      visitante: { nombre: "Alumni", jugadores: ["1. MALLEA GIL, Toribio","2. GARRI, Juan","3. VIZGARRA, Vladimir","4. MAINARDI, Pedro","5. MILTHALER, Diegro","6. CONSTANTINO, Juan","7. TRIGILI, Francisco","8. DEL CARRIL, Santiago","9. FILGUEIRA, Gonzalo","10. BERRETA, Marcos","11. MARTINEZ, Tobias","12. HARDIE, Bautista","13. CAFONCELLI, Ciro","14. SEGURA, Lisandro","15. CONTE, Nicolas"] }
    },
    los_tilos_c_la_plata_c: {
      local: { nombre: "Los Tilos", jugadores: ["1. TEJEDA, Simon","2. CORTOPASSO, Luca","3. FRITZE, Owen","4. GUIGLIONI, Manuel","5. COSTAS, Juan Ignacio","6. GIORGIO, Valentino","7. BUCCIGROSSI, Valentin","8. PIRRONE, Matias","9. CAMAÑO, Conrado","10. OSACAR CAPDEBARTHE, Juan","11. CACERES, Matias","12. FAVRE, Francisco","13. FIORITO, Rafael","14. FUMAROLA, Francisco","15. PIOLI, Federico"] },
      visitante: { nombre: "La Plata", jugadores: ["1. SIN INFO","2. SIN INFO","3. SIN INFO","4. SIN INFO","5. SIN INFO","6. SIN INFO","7. SIN INFO","8. SIN INFO","9. SIN INFO","10. SIN INFO","11. SIN INFO","12. SIN INFO","13. SIN INFO","14. SIN INFO","15. SIN INFO"] }
    },
    cuba_c_champagnat_c: {
      local: { nombre: "CUBA", jugadores: ["1. MILBERG","2. ROSSI","3. IUNES","4. BARCHI","5. CENICEROS","6. BOSCH, B.","7. ROCHA","8. DEMARIA, F.","9. BENEDIT","10. MAGUIRE, P.","11. PASCUAL","12. TROPEA","13. DORADO","14. LOPEZ PUERTO","15. CIPOLLA"] },
      visitante: { nombre: "Champagnat", jugadores: ["1. FERNANDEZ STALLA, JUSTO","2. GOURDY, ROSENDO","3. VIZUET, TOMAS","4. SOJKA, NICOLAS","5. ALEGRIA, FELIPE","6. HEINRICH, JOSÉ","7. DISKIN, FRANCISCO","8. RIOS, AGUSTIN","9. BISBAL, IGNACIO","10. GONZALEZ RICCIARDI, FRANCISCO","11. MANCARDO, JUAN CRUZ","12. ECHEZARRETA, NICOLAS","13. BATTILANA, SANTOS","14. VIGLIONE, AGUSTIN","15. GALARCE, AGUSTIN"] }
    },
    belgrano_athletic_c_newman_c: {
      local: { nombre: "Belgrano Athletic", jugadores: ["1. PUTRUELE, FELIPE","2. GARBINI, AUGUSTO","3. SERENELLI, JUAN CRUZ","4. PENOUCOS, GREGORIO","5. PETRAULT, FRANCISCO","6. ROIG, IÑAKI","7. GENTILE, ÁLVARO","8. FILGUEIRAS, MATÍAS","9. GALLIA, FELIPE","10. CASANELLO, GUIDO","11. PEREZ, MANUEL","12. CASAGNE, TOMÁS","13. DIPASCUALE, TOMÁS","14. BLANCO, BAUTISTA","15. RIZZI, DOMINGO"] },
      visitante: { nombre: "Newman", jugadores: ["1. NAVEIRO, Joaquín","2. GAVIÑA, Segundo","3. URTUBEY, Santiago","4. SPORLEDER, Benicio","5. CÁCERES, Juan Manuel","6. FERRECIO, Tomás","7. OLMOS, Silvestre","8. BERTON MORENO, Tomás","9. IRIBARNE, Ignacio","10. KEENA, Manuel","11. GRANATO, Wenceslao","12. IRIBARNE, Bautista","13. REINWICK, Federico","14. RAMOS, Facundo","15. ROCA, Santino"] }
    },
    atletico_del_rosario_c_regatas_bella_vista_c: {
      local: { nombre: "Atlético del Rosario", jugadores: ["1. MINOLDO, Facundo","2. MORELLI, Pedro","3. BOUTRON, Facundo","4. RAMELLA, Juan","5. GUILLERME, Teo","6. VIOLA, Ignacio","7. ZURCHER, Tomás","8. RIGHI, Nicolás","9. SALVATIERRA, Matias","10. CAMPAGNA, Lucio","11. DRI, Juan","12. ANTUÑA, Nicolás","13. DE LA TORRE, Francisco","14. ZARATE, Francisco","15. ARGAÑARAZ, Juan"] },
      visitante: { nombre: "Regatas Bella Vista", jugadores: ["1. Bourse, Thiago","2. Goschian, Facundo","3. Alberro, Santiago","4. Bleif, Santiago","5. de la Torre, Pio","6. Mihura, Sixto","7. Gatica, Juan Ignacio","8. Giavedoni, Tomás","9. de la Torre, Manuel","10. Estrada, Facundo","11. Delfino, Benito","12. Aguilar, Martín","13. Norwint, Juan Pablo","14. Guerra, Benjamín","15. Racedo, Ignacio"] }
    },
    casi_c_hindu_c: {
      local: { nombre: "CASI", jugadores: ["1. Tomás VISOS","2. Tomás SOUVERBIELLE","3. Justo JAUREGUI","4. Francisco BERROCAL","5. Federico MALATTO","6. Federico BAQUE","7. Facundo ARROQUI","8. Nicolás DONDI","9. Santino CREMONA","10. Francisco TEMPONE","11. Juan Segundo OLIVERO","12. Marcus FRANK","13. Mateo BALDRICH","14. Tobías GORTARI","15. Nicolás CRESTA"] },
      visitante: { nombre: "Hindu", jugadores: ["1. QUIROGA, ISAIAS","2. BARBONI, TEO","3. DE CASTRO, NICOLAS","4. BONO, DANTE","5. DE LA CARCOVA, JUAN IGNACIO","6. CARRIZO, FELIPE","7. REY, MAXIMILIANO","8. MALETTI, T","9. BARBIERI, BENJAMIN","10. AGRADI, MATEO","11. SERTAL, M","12. VERA, B","13. ANTONIO, M","14. LEDESMA, S","15. ARCCIDIACONO, N"] }
    },

    // ── FECHA 3 ────────────────────────────────────────────────
        alumni_c_belgrano_c: {
      local: {
        nombre: "Alumni",
        jugadores: [
          "1. Toribio Mallea Gil",
          "2. Juan Garri",
          "3. Vladimir Vizgarra",
          "4. Matias Soto Quintus",
          "5. Facundo Paz",
          "6. Maximo Smith",
          "7. Francisco Trigili",
          "8. Santiago Del Carril",
          "9. Gonzalo Filgueira",
          "10. Marcos Berreta",
          "11. Gonzalo Guilligan",
          "12. Bautista Hardie",
          "13. Ciro Cafoncelli",
          "14. Lisandro Segura",
          "15. Nicolas Conte",
        ]
      },
      visitante: {
        nombre: "Belgrano",
        jugadores: [
          "1. Felipe Putruele",
          "2. Lautaro Calaszibetta",
          "3. Juan Cruz Serenelli",
          "4. Marcos Penoucos",
          "5. Francisco Petrault",
          "6. Iñaki Roig",
          "7. Álvaro Gentile",
          "8. Joaquín Bellocq",
          "9. Marcos Gallegos",
          "10. Juan Cabrera",
          "11. Manuel Perez",
          "12. Bautista Beato",
          "13. Tomás Dipascuale",
          "14. Pedro Ottino",
          "15. Bautista Blanco",
        ]
      }
    },

    los_matreros_c_atletico_del_rosario_c: {
      local: {
        nombre: "Los Matreros",
        jugadores: [
          "1. SIN INFO",
          "2. SIN INFO",
          "3. SIN INFO",
          "4. SIN INFO",
          "5. SIN INFO",
          "6. SIN INFO",
          "7. SIN INFO",
          "8. SIN INFO",
          "9. SIN INFO",
          "10. SIN INFO",
          "11. SIN INFO",
          "12. SIN INFO",
          "13. SIN INFO",
          "14. SIN INFO",
          "15. SIN INFO",
        ]
      },
      visitante: {
        nombre: "Atletico del Rosario",
        jugadores: [
          "1. Facundo Minoldo",
          "2. Gaspar Gimenez",
          "3. Alberto Achaval",
          "4. Pablo Martínez",
          "5. Teo Guillerme",
          "6. Ignacio Viola",
          "7. Tomás Zurcher",
          "8. Pedro Geminelli",
          "9. Benjamin Castagna",
          "10. Lucio Campagna",
          "11. Alvaro Marchetti",
          "12. Guido Vidalle",
          "13. Francisco De La Torre",
          "14. Francisco Zarate",
          "15. Juan Argañaraz",
        ]
      }
    },

    regatas_c_los_tilos_c: {
      local: {
        nombre: "Regatas",
        jugadores: [
          "1. Facundo Goschian",
          "2. Fernando Castilla",
          "3. F. Rodriguez Denker",
          "4. Santiago Bleif",
          "5. Conrado Friedenreich",
          "6. Sixto Mihura",
          "7. Juan Ignacio Gatica",
          "8. Tomás Giavedoni",
          "9. Santiago de la Torre",
          "10. Santino Pomilio",
          "11. Gonzalo Galli",
          "12. Santiago Lencioni",
          "13. Blas Piñeyro",
          "14. Benjamín Guerra",
          "15. Martín Aguilar",
        ]
      },
      visitante: {
        nombre: "Los Tilos",
        jugadores: [
          "1. Simon Tejeda",
          "2. Luca Cortopasso",
          "3. Owen Fritze",
          "4. Manuel Guiglioni",
          "5. Juan Ignacio Costas",
          "6. Valentino Giorgio",
          "7. Valentin Buccigrossi",
          "8. Matias Pirrone",
          "9. Facundo Moreyra",
          "10. Beltran Alayes",
          "11. Matias Caceres",
          "12. Francisco Favre",
          "13. Rafael Fiorito",
          "14. Juan M Mendinueta",
          "15. Francisco Fumarola",
        ]
      }
    },

    la_plata_c_casi_c: {
      local: {
        nombre: "La Plata",
        jugadores: [
          "1. SIN INFO",
          "2. SIN INFO",
          "3. SIN INFO",
          "4. SIN INFO",
          "5. SIN INFO",
          "6. SIN INFO",
          "7. SIN INFO",
          "8. SIN INFO",
          "9. SIN INFO",
          "10. SIN INFO",
          "11. SIN INFO",
          "12. SIN INFO",
          "13. SIN INFO",
          "14. SIN INFO",
          "15. SIN INFO",
        ]
      },
      visitante: {
        nombre: "CASI",
        jugadores: [
          "1. Justo Jauregui",
          "2. Tomás Souverbielle",
          "3. Marcos Rebollo",
          "4. Francisco Berrocal",
          "5. Tadeo Rey",
          "6. Iñaki Bertres",
          "7. Federico Malatto",
          "8. Nicolás Dondi",
          "9. Ezequiel Di Pauli",
          "10. Francisco Tempone",
          "11. Nicolás Cresta",
          "12. Bautista Esquivel",
          "13. Santiago Flores",
          "14. Tobías Gortari",
          "15. Fermín Holmgren",
        ]
      }
    },

    hindu_c_cuba_c: {
      local: {
        nombre: "HINDU",
        jugadores: [
          "1. N De Castro",
          "2. S Peñaloza",
          "3. T Mir",
          "4. D Resnick",
          "5. M Batalla",
          "6. O Martinez",
          "7. D Bono",
          "8. T Maletti",
          "9. B Barbieri",
          "10. M Agradi",
          "11. B Vera",
          "12. S Ledesma",
          "13. M Antonio",
          "14. E Damonte",
          "15. T Alvarez",
        ]
      },
      visitante: {
        nombre: "CUBA",
        jugadores: [
          "1. Millberg",
          "2. Rossi",
          "3. Iunes",
          "4. Young",
          "5. Ceniceros",
          "6. S. Bosch",
          "7. Glucksmann",
          "8. Diaz Valdez",
          "9. Benedit",
          "10. Perrotta",
          "11. B. Tropea",
          "12. Roca",
          "13. Saravia",
          "14. E. Figueroa Bunge",
          "15. Randle",
        ]
      }
    },

    champagnat_c_buenos_aires_c: {
      local: {
        nombre: "Champagnat",
        jugadores: [
          "1. Valentin Chiesa",
          "2. Rosendo Gourdy",
          "3. Tomas Vizueta Arralde",
          "4. Nicolas Sojka",
          "5. Borja Del Sel",
          "6. José Heinrich",
          "7. Mateo Fernandez",
          "8. Agustin Rios",
          "9. Ignacio Bisbal",
          "10. Francisco José Ugarte",
          "11. Simon Marin",
          "12. Nicolas Echezarreta",
          "13. Santos Battilana",
          "14. Agustin Viglione",
          "15. Francisco Gonzalez Ricciardi",
        ]
      },
      visitante: {
        nombre: "Buenos Aires",
        jugadores: [
          "1. Esteban Panique",
          "2. Pedro Halperín",
          "3. Agustín Piedrabuena",
          "4. Nicolás Werner",
          "5. Francisco Negri Bernasconi",
          "6. Santino Podestá",
          "7. Lorenzo Gonzalez",
          "8. Lucas Chavez",
          "9. Alejandro Junco",
          "10. Tobías Gallino",
          "11. Lucas Habib",
          "12. Bautista Almasque",
          "13. Vladimir Zunino",
          "14. Nahuel Espinoza",
          "15. Bautista Ticinese",
        ]
      }
    },

    newman_c_sic_c: {
      local: {
        nombre: "Newman",
        jugadores: [
          "1. Bautista Aramburu",
          "2. Zenon Olmos",
          "3. Santiago Urtubey",
          "4. Benicio Sporleder",
          "5. Juan Manuel Cáceres",
          "6. Nicolás Testoni",
          "7. Tomás Ferrecio",
          "8. Tomás Berton Moreno",
          "9. Ignacio Iribarne",
          "10. Iñaki Jaca Otaño",
          "11. Wenceslao Granato",
          "12. Federico Reinwick",
          "13. José Busto",
          "14. Alfonso Silva",
          "15. Mateo Dupont",
        ]
      },
      visitante: {
        nombre: "Sic",
        jugadores: [
          "1. A Tognella",
          "2. J Marples",
          "3. I Pereyra",
          "4. M Scannapieco",
          "5. I Vallier",
          "6. J Cariglia",
          "7. M G Chiappe",
          "8. B F. Gorgolas",
          "9. T Garriga",
          "10. B Ramallo",
          "11. J Wetzler",
          "12. G Miguens",
          "13. F Rodriguez Delor",
          "14. M Ibañez",
          "15. E Roque Moreno",
        ]
      }
    },

  },

  // ── PRE-INTERMEDIA D ─────────────────────────────────────────
  preinter_d: {

    sic_d_los_matreros_d: {
      local: { nombre: "SIC", jugadores: ["1. Pezzenatti, A","2. Ayersa Sojo, T","3. G. Bonorino, F","4. Cariglia, J","5. Chain, I","6. Andrada, N","7. Galmarini, F","8. Gonzalez Chiappe, M","9. Gimenez Moro, B","10. F. De Oliveira, F","11. Ibañez, M","12. Miguens, G","13. Rodriguez Delor, F","14. Filella, F","15. Roque Moreno, E"] },
      visitante: { nombre: "Los Matreros", jugadores: ["1. Luna, Ramiro","2. Tripi, Lucas","3. Salina, Kevin","4. Arancibia, Nicolás","5. Monteverde, Joaquín","6. Jauregui, Tomás","7. Rusecki, Azael","8. Ugartemendia, Iñaki","9. Marquevich, Tomás","10. Ramos, Daniel","11. Vizconti, Juan Ignacio","12. Baron, Santiago","13. Sanchéz, Matias","14. Peréz, Bautista","15. Fernandéz, Thiago"] }
    },
    buenos_aires_c_rc_d_alumni_d: {
      local: { nombre: "Buenos Aires C&RC", jugadores: ["1. BELLO, Ramiro","2. MALLO, Gonzalo","3. PONTE, Federico","4. TORRES OLANO, Faustino","5. ARIZIO, Felipe","6. HAYMES BIEDMA, Benjamín","7. REDINI, Santiago","8. BARRIENTOS, Martín","9. TICINESE, Benjamín","10. RUSSO, Francisco","11. TANOIRA, Dimas","12. ALMASQUE, Bautista","13. SLUGA, Juan Pedro","14. FERREIRO, Matías","15. GARCÍA Y BADIOLA, Mateo"] },
      visitante: { nombre: "Alumni", jugadores: ["1. Rosas, Pancho","2. Aragon, Marcos","3. Romero, Facundo","4. Montanucci, Fabricio","5. Maine, Fran","6. Ambroa, Joaco","7. Varela, Juan Manuel","8. zicarelli, Juan Pablo","9. Pietra, Manuel","10. Conte, Lucas","11. Guerrero, Facu","12. Bruna, Emiliano","13. Venier, Francisco","14. Domec Chantry, Joaquin","15. Suppicich, Mateo"] }
    },
    los_tilos_d_la_plata_d: {
      local: { nombre: "Los Tilos", jugadores: ["1. BENITO, Felipe","2. ARTOLA, Martin","3. RIAL, Juan Pablo","4. WILLI, Francisco","5. MENDEZ, Paco","6. ARIGOS, Fermin","7. OGRESTA, Santino","8. MAGI, Nicolas","9. RUIZ LOPEZ, Juan Cruz","10. BARES, Joaquin","11. BUCCIGROSSI, Federico","12. GIL, Lautaro","13. VITALE, Bautista","14. DE CUCCO, Simon Diego","15. GONZALEZ, Tomas"] },
      visitante: { nombre: "La Plata", jugadores: ["1. SIN INFO","2. SIN INFO","3. SIN INFO","4. SIN INFO","5. SIN INFO","6. SIN INFO","7. SIN INFO","8. SIN INFO","9. SIN INFO","10. SIN INFO","11. SIN INFO","12. SIN INFO","13. SIN INFO","14. SIN INFO","15. SIN INFO"] }
    },
    cuba_d_champagnat_d: {
      local: { nombre: "CUBA", jugadores: ["1. MOLINA","2. RODRIGUEZ, S.","3. CARULLO","4. PONCE","5. YOUNG","6. PEÑA","7. AZZOLINA","8. DIAZ VALDEZ","9. ELEWAUT","10. CANO","11. MEDINA","12. BAVIO","13. VIALE","14. CASTRO NEVARES","15. CASAURANG"] },
      visitante: { nombre: "Champagnat", jugadores: ["1. DEVOTO, TOMAS","2. CHIESA, VALENTIN","3. AVILA, LEANDRO","4. CHUTE, MATEO","5. HERRERA, MARIANO","6. MONETA JUAN CRUZ","7. PRADO VALDEZ, FACUNDO","8. SERE, GONZALO","9. PEREA, TORIBIO","10. MORENO HUEYO, JOAQUIN","11. AMADEO, MIGUEL","12. CARRIZO, PEDRO","13. VAZQUEZ, BAUTISTA","14. ZAVALA, FELIPE","15. ECHEZARRETA SANTOS"] }
    },
    belgrano_athletic_d_newman_d: {
      local: { nombre: "Belgrano Athletic", jugadores: ["1. HSU, TOM","2. GOMEZ BOYNES, GONZALO","3. SUEYRO, SIMON","4. URQUIZA, FRANCISCO","5. SCOLARI, ANTONIO","6. BEVERAGGI, JAIME","7. SEGUÍ, MARCO","8. GENITLI, ÁLVARO","9. BEATO, MANUEL","10. LINDON, BENJAMIN","11. ARGONZ, FACUNDO","12. CASSAGNE, TOMÁS","13. CASTIGLIONE, FRANCO","14. OTTINO, FRANCO","15. TERCEÑO, GONZALO"] },
      visitante: { nombre: "Newman", jugadores: ["1. ARAMBURU, Bautista","2. ARAMBURU, Marcos","3. WALKER, Bautista","4. CÁCERES, Wenceslao","5. GOWLAND, Esteban","6. VARELA, Gonzalo","7. IRARRAZABAL, Bautista","8. LANUSSE, Bautista","9. DAVEL, Lucas","10. VIVEQUIN, Cruz","11. SILVA, Alfonso","12. PERNISEK, Federico","13. DAIREAUX, Mateo","14. ITHURRALDE, Joaquín","15. BONAMICO, Benjamín"] }
    },
    atletico_del_rosario_d_regatas_bella_vista_d: {
      local: { nombre: "Atlético del Rosario", jugadores: ["1. BISMAR, Uriel","2. ALBRICHI, Mateo","3. ARGUELLO, Gonzalo","4. DEL CERRO, Juan","5. MONTEFELTRO, Santiago","6. FARÍAS, Alvaro","7. MORASSO, Juan","8. SCHIEBERT, Ciro","9. MARTÍNEZ, Gonzalo","10. BUELONI, Ricardo","11. MARCHETTI, Alvaro","12. ROSITO, Valentin","13. PEREZ, Lautaro","14. BARRERA, Francisco","15. HIDALGO, Juan"] },
      visitante: { nombre: "Regatas Bella Vista", jugadores: ["1. Muñoz, Francisco","2. Castro Juárez, Felipe","3. Nuñez, Daniel","4. Fassi, Pedro","5. Castro Juarez, Tomás","6. Basombrío, José","7. Ryan, Felipe","8. Sanchez, Pedro","9. Sapia, José","10. de la Torre, Santiago","11. Rodríguez, Santiago","12. Piñeyro, Blas","13. Prado, Benjamín","14. Romero Victorica, Marcos","15. Guerriero, Joaquín"] }
    },
    casi_d_hindu_d: {
      local: { nombre: "CASI", jugadores: ["1. Matías LORENZO","2. Santiago LADELFA","3. Bartolomé OCAMPO","4. Agustín MERCIER","5. Tomás GORTARI","6. Tomás DI LAURO","7. Tomás VITALE","8. Benito MENDIVIL","9. Agustín KALAUZ","10. Facundo RAGGI","11. Guido GUIANNONI","12. Santiago FLORES","13. Octavio NARVAJA","14. Pedro GUYOT","15. Fermín HOLMGREN"] },
      visitante: { nombre: "Hindu", jugadores: ["1. GENDELMAN, B","2. FERNANDEZ, F","3. MIR, T","4. LEMOS, S","5. RESNICK, D","6. MARTÍNEZ, O","7. DEBUCHY, G","8. WAGNER, S","9. TERRENI, J","10. ALVAREZ, J","11. BIDONE, T","12. SIERRA, V","13. RIVA, E","14. CAPALBO, J","15. GARAT, C"] }
    },

  },

  // ── PRE-INTERMEDIA E ─────────────────────────────────────────
  preinter_e: {},

  // ── PRE-INTERMEDIA F ─────────────────────────────────────────
  preinter_f: {},

  // ── M22 ──────────────────────────────────────────────────────
  m22: {},

  // ── PRIMERA A ────────────────────────────────────────────────
  primera_a: {},

  // ── PRIMERA B ────────────────────────────────────────────────
  primera_b: {},

  // ── PRIMERA C ────────────────────────────────────────────────
  primera_c: {},

  // ── SEGUNDA ──────────────────────────────────────────────────
  segunda: {},

  // ── TERCERA ──────────────────────────────────────────────────
  tercera: {},

};
