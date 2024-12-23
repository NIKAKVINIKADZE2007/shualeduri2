const path = require('path');
const fs = require('fs/promises');

const { Router } = require('express');
const { getExpenses, getExpense } = require('../services/allExpenses.services');

const allExpenseRouter = Router();

allExpenseRouter.get('/', getExpenses);

allExpenseRouter.get('/:id', getExpense);

module.exports = allExpenseRouter;
