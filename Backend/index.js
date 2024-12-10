const express = require('express');
const db = require('./db'); // Import połączenia z bazą danych

const app = express();

app.use(express.json()); // Obsługa JSON w żądaniach

// Endpoint dla głównego adresu "/"
app.get('/', (req, res) => {
  res.send('Backend działa'); // Prosty komunikat na głównym adresie
});

// Endpoint do pobrania użytkowników
app.get('/users', async (req, res) => {
  try {
    const users = await db.query('SELECT * FROM users');
    res.json(users);
  } catch (error) {
    console.error('Błąd zapytania:', error.message);
    res.status(500).json({ error: 'Błąd serwera' });
  }
});

// Uruchomienie serwera
app.listen(3000, () => {
  console.log('Serwer działa na http://localhost:3000');
});