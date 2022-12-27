const dbconnet = require("../config");
const newCustomer =  async (req, res) => {
    try{
  const { fullname, email, password } = req.body;

  const createCustomer =  await dbconnet.query(`INSERT INTO customers (fullname, email, password) VALUES ($1, $2, $3)`
  ,[fullname,email,password]
  )
  res.status(200).send(`Customers added with ID : `);
    }
    catch (error) {
        console.log(error.message);
        res.status(404).send("Error: 404 data not found");
    }};
    module.exports = {newCustomer};