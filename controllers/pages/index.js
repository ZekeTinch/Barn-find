const router = require('express').Router();
const path = require('path');
const withAuth = require('../../middleware/auth');

const profile = require('./profile-page');
const dashboard = require('./dashboard-page');
const login = require('./login-page');
const carpedia = require('./carpedia');
const listings = require('./listings-page');
const collector = require('./collectors-page');
const signUp = require('./sign-page');

router.use('/profile', profile);

router.use('/dashboard', dashboard);

router.use('/login', login);

router.use('/carpedia', withAuth, carpedia);

router.use('/listings', listings);

router.use('/collectors', collector);

router.use('/signup', signUp)

router.get('/', (req, res) => {
  return res.render('welcome', {
    logged_in: req.session.logged_in
  });
});

router.get('*', (req, res) => {
  return res.render('404', {
    logged_in: req.session.logged_in
  });
});

module.exports = router;