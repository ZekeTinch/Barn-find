const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');


// Use withAuth middleware to prevent access to route
router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      raw: true,
      nest: true,
    });

    res.render('profile', {
      ...userData,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
