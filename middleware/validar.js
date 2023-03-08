const {Consultpets} = require("../models/pets");

const validar = async (req, res, next) => {
    try {
        const animal = await Consultpets.findOne({legajo: req.params.legajo});
        if (animal !== null) {
            next()
        } else {
            res.status(404).json({msg:"especie inexistentente"})
        }
    } catch (error) {
        res.status(500).json(error)

    }
}

module.exports = {validar}