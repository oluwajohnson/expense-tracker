const express = require("express");
const path = require("path");
const Database = require("better-sqlite3");

const app = express();
const PORT = 3000;

// Set EJS as our template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Allow Express to read form data
app.use(express.urlencoded({ extended: true }));

// Serve CSS and JavaScript files
app.use(express.static(path.join(__dirname, "public")));

// Connect to the SQLite database
const db = new Database(path.join(__dirname, "data", "expenses.db"));

// Create the expenses table if it does not already exist
db.exec(`
    CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        description TEXT NOT NULL,
        amount REAL NOT NULL,
        category TEXT NOT NULL,
        expense_date TEXT NOT NULL
    )
`);


// Start the server
app.listen(PORT, () => {
    console.log(`Expense Tracker is running at http://localhost:${PORT}`);
});

// Dashboard
app.get("/", (req, res) => {
    const expenses = db.prepare(`
        SELECT * FROM expenses
        ORDER BY expense_date DESC, id DESC
    `).all();

    const statistics = db.prepare(`
        SELECT
            COALESCE(SUM(amount), 0) AS total,
            COUNT(*) AS count
        FROM expenses
    `).get();

    res.render("index", {
        expenses,
        total: statistics.total,
        count: statistics.count
    });
});

// Add expense page
app.get("/add-expense", (req, res) => {
    res.render("add-expense", {
        title: "Add Expense"
    });
});


// Display spending summary
app.get("/summary", (req, res) => {
    const totalResult = db.prepare(`
        SELECT
            COALESCE(SUM(amount), 0) AS total,
            COUNT(*) AS count
        FROM expenses
    `).get();

    const categoryTotals = db.prepare(`
        SELECT
            category,
            SUM(amount) AS total
        FROM expenses
        GROUP BY category
        ORDER BY total DESC
    `).all();

    res.render("summary", {
        total: totalResult.total,
        count: totalResult.count,
        categoryTotals
    });
});


// Delete an expense
app.post("/expenses/:id/delete", (req, res) => {
    const { id } = req.params;

    db.prepare(`
        DELETE FROM expenses
        WHERE id = ?
    `).run(id);

    res.redirect("/expenses");
});




// Display all expenses
app.get("/expenses", (req, res) => {
    const expenses = db.prepare(`
        SELECT * FROM expenses
        ORDER BY expense_date DESC, id DESC
    `).all();

    res.render("expenses", {
        expenses
    });
});




// Add a new expense
app.post("/expenses", (req, res) => {
    const { description, amount, category, expense_date } = req.body;

    const statement = db.prepare(`
        INSERT INTO expenses
        (description, amount, category, expense_date)
        VALUES (?, ?, ?, ?)
    `);

    statement.run(
        description,
        Number(amount),
        category,
        expense_date
    );

    res.redirect("/");
});