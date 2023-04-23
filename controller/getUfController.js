const getUfServices = require('../services/getUf')

const getUfController = async (req, res) => {
    const getUf = await getUfServices(req);
    res.json(getUf)
}

module.exports = getUfController;