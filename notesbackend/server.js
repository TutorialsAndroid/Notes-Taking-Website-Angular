const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection configuration (update credentials as needed)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'notes_db'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database!');
});

// Create the "notes" table if it doesn't exist
const createTableQuery = `
CREATE TABLE IF NOT EXISTS notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;
connection.query(createTableQuery, (err, result) => {
    if (err) throw err;
    console.log('Notes table ready!');
});

// --- CRUD Endpoints ---

// Get all notes
app.get('/notes', (req, res) => {
    connection.query('SELECT * FROM notes', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Get a single note by id
app.get('/notes/:id', (req, res) => {
    const { id } = req.params;
    connection.query('SELECT * FROM notes WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json(results[0]);
    });
});

// Create a new note
app.post('/notes', (req, res) => {
    const { title, content } = req.body;
    connection.query('INSERT INTO notes (title, content) VALUES (?, ?)', [title, content], (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId, title, content });
    });
});

// Update a note
app.put('/notes/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    connection.query('UPDATE notes SET title = ?, content = ? WHERE id = ?', [title, content, id], (err, results) => {
        if (err) throw err;
        res.json({ id, title, content });
    });
});

// Delete a note
app.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM notes WHERE id = ?', [id], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Note deleted successfully' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
