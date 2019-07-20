
exports.up = function(knex) {

  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('email');
    table.string('password');
    table.bigInteger("phone_number")
    table.string('emergency_contact_name')
    table.integer('emergency_contact_number')
  });

};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
