import express from "express";
 
import { 
    getAllInventory,
    createInventory,
    getInventoryById,
    updateInventory,
    getPriceById
} from "../controllers/InventController.js";

 
const router = express.Router();
router.get('/', getAllInventory);
router.get('/:id', getInventoryById);
router.post('/', createInventory);
router.patch('/:id', updateInventory);
router.patch('/:id', getPriceById);

export default router;