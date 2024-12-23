const express = require('express');
const useRouter = require('./routes/expenses.route');
const allExpenseRouter = require('./routes/allexpenses.route');

const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use('/expenses', useRouter);

app.use('/expense-list', allExpenseRouter);

app.get('/', (req, res) => {
  res.send('hello go to /expenses');
});

app.get('/create-expense', (req, res) => {
  res.render('pages/createExpense.ejs');
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
