import { validationResult } from "express-validator";

const resultadoValidacion = (req,res,next)=>{
    const errores = validationResult(req)
    //ocurrieron  errores en la validación
    if(!errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }
    //continuar ejecución
    next()
}

export default resultadoValidacion;