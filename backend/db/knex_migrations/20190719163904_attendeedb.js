
exports.up = function(knex) {
  return knex.schema.createTable('attendees', function (table) {
    table.increments();
    table.integer('user_id');
    table.integer('event_id');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('attendees');
};
