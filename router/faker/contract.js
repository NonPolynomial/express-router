const faker = require('faker');

module.exports = () => ({
  id: faker.random.alphaNumeric(10),
  type: faker.commerce.productName(),
  bank: {
    account: faker.finance.account(),
    iban: faker.finance.iban(),
    bic: faker.finance.bic(),
    type: faker.finance.transactionType(),
  },
});
