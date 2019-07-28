
exports.up = function(knex) {
  t.string("facebook_id")
  t.string('facebook_token')
  t.string('facebook_email')
  t.string('facebook_name')
  
};

exports.down = function(knex) {
  t.string("facebook_id")
  t.string('facebook_token')
  t.string('facebook_email')
  t.string('facebook_name')
  
};
