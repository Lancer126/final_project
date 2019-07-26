exports.up = function(knex) {
  return knex.schema.table('users', function(t) {
      t.dropColumn("phone_number")
      t.dropColumn('emergency_contact_number')
  });
};

exports.down = function(knex) {
  return knex.schema.table('users', function(t) {
      t.bigInteger("phone_number")
      t.bigInteger  ('emergency_contact_number')
  });
};
