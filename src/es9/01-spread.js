const user = { username: 'Yanpi', age: 22, country: 'VZ' }
const { username, ...values } = user;
console.log(username);
console.log(values);