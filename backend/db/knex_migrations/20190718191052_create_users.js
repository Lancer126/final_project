
exports.up = function(knex) {
  return knex.schema.createTable('users', t =>{
    t.increments('id').unsigned().primary();
    t.string('email')
    t.string('password')
    t.string('phone_number')
    t.string('connections')
    
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
