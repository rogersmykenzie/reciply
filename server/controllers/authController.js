const { User } = require('../mongo/models');
const bcrypt = require('bcrypt');

const registerUser = (req, res) => {
  const { email, password } = req.body;
  User
    .find({ email })
    .then((results) => {
      if(results.length) {
        res
          .status(500)
          .json({
            message: 'email exists',
          });
      } else {
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({ email, password: hashedPassword });
        newUser
          .save()
          .then(user => {
            req.session.user = {
              email: user.email
            };
            res.status(200).json(user)
          })
          .catch(e => res.status(500).json({
            message: 'error saving user',
            error: e,
          }));
      }
    }).catch(err => {
      res
        .status(500)
        .json({
          message: 'error searching users',
          error: err,
        })
    })
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  User
    .find({ email })
    .then((matchedUser) => {
      if(matchedUser.length) {
        const { password: hash } = matchedUser[0];
        const doesMatch = bcrypt.compareSync(password, hash);
        if(doesMatch) {
          req.session.user = {
            email: matchedUser[0].email,
          }
          res
            .status(200)
            .json(req.session.user)
        } else {
          res
            .status(500)
            .json({
              message: 'username or password incorrect',
            })
        }
      } else {
        res
          .status(500)
          .json({
            message: 'username or password incorrect',
          })
      }
    }).catch((err) => {
      res
        .status(500)
        .json({
          message: 'error searching users',
          error: err
        })
    })
}

const getUser = (req, res) => {
  res
    .status(200)
    .json(req.session.user || {});
}

const logoutUser = (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
}

module.exports = {
  registerUser,
  loginUser,
  getUser,
  logoutUser
};