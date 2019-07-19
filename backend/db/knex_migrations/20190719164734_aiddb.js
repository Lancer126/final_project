
exports.up = function(knex) {
  return knex.schema.createTable('aids', function (table) {
    table.increments();
    table.string('category');
    table.string('description');
    table.integer('event_id');
    table.integer('user_id');
    table.string('status');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('aids');
};
