const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Read and parse the JSON data from users.json
const userData = JSON.parse(fs.readFileSync('users.json', 'utf8'));

// Authenticate a user
app.post('/login', (req, res) => {
  const { username, password, role } = req.body;
  const user = userData.users.find(
    (user) => user.username === username && user.password === password && user.role === role
  );

  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(401).json({ success: false, message: 'Authentication failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
