const router = require('express').Router();
const { User, Car } = require('../../models');
const withAuth = require('../../middleware/auth');

// /profile
// Use withAuth middleware to prevent access to route
router.get('/', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [Car],
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

// /profile/cars
// Find's Cars based on user_id
// router.get('/cars', async (req, res) => {
//   try {
//       const userCarData = await Car.findAll({
//           where: {
//               user_id: req.session.user_id,
//           },
//           attributes: ['id', 'model_name', 'class', 'year', 'manufacture_name', 'image', 'user_id', 'for_sale'],
//           include: [
//               {
//                   model: User,
//                   attributes: ['id', 'first_name', 'last_name', 'email', 'password']
//               }
//           ]
//       });
//       res.render('profile', {
//         userCarData,
//         logged_in: true
//       })

//   } catch (err) {
//       res.status(500).json(err);
//   }
// });


module.exports = router;
