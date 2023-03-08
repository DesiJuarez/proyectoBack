const { Consultpets } = require("../models/pets")


const validarID = async (req, res, next) =>{    
    try {
        const mascota = await Consultpets.findById(req.params.id)
        if (mascota !== null ) {
            next()
        }else{
            res.status(500).json({msg:"el id es invalido"})
        }
        
    } catch (error) {
    res.status(500).json(error)  
    }
}

module.exports = {validarID}