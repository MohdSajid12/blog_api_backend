import express from 'express';
import dotenv from 'dotenv';
import connectDb  from "./config/db.js"
import blogRoutes from "./routes/Blog_routes.js"

const app = express()
dotenv.config();

app.use(express.json());
const PORT = process.env.PORT || 5000;
connectDb();


app.get('/',(req,res)=>{
    res.send(`server is working fine`)
})
app.use('/blog' , blogRoutes);

app.listen(PORT ,()=>{
    console.log(`server is listening at the port ${PORT}`)
})