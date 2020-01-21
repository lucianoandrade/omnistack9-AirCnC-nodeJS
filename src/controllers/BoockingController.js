const Boocking = require('../models/Boocking');

module.exports = {
    async store(req, res) {
        const { user_id } = req.headers;
        const { spot_id } = req.params;
        const { date } = req.body;

        const boocking = await Boocking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        await boocking.populate('spot').populate('user').execPopulate();

        return res.json(boocking);
    }
};