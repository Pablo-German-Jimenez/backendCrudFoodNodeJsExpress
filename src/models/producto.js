import mongoose,{Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto: {
        type:String,
        minLength:3,
        maxLength:50,
        required:true,
        unique:true
    },
    precio:{
        type:Number,
        required:true,
        minLength:100,
        maxLength:1000000
    },
    categoria:{
        type:String,
        required:true,
        enum:[
            "Acompañamientos",
            "Bebidas",
            "Ensaladas",
            "Hamburguesas",
            "Postres",
            "Pizzas",
            "Sándwiches y Wraps",
            "Veggie/Veganas"]
        
    },
    descripcion_breve:{
        type:String,
        minLength:5,
        maxLength:200,
        required:true
    },
    descripcion_amplia:{
        type:String,
        minLength:10,
        maxLength:500,
        required:true
    },
    imagen:{
        type:String,
        required:true,
        validate:(valor)=>{
            const regExp = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/
            return regExp.test(valor)
        }
    }
},
{
    timeStamps:true,
});
const Producto = mongoose.model('productos', productoSchema);

export default Producto;    