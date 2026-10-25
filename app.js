const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/about', express.static('public/about.html'));

// app.get('/a', (req, res) => {
//   res.send('Hello, World! This is my first server.');
// });

// app.get('/about', (req, res) => {
//   res.send('This is the about page. I built this server myself!');
// });
 
app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html');
});

app.get('/api/time', (req, res) => {
  res.json({
    time: new Date().toLocaleTimeString(),
    date: new Date().toLocaleDateString()
  });
});

app.get('/api/greeting', (req, res) => {
  const name = req.query['name']
  // console.log(name);
  res.send(`Hello ${name}!`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

