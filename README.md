# Expense Tracker

## Overview

Expense Tracker is a Node.js web application that allows users to record, view, manage, and summarize their expenses.

The application uses Express to handle web requests and EJS to dynamically generate HTML pages on the server. Expense records are stored in a SQLite database.

## Features

* Add new expenses
* View expenses on the dashboard
* Delete existing expenses
* View total spending
* View the number of recorded expenses
* View spending totals by category
* Confirmation message after successfully adding an expense
* Confirmation message after successfully deleting an expense
* Confirmation prompt before deleting an expense
* Validation and error handling for invalid expense information
* Responsive interface for smaller screens

## Technologies Used

* JavaScript
* Node.js
* Express
* EJS
* SQLite
* HTML
* CSS

## Web App Requirements

### Dynamically Generated Pages

The application contains multiple dynamically generated pages:

1. **Dashboard (`/`)**

   * Displays expense records retrieved from the SQLite database.
   * Calculates and displays total spending and the number of expenses.

2. **Add Expense (`/add-expense`)**

   * Provides a form for entering expense information.
   * User input is processed by the Node.js application and stored in the database.

3. **Summary (`/summary`)**

   * Displays spending totals grouped by expense category.
   * Calculates category percentages based on the total spending.

### User Interaction

The application is interactive because the content displayed is affected by user input.

A user can enter:

* Expense description
* Amount
* Category
* Date

The information is submitted to the Node.js server, stored in the SQLite database, and then displayed on the Dashboard and Summary pages.

Users can also delete expenses from the Dashboard.

### Local Web Server

The application runs locally using the Node.js and Express server.

Start the application with:

```bash
npm start
```

Then open:

```text
http://localhost:3000
```

## Database

The application uses SQLite to store expense information.

Each expense contains:

* ID
* Description
* Amount
* Category
* Date

The database is automatically created when the application starts.

## JavaScript Concepts Demonstrated

The project also demonstrates several JavaScript programming concepts.

### ES6 Array Functions

The application uses native JavaScript array functions including:

* `filter()`
* `map()`
* `reduce()`

These are used to process expense records and calculate information displayed by the application.

### Recursion

The application includes a recursive function named `calculateTotalRecursive()`.

The function processes the expense amounts and recursively calculates the total.

### Exception Handling

The application validates user input and throws an error when invalid information is submitted.

The error is handled using `try/catch`, and an appropriate message is displayed to the user.

### Third-Party JavaScript Libraries

The project uses JavaScript packages created by other developers, including:

* Express
* EJS
* better-sqlite3

## Project Structure

```text
expense-tracker/
├── data/
│   └── expenses.db
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── views/
│   ├── index.ejs
│   ├── add-expense.ejs
│   └── summary.ejs
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Installation

### Requirements

Node.js and npm must be installed.

### Install Dependencies

Open a terminal in the project directory and run:

```bash
npm install
```

### Start the Application

Run:

```bash
npm start
```

The application will be available at:

```text
http://localhost:3000
```

## How to Use

### Dashboard

The Dashboard displays the recorded expenses and summary statistics.

Click **+ Add Expense** to create a new expense.

### Adding an Expense

Enter the description, amount, category, and date, then select **Save Expense**.

After the expense is successfully saved, the application returns to the Dashboard and displays a confirmation message.

### Deleting an Expense

Select **Delete** beside an expense.

The application asks for confirmation before deleting the record.

If the deletion is confirmed, the record is removed from the SQLite database and a success message is displayed.

### Summary

Select **Summary** from the navigation menu to view total spending and spending by category.

## Error Handling

The application checks submitted expense information before saving it.

For example, an error is generated if:

* The description is empty.
* The amount is missing or less than or equal to zero.
* The category is missing.
* The date is missing.

These errors are handled by the application and displayed on the Add Expense page.

## Learning

This project helped me practice building a server-side web application with JavaScript and Node.js. I learned how to create routes with Express, generate dynamic pages with EJS, process form submissions, store information in SQLite, work with JavaScript array functions, use recursion, and handle errors.

The project also gave me experience connecting the different parts of a web application so that information entered by a user can be processed, stored, and displayed dynamically.

## Author

CSE 310 Applied Programming Student
