const faker = require('faker');

module.exports = () => ({
  id: faker.random.alphaNumeric(10),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  address: {
    street: `${faker.address.streetName()} ${faker.random.number({ min: 1, max: 1000 })}`,
    zipCode: faker.address.zipCode('D-#####'),
    city: faker.address.city(),
  },
  get email() {
    return faker.internet.email();
  },
});
