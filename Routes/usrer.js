import express from 'express'
import {getAllUsers, profile, register} from '../Controllers/user.js';
import {login} from '../Controllers/user.js';

import { Auth } from '../Middlewares/Authentication.js';

const router = express.Router();

//register User
router.post('/register',register) // /api/user/register
//login User
router.post('/login',login) // /api/user/login

router.get('/all',getAllUsers) // /api/user/users

// get user profile
router.get('/profile',Auth,profile)
export default router

// get user profile

