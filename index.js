const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const pages = ['surahs', 'hifz', 'prayer-times', 'qibla', 'tasbih', 'tafseer', 'donate', 'logout'];
pages.forEach(page => {
  app.get(/, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', \\.html\));
  });
});

app.listen(port, () => {
  console.log(\Server running on port \\);
});
