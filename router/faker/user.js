const faker = require('faker');

module.exports = () => ({
  id: faker.random.alphaNumeric(10),
  userName: faker.internet.userName(),
  avatar: faker.internet.avatar(),
  email: faker.internet.email(),
  lastConnection: {
    ip: faker.internet.ip(),
    ipv6: faker.internet.ipv6(),
    mac: faker.internet.mac(),
    date: faker.date.recent(),
  },
});
