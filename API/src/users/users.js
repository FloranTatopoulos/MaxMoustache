const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'theflow',
});

connection.connect(function(err) {
  if (err) {
    console.error('Erreur de connexion à MySQL : ' + err.stack);
    return;
  }
  console.log('Connecté à MySQL avec l\'identifiant ' + connection.threadId);
});

router.post('/', (req, res) => {
  const { username, email } = req.body;
  const sql = 'INSERT INTO users (username, email) VALUES (?, ?)';
  connection.query(sql, [username, email], (err, result) => {
    if (err) {
      console.error('Erreur lors de la création de l\'utilisateur : ' + err.message);
      res.status(500).send('Erreur lors de la création de l\'utilisateur');
      return;
    }
    res.status(201).send('Utilisateur créé avec succès');
  });
});

router.get('/', (req, res) => {
  const sql = 'SELECT * FROM users';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des utilisateurs : ' + err.message);
      res.status(500).send('Erreur lors de la récupération des utilisateurs');
      return;
    }
    res.json(results);
  });
});

router.put('/:id', (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  const sql = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
  connection.query(sql, [username, email, userId], (err, result) => {
    if (err) {
      console.error('Erreur lors de la mise à jour de l\'utilisateur : ' + err.message);
      res.status(500).send('Erreur lors de la mise à jour de l\'utilisateur');
      return;
    }
    res.status(200).send('Utilisateur mis à jour avec succès');
  });
});

router.delete('/:id', (req, res) => {
  const userId = req.params.id;
  const sql = 'DELETE FROM users WHERE id = ?';
  connection.query(sql, [userId], (err, result) => {
    if (err) {
      console.error('Erreur lors de la suppression de l\'utilisateur : ' + err.message);
      res.status(500).send('Erreur lors de la suppression de l\'utilisateur');
      return;
    }
    res.status(200).send('Utilisateur supprimé avec succès');
  });
});

module.exports = router;