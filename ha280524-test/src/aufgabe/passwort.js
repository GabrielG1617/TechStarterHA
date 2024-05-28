// Implementiere Funktion um zu prüfen, ob ein gegebener Input min. einen Großbuchstaben enthält
function checkIfGrossbuchstabeVorhanden(imput){
    const grossbuchstabeRegex = /[A-Z]/;
    return grossbuchstabeRegex.test(imput);
   
}

// Implementiere Funktion um zu prüfen, ob ein gegeben Input min. 8 Zeichen hat.
function checkIfLaengeGroesserAcht(imput){
    return imput.length >= 8;
}

// Implementiere Funktion um zu prüfen, ob eine Zahl vorhanden ist.
function checkIfZahlVorhanden(imput){
    const zahlRegex = /[0-9]/;
    return zahlRegex.test(imput);
}

module.exports = {
    checkIfGrossbuchstabeVorhanden,
    checkIfLaengeGroesserAcht,
    checkIfZahlVorhanden
};