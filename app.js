const express = require("express");
const app = express();
const dbconnet = require("./config");
const { route } = require("./router/router.js");
app.use (express.json());
const newCustomer = require('./router/router.js')
app.get('/customers', async(req, res) => {
    try{
  const allcustomers = await dbconnet.query(`SELECT * FROM customers `)
  res.status(200).json(allcustomers.rows);
}
catch(error) {
    console.log(error.message);
    res.status(404).send("Error: 404 data not found");
}
});
app.use('/',newCustomer);
app.listen(5000, ()=>{
    console.log("Server listening on port 5000.............");
  });
  