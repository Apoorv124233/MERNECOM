import express from 'express'
import { addToCart, clearCart, decProductQty, removeProductfromCart, userCart } from '../Controllers/Cart.js';

import { Auth } from '../Middlewares/Authentication.js';
const router = express.Router();
// add to cart
router.post('/add',Auth,addToCart);
// get user cart
router.get('/user',Auth,userCart)
//remove from cart
router.delete('/remove/:productId',Auth,removeProductfromCart)
//clear cart
router.delete('/clear',Auth,clearCart)
//dec item
router.post('/--qty',Auth,decProductQty)
export default router;