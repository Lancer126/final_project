
exports.up = function(knex) {
  return knex.schema.createTable('event_time', function (table) {
    table.increments();
    table.string('start_time');
    table.integer('event_id');
    table.integer('user_id');
    table.string('event_nick_name');

});
}
exports.down = function(knex) {
  return knex.schema.dropTable('event_time');
  
};
