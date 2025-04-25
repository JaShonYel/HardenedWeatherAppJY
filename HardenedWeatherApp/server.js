import express from 'express';
import mysql from 'mysql2';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({ path: './DBConfig.env' });

const app = express();
const port = 3000;

// Enable CORS cuz shit dont wanna work otherwise
app.use(cors());


app.use(express.json());


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
    console.log('Connected to the database.');
});


app.post('/log', (req, res) => {
    const { zip, weatherData } = req.body;

    if (!zip || !weatherData) {
        return res.status(400).send('Missing required fields: zip or weatherData');
    }

    const log = { zipcode: zip, weather_data: JSON.stringify(weatherData) };
    const query = 'INSERT INTO logs SET ?';

    db.query(query, log, (err, result) => {
        if (err) {
            console.error('Error inserting log:', err);
            return res.status(500).send('Error logging data');
        }
        console.log('Log inserted:', result);
        res.status(201).send('Weather data logged successfully');
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});