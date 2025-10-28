import { Router } from 'express'
import { crearProducto, prueba, listarProductos, obtenerProducto, borrarProductoPorID, editarProductoPorID } from '../controllers/productos.controllers.js';

/*
GET
POST
PATH O PUT
DELETE
*/


const  router = Router()

router.route('/test').get(prueba) 
router.route('/').post(crearProducto).get(listarProductos)
router.route("/:id").get(obtenerProducto).delete(borrarProductoPorID).put(editarProductoPorID);
export default router;