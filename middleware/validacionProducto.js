import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionProducto = [
  body('nombreProducto')
    .isEmpty()
    .withMessage("El nombre del producto debe ser un dato obligatorio")
    .isLength({ min: 5, max: 100 })
    .withMessage("El nombre del producto debe tener entre 5 y 100 caracteres"),
    body('precio')
    .notEmpty()
    .withMessage('El precio es un dato obligatorio')
    .isNumeric()
    .withMessage('El precio debe ser un valor numérico broo'),    
    
    (req,res,next)=>resultadoValidacion(req,res,next)
];
export default validacionProducto;