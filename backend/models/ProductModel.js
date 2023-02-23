import { Sequelize } from "sequelize";
import db from "../config/database";
 
const { DataTypes } = Sequelize;
 
const ProductModel = db.define('products',{
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    category:{
        type: DataTypes.STRING
    },
    quantity:{
        type: DataTypes.DOUBLE
    },
    price:{
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});
 
export default ProductModel;