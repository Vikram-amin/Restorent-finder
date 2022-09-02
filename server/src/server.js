require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
app.use(epress.json());




app.listen(PORT , ()=>{
    console.log(` server listoning at port ${PORT}`);
})

