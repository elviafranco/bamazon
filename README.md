# Bamazon

## Overview

Bamazon is an inventory management command line interface (CLI)application created by Elvia Franco for UAGIL201905FSF2. 

The application displays an inventory table with the following columns:

  * item_id (unique id for each product)
  * product_name (Name of product)
  * department_name
  * price (cost to customer)
  * stock_quantity (how much of the product is available in stores)

The inventory table is displayed to the user and the application allows the user to place orders that deplete stock quantity from Bamazon's inventory. 

## Motivation 

The motivation behind the creation of this project is primarily due to the learning opportunity regarding databases that this particular project presents. In this project, I learned how to work with relational database, MySQL and MySQL GUI's such as Workbench. I gained a better understanding of connecting Node.js servers to MySQL databases to perform queries based on client requests and return responses accordingly. 

### Key Topics Learned
* MySQL Workbench
* MySQL command prompt
* Creating & dropping databases/tables
* Schema.sql and seeds.sql files
* CRUD (Create, Read, Update, Delete)
* Primary and foreign keys
* Node.js
* Inquirer

## Prerequisites

In order to utilize Bamazon, you will need to run **npm i** from the command line to install the appropriate packages for this particular project. 

## Tech Used
* MySQL NPM package
* Inquirer NPM package
* Node.js

## User Guide + Screenshots

### Step 1: Initialize 
Install the appropriate packages for this project.

![initialize](https://drive.google.com/uc?export=view&id=1sIyOKxr_Tyu6Yr0Dl2j9T7-A89T_6n4i)

### Step 2: Run Command + Answer prompt questions 
1. Run 
`node bamazonCustomer.js` 

![node](https://drive.google.com/uc?export=view&id=1PZqetiUb1GpEAqARj5MyT8p_HVVR9L5l)

2. Once the inventory (product) table display, you will be prompted to answer the following questions: 

* `What is the ID of the product that you would like to buy? <insert answer here>`

* `How many units of the product would you like to buy? <insert answer here>`

* `Are you sure? <Y/n>`

* NOTE: Prompt 1 and 2 have a number input type. So you should only input number values. Any other data type will result in an error message. 

![Prompt](https://drive.google.com/uc?export=view&id=16afNeIooUZjcbAxSEreCDVvbJnb4vmYn)

3. Once prompt responses are provided the following messages should display:
* Updated stock quantity for the selected product
* Message notifying the user that the order has been successfully fulfilled and the total cost of the order

![Answers](https://drive.google.com/uc?export=view&id=1PbMP4M6m2VuU5PLrgHW7kUo4-pInHuNw)

### Step 3: Order fulfilled and the user can place another order
4. If the order has been successfully fulfilled, the connection should end and the user can repeat **Step 2 Run Command + Answer prompt questions**.





