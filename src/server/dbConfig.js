import mongoose from 'mongoose';
 try{
    mongoose.connect(process.env.MONGODB).then(()=>{console.info('Base de datos conectada correctamente')})
 }catch(error){
    console.log('Error de conexion a la base de datos')
 }

 export default mongoose;
 