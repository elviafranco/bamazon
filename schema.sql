DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;
USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100),
  department_name VARCHAR (100),
  price DECIMAL(13,2) NULL,
  stock_quantity INT NULL, 
   PRIMARY KEY (item_id)
);


--SEEDS
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chocolate Syrup", "Sweets", 4.91, 12); 

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ground Venison", "Meat", 12.96, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Passion Fruit Syrup", "Sweets", 15.19, 53);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Tomato", "Vegetables", 3.78, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grapes", "Fruit", 10.44, 48);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cheddar Cheese", "Dairy", 13.44, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wine", "Beverages", 10.98, 28);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Brie Cheese", "Dairy", 12.47, 79);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Skim Milk", "Dairy", 6.58, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Beef", "Meat", 10.00, 15);

SELECT * FROM products;



