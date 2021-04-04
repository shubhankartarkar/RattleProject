const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql')
const sql = require('mssql')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/public', express.static(__dirname + '/public'))

let db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "rattle"
});


app.get('/api/fetchProducts', (req, res) => {
  
    db.query(`select productId, ifnull(name,'') as name, ifnull(price,0) as price,ifnull(discount,0) as discount,
  ifnull(rating,0) as rating,ifnull(imageurl,'product-image-placeholder.jpg') as image, 
    (ifnull(price,0) - (ifnull(price,0) * ifnull(discount,0)/100)) as discountedPrice
  from products`,(err, result) => {
    if (err) {
      res.json({ status: 'error', errorMsg:err})
    } else {
      res.status(200).json({ status: 'success', products: result })
    }
  })
})

app.post('/api/confirmOrder', (req, res) => {

  let { userInfo: { name, address, mobile, cartTotal, totalTax }, cart } = req.body

  console.log(req.body.userInfo)

  if (name.length > 0 && address.length > 0 && mobile.length > 0) {

    db.query(`INSERT INTO orders(CustomerName, MobileNo, Address, OrderDate, OrderTotal, TaxTotal, ShippingCharges) 
                          values(?, ?, ?, CURDATE(), ?, ? , 100);`, [name, mobile, address, cartTotal, totalTax], (error, results, fields) => {
      if (error) {
        res.json({ status: 'error', errorMsg: 'Some Error Occured' })
      } else {
        cart.forEach((item) => {
          let { discount, discountedPrice, quantity, productId } = item
          db.query(`INSERT INTO orderitem(Orderid, ProductId, Price, Discount, Quantity) 
                    values(?, ?, ?, ?, ?)`, [results.insertId, productId, discountedPrice, discount, quantity], (error, results) => {
            if (error) {
              console.log(error)
              res.json({ status: 'error', errorMsg: 'Some Error Occured' })
            } else {
              console.log(results)
            }
          })
        })
        res.json({ status: 'success', errorMsg: 'Done!!' })
      }
    })

  } else {
    res.json({ status: 'error', errorMsg: 'Invalid Inputs' })
  }
})

app.listen(3001, () => console.log('Listening...'))