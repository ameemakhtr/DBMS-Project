import express from "express"
import {placeOrder, allOrders, userOrders, updateStatus} from "../controllers/orderController.js"
import adminAuth from "../middleware/adminAuth.js"
import authUser from "../middleware/Auth.js"

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Features (COD Only)
orderRouter.post('/place',authUser,placeOrder)

// User Feature
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter