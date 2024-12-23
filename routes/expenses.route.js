const { Router } = require('express');
const {
  getExpense,
  deleteExpense,
  editExpense,
} = require('../services/expenses.services');
const { createExpense } = require('../services/expenses.services');

const {
  checkExpensemiddlewear,
} = require('../middleweares/checkExpense.middlewear');
const useRouter = Router();

useRouter.get('/', getExpense);

useRouter.post('/', createExpense);

useRouter.delete('/:id', deleteExpense);

useRouter.put('/:id', editExpense);

module.exports = useRouter;
