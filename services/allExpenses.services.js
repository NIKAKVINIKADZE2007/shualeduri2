const path = require('path');
const fs = require('fs/promises');

async function getData() {
  const rawData = await fs.readFile(newPath, 'utf-8');
  const data = await JSON.parse(rawData);

  return data;
}

const newPath = path.join(__dirname, '..', 'expense.json');

const getExpenses = async (req, res) => {
  const data = await getData();

  res.status(200).render('pages/allExpensePage.ejs', { data });
};

const getExpense = async (req, res) => {
  const data = await getData();

  const id = req.params.id;
  console.log(id);

  const expenseId = data.findIndex((el) => el.id == id);
  const expense = data[expenseId];

  console.log(expense);
  res.status(200).render('pages/expense.ejs', { expense });
};

module.exports = { getExpenses, getExpense };
