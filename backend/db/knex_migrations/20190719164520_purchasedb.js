
exports.up = function(knex) {
  return knex.schema.createTable('purchases', function (table) {
    table.increments();
    table.integer('event_id'); //joint key
    table.integer('user_id');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.string('stripe_charge_id');
    table.string('email');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('purchases');
};
