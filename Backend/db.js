const mysql = require('mysql2');

// Funkcja do połączenia z bazą danych i odczytania rozmiaru bazy
async function checkDatabaseSize() {
    // Konfiguracja połączenia
    const connection = mysql.createConnection({
        host: 'mysql.mikr.us', // Adres hosta
        user: 'x277',          // Nazwa użytkownika
        password: '81D0_21f3c3', // Hasło
        database: 'db_x277'    // Nazwa bazy danych
    });

    // Łączenie z bazą danych
    connection.connect((err) => {
        if (err) {
            console.error('Błąd połączenia: ' + err.stack);
            return;
        }
        console.log('Połączono jako id ' + connection.threadId);
    });

    // Zapytanie SQL do sprawdzenia rozmiaru bazy danych
    const query = `
        SELECT 
            table_schema AS database_name,
            ROUND(SUM(data_length + index_length) / 1024 / 1024, 2) AS size_in_mb
        FROM 
            information_schema.tables
        WHERE 
            table_schema = 'db_x277' -- Zmień na swoją bazę danych
        GROUP BY 
            table_schema;
    `;

    // Wykonanie zapytania
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Błąd podczas odczytu rozmiaru bazy danych: ' + error.stack);
            return;
        }

        console.log('Rozmiar bazy danych:');
        console.log(results);
    });

    // Zamknięcie połączenia
    connection.end();
}

// Wywołanie funkcji
checkDatabaseSize();