const takeOrder = (customer, callBack) => {
  console.log(`Take Orde For ${customer}`);

  callBack(customer);
};

const processOrder = (customer, callBack) => {
  console.log(`Processing order for customer 1${customer}`);

  setTimeout(() => {
    console.log(`Cooking Complete`);
    console.log(`Order processed for customer ${customer}`);
    callBack(customer);
  }, 3000);
};

const CompleteOrder = (customer) => {
  console.log(`Complete Order for ${customer}`);
};

takeOrder(`customer 1`, (customer) => {
  processOrder(customer, (customer) => {
    CompleteOrder(customer);
  });
});

console.log(`Hello`);
