const router = require('express').Router();
const path = require('path');
const withAuth = require('../../middleware/auth');

const profile = require('./profile-page');
const dashboard = require('./dashboard-page');
const login = require('./login-page');
const allCars = require('./carpedia');


router.use('/profile', withAuth, profile);

router.use('/dashboard', dashboard);

router.use('/login', login);

router.use('/cars', allCars)

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