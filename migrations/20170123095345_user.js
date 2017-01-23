exports.up = function(knex, Promise) {
    return knex.schema.createTable('user', function(table) {
        table.increments();
        table.text('user').notNullable();
        table.text('password').notNullable();
        table.text('name');
        table.text('age');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user');
};
