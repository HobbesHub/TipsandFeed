const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('./db/diagnostics.json')
    .then((data) => res.json(JSON.parse(data)))
    .catch((err) => res.status(500).json({ error: err.message }));
});

// POST Route for error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  const { theData } = req.body;
  if (!theDataData) {
    return res.status(400).json({ error: 'Invalid data format' });
  }

  const newDiagnostic = {
    id: uuidv4(),
    timestamp: new Date().toString(),
    data: theDataData,
  };

  readAndAppend('./db/diagnostics.json', newDiagnostic)
    .then(() => res.json({ message: 'Data appended successfully', newDiagnostic }))
    .catch((err) => res.status(500).json({ error: err.message }));
});

module.exports = diagnostics;
