import db1 from '../config/Database.js'; 
export const getAllInventory = async (req, res) => {
    let q3 = "select *  from products";
  let data = await db1.query(q3);
  //  console.log("select distinct standard from students");

  res.send(data);
    
}
 
export const getInventoryById = async (req, res) => {
    let q3 = `select *  from products where id='${req.params.id}'`;
    let data = await db1.query(q3);
    //  console.log("select distinct standard from students");
  //console.log(data);
    res.send(data);
}
 
export const createInventory = async (req, res) => {
    let q3 = `insert into products (name,description,category,quantity,price) value('${req.body.name}','${req.body.description}','${req.body.category}','${req.body.quantity}','${req.body.price}')`;
    let re = await db1.query(q3);
    //console.log(re.insert_id);
    //res.send(`${re.insert_id}`)
  
    res.send(`${re.insert_id}`);   
}
 
export const updateInventory = async (req, res) => {
  let q3 = `update products set name='${req.body.name}',description='${req.body.description}',category='${req.body.category}',quantity='${req.body.quantity}',price='${req.body.price}' where id=${req.params.id}`;
  let re = await db1.query(q3);
  //console.log(re.insert_id);
  //   //res.send(`${re.insert_id}`)

  res.send(`${re.insert_id}`);
}
 
// export const deleteAccount = async (req, res) => {
//     let q3 = `delete  from bacc where id='${req.params.id}'`;
//   let data = await db1.query(q3);
//     //req.params.id
//     res.json({
//         "message": "Account Deleted"
//     });

// }
export const getPriceById = async (req, res) => {
  let q3 = `select price from products where id='${req.params.id}'`;
  let data = await db1.query(q3);
  //  console.log("select distinct standard from students");
//console.log(data);
  res.send(data);
}