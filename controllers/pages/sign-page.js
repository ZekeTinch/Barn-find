const router = require('express').Router();

router.get('/', async (req, res) => {
try {
    // const carData = await Car.findAll({
    //     raw: true,
    //     nest: true,
    // });

    // console.log(carData);

    res.render('signup');
} catch (err) {
    res.status(500).json(err);
}
});


module.exports = router;
