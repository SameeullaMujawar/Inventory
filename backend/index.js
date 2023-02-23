import express from "express";
//import AccountRoutes from "./routes/index.js";
import InventoryRoutes from "./routes/index.js";
import cors from "cors";
 
const app = express();
 
 
app.use(cors());
app.use(express.json());
//app.use('/accounts', AccountRoutes);
app.use('/products', InventoryRoutes);
 
app.listen(5000, () => console.log('Server running at port 5000'));