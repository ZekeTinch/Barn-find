const router = require('express').Router();
const { User, Car } = require('../../models');

router.get('/', async (req, res) => {
try {
    const collectorData = await User.findAll({
        where: {
            isPublic: true
        },
        include: [Car],
        raw: true,
        nest: true,
    });

    console.log(collectorData);

    // find all users with public profiles
    res.render('collector', {
        logged_in: true,
        collectorData
    });
} catch (err) {
    res.status(500).json(err);
}
});

router.get('/:id', async (req, res) => {
    try {
        const collectorData = await User.findByPk(req.params.id, {
            include: [Car],
            raw: true,
            nest: true,
        });

        // if (!collectorData.isPublic) {
        //     res.redirect('/');
            // return;
        // }
    
        console.log(collectorData);
    
        res.render('collector', {
            logged_in: true,
            collectorData
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
