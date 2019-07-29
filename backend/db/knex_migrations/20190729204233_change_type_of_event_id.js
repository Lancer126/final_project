
exports.up = function(knex) {
  return knex.schema.table('events', function(t) {
      t.string('api_id')
  });
};

exports.down = function(knex) {
  return knex.schema.table('events', function(t) {
      t.dropColumn('api_id')
  });
};
