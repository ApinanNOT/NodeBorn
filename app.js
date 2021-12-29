const express = require('express'); //import express
//const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = 3000;

app.use(morgan('combined'))

//จัดการ request หน้าเปล่าๆ
app.get("/",(req,res)=>{
    //การตอบกลับ
    res.send('Hello Apinan Prakaekan');
});

//รอฟังที่ port
app.listen(port,()=>{
    debug("Listening on port %d",port);
    //console.log("Listening on port" + chalk.green(port)); แสดง port เป็นสีเขียว
});