const express = require('express');
const app = express();
const session = require('express-session');
const mongoose = require('mongoose');

/*============ CONNECTING TO MONGODB ===========*/
const db = require('./config/keys').mongoURI;

mongoose.connect(db,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true
})
.then(()=>{console.log("MongoDB Connected");})
.catch((err)=>{console.log(err);});

const user = require('./models/user');
const test = require('./models/test');
const question = require('./models/question');
const topic = require('./models/topic');

/*================================================*/

/*================ EXTERNAL ROUTES ================*/

//UNCOMMENT YOUR ROUTE TO USE IT AND DONT FORGET TO RETURN IN THE ROUTE FILE ELSE IT WILL THROW AN ERROR :)

// const userRoutes = require('./routes/userRoutes');
// const quesRoutes = require('./routes/quesRoutes');
// const testRoutes = require('./routes/testRoutes');

// app.use('/user',userRoutes);
// app.use('/ques',quesRoutes);
// app.use('/test',testRoutes);

/*==================================================*/

app.listen(3000,()=>{
  console.log("Server Started on 3000");
});