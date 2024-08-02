import { Product } from "../Modals/Product.js";
//add product
export const addProduct = async (req, res) => {
    const{title,description,price,category,qty,imgSrc}=req.body
    try {
        let product=await Product.create({
            title,description,price,category,qty,imgSrc
        })
        res.json({message:'product added successfully...!',product})
    } catch (error) {
        res.json(error.message)
    }
}
//get product
export const getproducts=async(req,res)=>{
    let products=await Product.find().sort({createdAt:-1})
    res.json({message:'all products...',products})
}
// find prouct by id
export const getproductsById=async(req,res)=>{
    const id=req.params.id;
    let products=await Product.findById(id)
    if(!products)return res.json({message:'invalid id'})
    res.json({message:'specific product',products})
}
// update prouct by id
export const updateproductsById=async(req,res)=>{
    const id=req.params.id;
    let products=await Product.findByIdAndUpdate(id,req.body,{new:true})
    if(!products)return res.json({message:'invalid id'})
    res.json({message:'product has been updated',products})
}
// update prouct by id
export const deleteproductsById=async(req,res)=>{
    const id=req.params.id;
    let products=await Product.findByIdAndDelete(id)
    if(!products)return res.json({message:'invalid id'})
    res.json({message:'product has been Deleted',products})
}