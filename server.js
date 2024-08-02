import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/usrer.js';
import bodyParser from 'express'
import cors from 'cors';
import productrouter from './Routes/Product.js'
import cartRouter from './Routes/cart.js'
import Addaddress from './Routes/address.js'
import paymentRouter from './Routes/payment.js';
const app = express();
app.use(bodyParser.json())

app.use(cors({
  origin:true,
  methods:["GET","POST","DELETE","PUT"],
  credentials:true
}))
//home testing route
app.get('/', (req, res) => res.json({ message:'this is home route'}));

//user Router
app.use('/api/user',userRouter)

//product Router

app.use('/api/product',productrouter)

//cart router
app.use('/api/cart',cartRouter)
//address router
app.use('/api/address',Addaddress)

app.use('/api/payment',paymentRouter)


mongoose.connect(
  "mongodb+srv://apoorvkarn2002:fLlTu7qSLWv7cgYF@cluster0.xdcyj0v.mongodb.net/",{
    dbName: "Project_Mern"
  }
)
.then(() => console.log("MongoDB is connected successfully...!"))
.catch((err) => console.log(err));

const port = 1000;
app.listen(port, () => console.log(`Server is running on port ${port}`));