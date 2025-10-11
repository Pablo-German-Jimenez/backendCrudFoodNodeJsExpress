import Server from "./src/server/config.js";
import router from "./src/routes/productos.routes.js";
const server = new Server();

//agregar las rutas
// http://localhost:3000/api/productos
server.app.use('/api/productos', router)
server.listen()