# Expense Tracker

## Description

Expense Tracker is a simple web application for recording and managing personal expenses. Users can add expenses, view their recorded expenses, delete expenses, and see a summary of their spending by category.

The project was created for the CSE 310 Web Apps module using JavaScript and Node.js.

## Features

* Add a new expense
* View all recorded expenses on the dashboard
* Delete an expense
* View total spending
* View the total number of expenses
* View spending totals by category
* Store expense information in a SQLite database
* Responsive layout for smaller screens

## Technologies

* JavaScript
* Node.js
* Express.js
* EJS
* SQLite
* HTML
* CSS

## Getting Started

### Prerequisites

You need to have Node.js and npm installed on your computer.

### Installation

1. Clone the repository.

2. Open a terminal in the project folder.

3. Install the project dependencies:

```bash
npm install
```

### Running the Application

Start the application with:

```bash
npm start
```

The application will run locally at:

```text
http://localhost:3000
```

You can also use the development command:

```bash
npm run dev
```

## How to Use

### Dashboard

The dashboard displays the recorded expenses along with the total amount spent and the number of expenses.

### Expenses

The expenses only displays the recorded expenses.

### Add an Expense

Select **Add Expense**, enter the expense description, amount, category, and date, then submit the form.

The new expense is stored in the SQLite database and appears on the dashboard.

### Summary

The Summary page displays the total spending and groups expenses by category.

### Delete an Expense

Use the **Delete** button beside an expense on the dashboard to remove it from the database.

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
│   ├── expense.ejs
│   └── summary.ejs
├── .gitignore
├── package.json
├── package-lock
```
