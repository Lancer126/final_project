
exports.up = function(knex) {
<<<<<<< HEAD
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('email');
    table.string('password');
    table.bigInteger("phone_number")
  });
=======
  return knex.schema.createTable('users', t =>{
    t.increments('id').unsigned().primary();
    t.string('email')
    t.string('password')
    t.string('phone_number')
    t.string('connections')
    
  })
  
>>>>>>> client
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
