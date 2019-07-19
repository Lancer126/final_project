
exports.up = function(knex) {
  return knex.schema.createTable('tickets', function (table) {
    table.increments();
    table.integer('ticket_id'); //joint key
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tickets');
};
