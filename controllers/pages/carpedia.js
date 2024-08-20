const router = require('express').Router();
const { Car } = require('../../models');

router.get('/', async (req, res) => {
try {
    const carData = await Car.findAll({
        raw: true,
        nest: true,
    });

    res.render('Carpedia', {
        logged_in: true,
        carData
    });
} catch (err) {
    res.status(500).json(err);
}
});


module.exports = router;
