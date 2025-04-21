// Zenbakien zerrenda bat sortu
const zenbakiak = [1, 2, 3, 4, 5];

// Erabiltzailearen datuak objektu batean
const erabiltzailea = {
    izena: "Mikel",
    abizena: "Etxeberria",
    adina: 25
};

// Zenbakiak batu funtzio batekin
function zenbakiakBatu(zbk1, zbk2) {
    // Bi zenbaki batu eta emaitza itzuli
    return zbk1 + zbk2;
}

// Array-aren zenbakiak bikoiztu map erabiliz
const bikoiztuak = zenbakiak.map((zbk) => {
    return zbk * 2;
});

// Kontsolan mezuak erakutsi
console.log("Kaixo mundua!"); // Agurra
console.log("Zenbakiak:", zenbakiak);
console.log("Zenbaki bikoiztuak:", bikoiztuak);
console.log("3 + 5 =", zenbakiakBatu(3, 5));
console.log("Erabiltzailea:", erabiltzailea.izena, erabiltzailea.abizena);
