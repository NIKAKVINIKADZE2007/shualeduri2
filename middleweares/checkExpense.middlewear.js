const checkExpensemiddlewear = (req, res, next) => {
  const { category, amount, price } = req.body;

  if (!category || !amount || !price)
    return res.status(400).json({ message: 'missing feilds' });

  next();
};

module.exports = { checkExpensemiddlewear };
