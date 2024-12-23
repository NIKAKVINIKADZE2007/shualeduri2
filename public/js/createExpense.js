const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const category = e.target.category.value;
  const price = e.target.price.value;
  const amount = e.target.amount.value;

  console.log(category);
  console.log(price);
  console.log(amount);

  const expese = {
    category,
    price,
    amount,
  };

  const res = await fetch('http://localhost:3000/expenses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(expese),
  });
});
