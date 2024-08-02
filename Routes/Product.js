import express from "express";
import { addProduct, deleteproductsById, getproducts, getproductsById, updateproductsById } from "../Controllers/Product.js";
const router=express.Router();
//add pro
router.post('/add',addProduct)
//get product
router.get('/all',getproducts)
//get roduct by id
router.get('/:id',getproductsById)
//update product by id
router.put('/:id',updateproductsById)
//delete by id
router.delete('/:id',deleteproductsById)
export default router