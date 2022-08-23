const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Signup
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
        isAdmin: req.body.email === process.env.isAdmin ? true : false,
      });
      user
        .save()
        .then(() =>
          res.status(201).json({
            message: 'Utilisateur créé !',
          })
        )
        .catch((error) =>
          res.status(400).json({
            error,
          })
        );
    })
    .catch((error) =>
      res.status(500).json({
        error,
      })
    );
};

// Login
exports.login = (req, res, next) => {
  User.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          error: 'Utilisateur non trouvé !',
        });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({
              error: 'Mot de passe incorrect !',
            });
          }
          res.status(200).json({
            userEmail: req.body.email,
            userId: user._id,
            isAdmin: req.body.email,
            token: jwt.sign(
              {
                userId: user._id,
              },
              process.env.TOKEN_SECRET,
              {
                expiresIn: '24h',
              }
            ),
          });
        })
        .catch((error) =>
          res.status(500).json({
            error,
          })
        );
    })
    .catch((error) =>
      res.status(500).json({
        error,
      })
    );
};
