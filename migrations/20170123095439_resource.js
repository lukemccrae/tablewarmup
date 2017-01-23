exports.up = function(knex, Promise) {
    return knex.schema.createTable('resource', function(table) {
        table.increments();
        table.text('name');
        table.text('description')
        table.integer('user_id') //underscore is used to define column name
            .references('user.id') // period tells knex to look in column 'id' of row 'user' to point the foreign key the foreign key
            .unsigned() //only accept positive integers
            .notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('resource');
};
