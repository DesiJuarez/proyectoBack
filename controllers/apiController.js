const {Consultpets} = require ('../models/pets.js');
const {validationResult} = require("express-validator");
const axios = require("axios")

module.exports ={
    async verPets (req, res){
        const pet = await Consultpets.find()
        res.status(200).json({pet})
    },
    async busquedaPet (req, res){
        const pet = await Consultpets.findOne({legajo: req.params.legajo})
        res.status (200).json({ pet })
    },
    async guardarPet (req, res){
        try {
            const mascota =await Consultpets.find ()
            const ultimaMascota =mascota [mascota.length - 1]
            const err = validationResult(req)
            if (err.isEmpty()) {
                const petnew = new Consultpets({
                    legajo:ultimaMascota.legajo +1,
                    nombre:req.body.nombre,
                    sexo:req.body.sexo,
                    especie:req.body.especie,
                    raza:req.body.raza,
                    peso:req.body.peso

                })
                await petnew.save()
                res.status(201).json({petnew})
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(501).json(error)    
        }
    },
    async editarPet(req, res){
        try {
            const err =validationResult (req)
            if (err.isEmpty()) {
                await Consultpets.findOneAndUpdate({legajo: req.params.legajo},req.body)
                res.status(201).json(req.body)
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(501).json(error)
        }
    },
    async eliminarPet(req, res){
        const pets = await Consultpets.findByIdAndDelete(req.params.id)
        res.status (200).json({msg:"Se elimino pet",pets})
    },
    async consultaAxios(req,res){
        try {
            const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
            res.json({response: respuesta.data, status: respuesta.status})
        } catch (error) {
            res.json({response: error.response.data, status: error.response.status})
        }

    }
}
