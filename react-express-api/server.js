const express = require('express');
const cors = require("cors");
const fs = require('fs');
const path = require('./STUDENTS_MOCK_DATA.json'); 

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/students', (req, res) => {
    const filePath = path.join(__dirname, 'data', 'STUDENTS_MOCK_DATA.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send(`Internal Server Error: ${err.message}`);
            return;
        }

        const students = JSON.parse(data);
        res.json(students);
    });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
