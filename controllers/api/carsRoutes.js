const router = require('express').Router();
const {Car, User} = require('../../models');


// get all cars
router.get('/', async (req, res) => {
    try{
        const carData = await Car.findAll({
            include:[
                {
                    model: Cars
                },
            ]
        });
        res.status(200).json(carData);
    }catch(err){
        res.status(500).json(err);
    }
});


// get one car by id
router.get('/:id', async (req, res) => {
    try {
    const carData = await Car.findByPk(req.params.id, {
        include: [
        {
            model: Cars,
        }
        ]
    });

    if (!carData) {
        res.status(404).json({ message: 'No Cars found with this id!' });
        return;
    }

    res.status(200).json(carData);
    } catch (err) {
    res.status(500).json(err);
    }
});


// add a car
router.post('/', async (req, res) => {
    try{
const carData = await Car.create({
    model_name: req.body.model_name,
    class: req.body.class,
    year: req.body.year,
    manufacture_name: req.body.manufacture_name,
    image: req.body.image,
    estimated_price: req.body.estimated_price,
    user_id: req.session.user_id
});
    res.status(200).json(carData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// delete a car
router.delete('/:id', async (req, res) => {
    try {
    const carData = await Car.destroy({
        where: {
        id: req.params.id
        }
    });

    if (!carData) {
        res.status(404).json({ message: 'No Car found with this id!' });
        return;
    }

    res.status(200).json(carData);
    } catch (err) {
    res.status(500).json(err);
    }
});

module.exports = router;