const express = require('express');
const app = express();
const port = 3000;

// Definim listele
const hobbies = ['Calatorii' , 'Reparatii' , 'Gradinarit' , 'Petreceri ' , 'Gatitul Traditional ' , 'Calculatoarele '];
const shoppingList = ['Oua' , 'Lapte' , 'Cartofi' , 'Legume' , 'Fructe' , 'Paine'];

// Endpoint pentru lista de hobby-uri
app.get('/hobbies', (req, res) => {
    res.json(hobbies);
});

// Endpoint pentru lista de cumpărături
app.get('/shopping-list', (req, res) => {
    res.json(shoppingList);
});

// Pornim serverul
app.listen(port, () => {
    console.log(`Serverul rulează la http://localhost:${port}`);
});





