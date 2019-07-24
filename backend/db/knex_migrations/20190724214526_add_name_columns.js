
exports.up = function(knex) {
    return knex.schema.table('users', function(t) {
        t.string('first_name');
        t.string('last_name');
    });
};

exports.down = function(knex) {
    return knex.schema.table('users', function(t) {
        t.dropColumn('first_name');
        t.dropColumn('last_name');
    });
};
