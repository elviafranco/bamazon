// Dependencies
// =============================================================
const mysql = require("mysql");
const inquirer = require("inquirer");

// Creating connection to My SQL DB
// =============================================================
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazonDB"
});

// Error handling + calling query call to view all items in DB
// =============================================================
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllItems();
});

// Creating function to query all products in DB + call prompt function to run 
// =============================================================
function queryAllItems() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    //Display table for all results
    console.table(res);
    console.log("==============================================================")
    prompt();
  });
}

// Creating function to prompt + check if the store has enough of the product to meet the customers request in DB + if true, call update product function to run 
// =============================================================
function prompt() {
  inquirer
    .prompt([
      {
        type: "number",
        name: "idQuestion",
        message: "What is the ID of the product that you would like to buy?"
      },
      {
        type: "number",
        name: "unitsQuestion",
        message: "How many units of the product would you like to buy?",
      },
      {
        type: "confirm",
        message: "Are you sure:",
        name: "confirm",
        default: true
      }
    ])
    .then(function (inquirerResponse) {
      connection.query("SELECT * FROM products WHERE item_id = ?", [inquirerResponse.idQuestion],
        function (err, res) {
          if (err) throw err;
          
          if (inquirerResponse.unitsQuestion <= res[0].stock_quantity) {
            console.log("==============================================================")
            updateProduct(inquirerResponse,res);
    
          }
          else {
            console.log("Insufficient Quantity! Your order could not be placed. Please try again.\n");
            connection.end();
          }
        });
    });
}

// Creating function to update stock quantity 
// =============================================================
function updateProduct(inquirerResponse, res) {
  console.log("Updating stock quantity...\n");
  connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        stock_quantity: res[0].stock_quantity - inquirerResponse.unitsQuestion
      },
      {
        item_id: inquirerResponse.idQuestion
      }
    ],
    function(err, res) {
      if (err) throw err;
        // console.log(res.affectedRows + " products updated!\n");
    }
  );
  console.log("Updated stock quantity: " + (res[0].stock_quantity - inquirerResponse.unitsQuestion))
  console.log("==============================================================")
  displayCost(inquirerResponse, res);  
  connection.end();
}

// Creating function to display total cost of order
// =============================================================
function displayCost(inquirerResponse, res) {
  console.log("Order sucessfully fulfilled! Your total cost is: " + "$" + (inquirerResponse.unitsQuestion * res[0].price.toFixed(2)) + "\n")
  }