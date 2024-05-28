// teste alle Funktionen aus passwort.js hier

const {
    checkIfGrossbuchstabeVorhanden,
    checkIfLaengeGroesserAcht,
    checkIfZahlVorhanden
} = require('./passwort');

test('checkIfGrossbuchstabeVorhanden - should return true if there is at least one uppercase letter', () => {
    expect(checkIfGrossbuchstabeVorhanden('Passwort')).toBe(true);
    expect(checkIfGrossbuchstabeVorhanden('password')).toBe(false);
    expect(checkIfGrossbuchstabeVorhanden('12345')).toBe(false);
    expect(checkIfGrossbuchstabeVorhanden('12345A')).toBe(true);
});

test('checkIfLaengeGroesserAcht - should return true if the input length is at least 8 characters', () => {
    expect(checkIfLaengeGroesserAcht('password')).toBe(true);
    expect(checkIfLaengeGroesserAcht('pass')).toBe(false);
    expect(checkIfLaengeGroesserAcht('12345678')).toBe(true);
    expect(checkIfLaengeGroesserAcht('1234567')).toBe(false);
});

test('checkIfZahlVorhanden - should return true if there is at least one number', () => {
    expect(checkIfZahlVorhanden('password1')).toBe(true);
    expect(checkIfZahlVorhanden('password')).toBe(false);
    expect(checkIfZahlVorhanden('12345')).toBe(true);
    expect(checkIfZahlVorhanden('Passwort')).toBe(false);
});


