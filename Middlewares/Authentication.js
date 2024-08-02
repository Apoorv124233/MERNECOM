import jwt from "jsonwebtoken"
import { User } from "../Modals/User.js"
export const Auth =async (req,res,next)=>{
    const token=req.header("Auth")
    if(!token)return res.json({message:"Login First"})
        const decoded=jwt.verify(token,"@#$%&")
    // console.log(decoded)
    const id=decoded.userId
    let user=await User.findById(id)
    if(!user) return res.json({message:"user not found"})
        req.user=user
    next();
}
