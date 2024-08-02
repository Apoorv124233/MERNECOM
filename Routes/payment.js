import express from 'express'
// import {
//   checkout,
//   verify,
//   userOrder,
//   allOrders,
// } from "../Controllers/payment.js";
import { checkout,verify,userOrder,allOrders } from '../Controllers/Payment.js';
// import { Authenticated } from '../Middlewares/Auth.js';
import { Auth } from '../Middlewares/Authentication.js';

const router = express.Router();

// checkout
router.post('/checkout',checkout);

// verify-payment & save to db
router.post('/verify-payment',verify)

// user order
router.get("/userorder",Auth, userOrder);

// All order's
router.get("/orders", allOrders);




export default router