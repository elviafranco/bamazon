const mysql = require("mysql");
const inquirer = require("inquirer");

// 1. Creating connection to My SQL DB
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazonDB"
});

// 1a. Error handling + where you call function to run
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  //Function to run
  queryAllItems();
});


// 2. Creating function to query all items in DB 
function queryAllItems() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    //Display table for all results
    console.table(res);
    prompt();
  });
}

// Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
// However, if your store does have enough of the product, you should fulfill the customer's order.

// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.

function prompt() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "idQuestion",
        message: "What is the ID of the product that you would like to buy?"
      },
      {
        type: "input",
        name: "unitsQuestion",
        message: "How many units of the product would you like to buy?",
        // validate: function(answer){
        //   if (answer.unitsQuestion <= res[0].stock_quantity) {
        //     return console.log(true);
        //   }
        //   else {
        //     console.log("Insufficient Quantity! Your order could not be placed.");
        //     connection.end();
        //   }
        // }
      }
    ])
    .then(function (answer) {
      connection.query("SELECT * FROM products WHERE ?", { item_id: answer.idQuestion },
        function (err, res) {
          if (err) throw err;
          console.log(res);
          if (answer.unitsQuestion <= res[0].stock_quantity) {
            console.log(true);
            updateProduct();
          }
          else {
            console.log("Insufficient Quantity! Your order could not be placed.");
            connection.end();
          }
        });
    });
}

function updateProduct() {
  console.log("Updating all Rocky Road quantities...\n");
  const query = connection.query(
    "UPDATE products SET ? WHERE ?",
    [
      {
        quantity: 100
      },
      {
        flavor: "Rocky Road"
      }
    ],
    function(err, res) {
      console.log(res.affectedRows + " products updated!\n");
      // Call deleteProduct AFTER the UPDATE completes
      deleteProduct();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
}






