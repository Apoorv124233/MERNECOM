import express from 'express';
import { Addaddress } from '../Controllers/address.js'; // Ensure the path is correct
import { Auth } from '../Middlewares/Authentication.js';
import { getAddress } from '../Controllers/address.js';
const router = express.Router();

router.post('/add',Auth, Addaddress);
router.get('/get',Auth, getAddress);

export default router;
