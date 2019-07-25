
exports.up = function(knex) {
  return knex.schema.createTable('assitance', function (table) {
    table.increments();
    table.string('category');
    table.string('description');
    table.integer('event_id');
    table.integer('user_id');
    table.string('status');
    
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('assitance');
};

// request aid => set alert(notification) => after that certain amount of time, app will send a text =>