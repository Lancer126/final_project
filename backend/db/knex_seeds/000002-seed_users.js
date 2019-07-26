const faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex('users').del(),
    knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1'),
    knex('users').then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: faker.internet.email(),
          password: faker.internet.password(),
          phone_number: "5195259581",
          emergency_contact_name: faker.name.firstName(),
          emergency_contact_number: "5149796909",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
        },
        {
          email: faker.internet.email(),
          password: faker.internet.password(),
          phone_number: "4387778885",
          emergency_contact_name: faker.name.firstName(),
          emergency_contact_number: "5146496726",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
        },
        {
          email: faker.internet.email(),
          password: faker.internet.password(),
          phone_number: "5146496726",
          emergency_contact_name: faker.name.firstName(),
          emergency_contact_number: "4387778885",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
        },
        {
          email: faker.internet.email(),
          password: faker.internet.password(),
          phone_number: "5149796909",
          emergency_contact_name: faker.name.firstName(),
          emergency_contact_number: "4387778885",
          first_name: faker.name.firstName(),
          last_name: faker.name.lastName(),
        }
      ]);
    }),
  ]);
};