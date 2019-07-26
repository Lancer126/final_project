exports.up = function(knex) {
  return knex.schema.table('users', function(t) {
      t.string("phone_number")
      t.string('emergency_contact_number')
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', function(t) {
      t.dropColumn("phone_number")
      t.dropColumn('emergency_contact_number')
  });
};
