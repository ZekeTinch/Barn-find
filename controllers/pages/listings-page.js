const router = require('express').Router();
const { Car, User } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const listingData = await Car.findAll({
            where: {
                for_sale: true
            },
            attributes: ['id', 'model_name', 'class', 'year', 'manufacture_name', 'image', 'user_id', 'for_sale'],
            include: [User],
            raw: true,
            nest: true,
        });
        res.render('listings', {
            ...listingData
    });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;