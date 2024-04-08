const express = require('express');
const router = express.Router();

// Route de connexion
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  if (username === 'utilisateur' && password === 'motdepasse') {
    req.session.authenticated = true;
    res.send('Connexion réussie');
  } else {
    res.status(401).send('Nom d\'utilisateur ou mot de passe incorrect');
  }
});

router.post('/logout', (req, res) => {
  req.session.authenticated = false;
  res.send('Déconnexion réussie');
});

module.exports = router;
