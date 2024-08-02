const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/bfhl', (req, res) => {
  const { data } = req.body;
  const fullName = "Shivanshu singh";
  const dob = "05-07-2004";
  const email = "sivanshusingh2004@gmail.com";
  const rollNumber = "RA2111003020282";

  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item));
  const highestAlphabet = alphabets.sort((a, b) => b.localeCompare(a, undefined, {sensitivity: 'base'}))[0];

  res.json({
    is_success: true,
    user_id: `${fullName}_${dob}`,
    email: email,
    roll_number: rollNumber,
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet ? [highestAlphabet] : []
  });
});

app.get('/api/bfhl', (req, res) => {
  res.json({
    operation_code: 1
  });
});

module.exports = app;
