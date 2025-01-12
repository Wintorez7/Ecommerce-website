const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

// database connection
mongoose.connect('mongodb+srv://mohankumhar:mohankumhar2025@cluster0.l75xm.mongodb.net/')
       .then(() => console.log("MongoDB Connected"))
       .catch((error) => console.log("MongoDB Connection Error",error))

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
       origin:'http://localhost:5173',
       methods:['GET','POST','DELETE','PUT'],
       allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma"
       ],
       credentials:true
    })   
);

app.use(cookieParser());

// Middleware
app.use(express.json());

app.listen(PORT, () => {
     console.log(`Server is Runnug at ${PORT}`)  
})