const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { SECRET_OR_KEY } = require('../../config/Keys');
const User = require('../../models/User');


// @route   POST api/user/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  // Validation here
  errors = { email: 'This E-Mail is already taken' };
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(409).json(errors);
      const newUser = new User({ first_name, last_name, email, password });

      bcrypt.genSalt(10,(err, salt) => {
        if(err) throw err;
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(() => res.json({ success: true }))
            .catch(err => res.status(400).json({ error: 'Ooops'}))
        });
      });
    })
    .catch(err => res.status(400).json({ error: 'Ooops'}));
});


// @route   GET api/user/sign-in
// @desc    SignIn User / Returning JWT Token
// @access  Public
router.post('/sign-in', (req, res) => {
  const { email, password } = req.body;
  // Validation here
  errors = { email: 'Invalid E-Mail or Password', password: 'Invalid E-Mail or Password' };
  
  User.findOne({ email })
    .then(user => {
      if (!user) return res.status(400).json(errors);
      const { _id } = user;

      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(!isMatch) return res.status(404).json(errors);
          jwt.sign(_id, SECRET_OR_KEY, { expiresIn: 3600 }, (err, token) => {
            res.cookie('w_auth', token).status(200).json({ isAuth: true })
          });
        })
        .catch(err => res.status(400).json({ error: 'Ooops' }));
    })
    .catch(err => res.status(400).json({ error: 'Ooops' }))
});


module.exports = router;