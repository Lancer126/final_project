
exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('email');
    table.string('password');
    table.bigInteger("phone_number")
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
