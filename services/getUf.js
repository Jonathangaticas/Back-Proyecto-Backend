const axios = require('axios');

const getUfServices = async () => {
    const { data } = await axios.get('https://mindicador.cl/api')
    const { uf } = data;
    return uf;
}

module.exports = getUfServices;