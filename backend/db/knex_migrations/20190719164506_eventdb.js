
exports.up = function(knex) {
  return knex.schema.createTable('events', function (table) {
    table.increments();
    table.string('name');
    table.string('photo');
    table.text('description');
    table.timestamp('start_time');
    table.timestamp('end_time');
    table.string('organizer');
    table.integer('price');
    table.string('location');
    table.string('tag');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('events');
};

//knex migrate:latest
