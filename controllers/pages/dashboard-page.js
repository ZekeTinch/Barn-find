const router = require('express').Router();
const { User, Car } = require('../../models')

router.get('/', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [Car],
      raw: true,
      nest: true,
    })

    res.render('dashboard', {
      ...userData,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});


module.exports = router;
