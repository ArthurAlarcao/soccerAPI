const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

app.use(express.json());

// Serve the static files
app.use(express.static('public'));
app.use(express.json());


app.get('/table', (req, res) => {
  // Perform the API request and store the data in globalData
  fetch(' https://api.api-futebol.com.br/v1/campeonatos/10/tabela', {
    headers: {
      'Authorization': 'Bearer live_944891a164e3b6d34daa6bff584cb6',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
});

// Set up a route to handle the API request and send the data
app.get('/', (req, res) => {
  // Perform the API request and store the data in globalData
  fetch(' https://api.api-futebol.com.br/v1/campeonatos', {
    headers: {
      'Authorization': 'Bearer live_944891a164e3b6d34daa6bff584cb6',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


  